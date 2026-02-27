# Backend API Documentation

## Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your MongoDB URI
npm run dev
```

## API Endpoints

### Goals

- `GET /api/goals` - Get all goals
- `POST /api/goals` - Create a new goal
- `GET /api/goals/:id` - Get a specific goal
- `PUT /api/goals/:id` - Update a goal
- `DELETE /api/goals/:id` - Delete a goal

### Time Entries

- `GET /api/time-entries` - Get all time entries
- `POST /api/time-entries` - Create a new time entry
- `GET /api/time-entries/range?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Get entries by date range
- `GET /api/time-entries/daily-total?date=YYYY-MM-DD` - Get daily total
- `PUT /api/time-entries/:id` - Update a time entry
- `DELETE /api/time-entries/:id` - Delete a time entry

### Projects

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project
- `GET /api/projects/:id` - Get a specific project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Health Check

- `GET /api/health` - Check API status

## Data Models

### Goal

```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String,
  category: String (enum: ['Web Dev', 'DSA', 'Python', 'College', 'Travel Learning', 'Projects']),
  deadline: Date (required),
  progress: Number (0-100),
  status: String (enum: ['active', 'completed', 'paused', 'abandoned']),
  createdAt: Date,
  updatedAt: Date
}
```

### TimeEntry

```javascript
{
  _id: ObjectId,
  date: Date,
  durationMinutes: Number (required),
  category: String (enum: ['Web Dev', 'DSA', 'Python', 'College', 'Travel Learning', 'Projects']),
  notes: String,
  createdAt: Date
}
```

### Project

```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String,
  status: String (enum: ['planning', 'in-progress', 'on-hold', 'completed', 'abandoned']),
  progress: Number (0-100),
  lastWorkedDate: Date,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Streak

```javascript
{
  _id: ObjectId,
  currentStreak: Number,
  longestStreak: Number,
  lastActivityDate: Date,
  streakStartDate: Date,
  weeklyStreak: Boolean[],
  createdAt: Date,
  updatedAt: Date
}
```

## Error Handling

All endpoints return appropriate HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Server Error

Error responses include a message field:

```javascript
{
  message: "Error description"
}
```

## Environment Variables

```
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## Running in Different Modes

### Development
```bash
npm run dev
```

Includes nodemon for auto-reload on file changes

### Production
```bash
npm start
```

## Middleware

- CORS - Configured to accept requests from frontend
- Express.json - Parse JSON request bodies
- Express.urlencoded - Parse form data

## Database

MongoDB Atlas is configured via the MONGODB_URI environment variable. The connection is established in `config/database.js`.
