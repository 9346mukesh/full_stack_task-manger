# 🧩 Full-Stack Task Manager (React, Node.js, MySQL)

This is a complete full-stack **CRUD (Create, Read, Update, Delete)** application.  
It features a **React.js frontend** that communicates with a **Node.js/Express.js RESTful API** to manage a persistent task list in a **MySQL** database.

> 🖼️ **Note:** Take a screenshot of your finished app, name it `app-screenshot.png`, and place it inside `frontend/src/assets/` for it to display below.

---

## 🚀 Features

✅ **Create:** Add new tasks to the database  
✅ **Read:** Fetch and display all tasks on initial load  
✅ **Update:** Mark tasks as "completed" or "incomplete"  
✅ **Delete:** Remove tasks from the database  
⚡ **SPA (Single Page Application):** Smooth user experience without page reloads  
🛡️ **Secure API:** Uses parameterized queries to prevent SQL injection  

---

## 🧠 Technology Stack

### 🖥️ Frontend
- React.js  
- JavaScript (ES6+)  
- Vite (Build Tool)  
- CSS3 (Plain CSS)

### ⚙️ Backend
- Node.js  
- Express.js  
- mysql2 (MySQL Driver)  
- cors (Cross-Origin Resource Sharing)

### 🗄️ Database
- MySQL

---

## ⚙️ Getting Started

Follow the steps below to get a local copy up and running.

---

### 🧩 Prerequisites

You must have the following software installed on your machine:

- [Node.js](https://nodejs.org) (includes npm)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/) 

1. Clone the Repository

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name

2. Database Setup

Start your MySQL server.

Open your MySQL client (like MySQL Workbench, or a terminal) and log in as root (or your admin user).

Run the database.sql script provided in this repository to create the task_manager_db database and the tasks table.

-- This command might vary based on your client
SOURCE database.sql;

3. Backend Setup

Navigate to the backend folder:

cd backend

Install the necessary npm packages:

npm install

IMPORTANT: Create an Environment File
Your database password should be kept secret. In the backend folder, create a new file named .env.

Add your database credentials to this file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD_HERE
DB_NAME=task_manager_db

Note: You will need to update server.js to use these .env variables instead of hardcoding them. This is a critical security practice.

Start the backend server:

node server.js

You should see:
API server listening on port 3001
Connected to MySQL database!

4. Frontend Setup

Open a new, separate terminal window.

Navigate to the frontend folder:

cd frontend

Install the necessary npm packages:

npm install

Run the React development server:

npm run dev

Your browser should automatically open to http://localhost:5173/. You can now use the app!

REST API Endpoints

The backend server provides the following endpoints:

Method

Endpoint

Description

GET

/api/tasks

Fetches all tasks.

POST

/api/tasks

Creates a new task.

PUT

/api/tasks/:id

Updates a task (e.g., toggles completion).

DELETE

/api/tasks/:id

Deletes a task by its ID.
