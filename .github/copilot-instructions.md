# AI Agent Instructions for Task Manager Application

## Project Architecture

This is a full-stack Task Manager application with:
- Frontend: React + Vite (latest React 19)
- Backend: Express.js + MySQL
- Styling: Tailwind CSS

### Key Components

- `frontend/`: React SPA using Vite bundler
  - `src/App.jsx`: Main application component
  - `src/main.jsx`: Application entry point
  - Uses latest React 19 features
  - Configured with ESLint for code quality

- `backend/`: Express.js REST API
  - `server.js`: Main server file with all API endpoints
  - MySQL database connection with connection pooling
  - CRUD operations for tasks

## Development Workflow

1. Start the backend:
```bash
cd backend
npm install
npm start  # Runs on port 3001
```

2. Start the frontend:
```bash
cd frontend
npm install
npm run dev  # Runs on port 5173 with HMR
```

## API Endpoints

All endpoints are prefixed with `/api`:
- `GET /api/tasks`: List all tasks
- `POST /api/tasks`: Create new task
- `PUT /api/tasks/:id`: Update task completion
- `DELETE /api/tasks/:id`: Delete task

## Key Patterns & Conventions

1. Database:
   - Connection pooling for performance
   - Consistent error handling with HTTP status codes
   - Prepared statements for SQL injection prevention

2. Frontend:
   - Vite HMR (Hot Module Replacement) enabled
   - ESLint configuration with React-specific rules
   - Tailwind CSS for styling
   - React 19 with latest features

## Environment Setup

Backend requires MySQL with:
- Database: `task_manager_db`
- Default port: 3001
- Configure credentials in `backend/server.js`

## Common Tasks

- Adding new API endpoints: Follow the pattern in `server.js` using async/await
- Frontend styling: Use Tailwind CSS utility classes
- Building for production: `npm run build` in frontend directory
- Code linting: `npm run lint` in frontend directory

## Integration Points

- Frontend-Backend communication via REST API
- CORS enabled for development (`localhost:5173` -> `localhost:3001`)
- JSON data format for all API requests/responses