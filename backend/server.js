const express = require('express');
const mysql = require('mysql2/promise'); // Using promise-based version
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// --- 1. MIDDLEWARE ---
app.use(cors()); // Allow cross-origin requests (from React)
app.use(express.json()); // Parse incoming JSON request bodies

// --- 2. DATABASE CONNECTION ---
// IMPORTANT: Update with your MySQL credentials
const dbConfig = {
  host: 'localhost',
  user: 'root', // <-- !! CHANGE TO YOUR MYSQL USER
  password: 'ORIGINAL MYSQL PASSWORD', // <-- !! CHANGE TO YOUR MYSQL PASSWORD
  database: 'task_manager_db'
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Test connection on startup
pool.getConnection()
  .then(connection => {
    console.log('Connected to MySQL database!');
    connection.release(); // Release the connection back to the pool
  })
  .catch(err => {
    console.error('Error connecting to MySQL:', err.message);
  });

// --- 3. API ROUTES (CRUD) ---

// GET /api/tasks (Read all tasks)
app.get('/api/tasks', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// POST /api/tasks (Create a new task)
app.post('/api/tasks', async (req, res) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: 'Task title is required' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO tasks (title) VALUES (?)',
      [title]
    );
    
    // Send back the newly created task
    const [newTasks] = await pool.query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
    res.status(201).json(newTasks[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database insert failed' });
  }
});

// PUT /api/tasks/:id (Update a task's completion status)
app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  if (typeof completed !== 'boolean') {
    return res.status(400).json({ error: '`completed` field (boolean) is required' });
  }

  try {
    const [result] = await pool.query(
      'UPDATE tasks SET completed = ? WHERE id = ?',
      [completed, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Send back the updated task
    const [updatedTasks] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
    res.json(updatedTasks[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database update failed' });
  }
});

// DELETE /api/tasks/:id (Delete a task)
app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query(
      'DELETE FROM tasks WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Send back a success confirmation
    res.status(200).json({ message: 'Task deleted successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database deletion failed' });
  }
});


// --- 4. START THE SERVER ---
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
