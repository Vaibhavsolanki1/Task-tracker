# Frontend Setup Guide

## Installation

```bash
cd frontend
npm install
```

## Environment Setup

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Update the API URL if needed:
```
VITE_API_URL=http://localhost:5000/api
```

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── Dashboard/       # Dashboard components
│   ├── Goals/          # Goal tracking components
│   ├── TimeLog/        # Time logging components
│   └── Projects/       # Project tracking components
├── pages/              # Page components
├── services/           # API calls
├── hooks/              # Custom React hooks
├── contexts/           # Context API
├── utils/              # Utility functions
├── constants/          # App constants
├── styles/             # CSS files
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## Features

✅ **Goals Management**
- Create, read, update, delete goals
- Track progress with visual progress bars
- Filter by status (active, completed, paused, abandoned)
- Set categories and deadlines

✅ **Time Tracking**
- Log time spent on activities
- Categorize by learning track
- View daily, weekly, and monthly totals
- Filter by date range

✅ **Project Tracking**
- Manage multiple long-term projects
- Update progress and status
- Log work sessions
- Track last worked date

✅ **Dashboard Analytics**
- Weekly hour overview chart
- Category distribution pie chart
- Upcoming deadlines list
- Daily and weekly statistics

✅ **User Interface**
- Dark racing theme
- Responsive design
- Real-time data sync
- Smooth animations

## API Integration

All API calls are made through the `services/api.js` service layer using axios.

### Example Usage

```javascript
import { goalsAPI } from '../services/api'

// Get all goals
const response = await goalsAPI.getAll()

// Create a new goal
await goalsAPI.create({
  title: 'Learn React',
  category: 'Web Dev',
  deadline: '2026-03-15',
  progress: 0
})

// Update a goal
await goalsAPI.update(goalId, { progress: 50 })

// Delete a goal
await goalsAPI.delete(goalId)
```

## Performance Tips

- Charts load data on mount and cache it
- Use the filter functions to reduce rendered items
- API calls are cached where possible
- Lazy load heavy components

## Troubleshooting

**API Connection Issues**
- Ensure backend is running on port 5000
- Check VITE_API_URL in .env
- Verify MongoDB is connected

**Module Not Found**
- Clear node_modules: `rm -rf node_modules && npm install`
- Restart dev server

**Styling Issues**
- Ensure Tailwind CSS is properly configured
- Check tailwind.config.js for custom color definitions
