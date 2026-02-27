import express from 'express';
import cors from 'cors';
import goalsRoute from './routes/goals.js';
import timeEntriesRoute from './routes/timeentries.js';
import projectsRoute from './routes/projects.js';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/goals', goalsRoute);
app.use('/api/time-entries', timeEntriesRoute);
app.use('/api/projects', projectsRoute);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

export default app;
