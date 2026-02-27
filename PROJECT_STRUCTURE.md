# Personal Tracker - Project Structure

## Frontend Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── Dashboard/          # Dashboard component files
│   │   ├── Goals/              # Goal tracking components
│   │   ├── TimeLog/            # Time logging components
│   │   ├── Projects/           # Project tracking components
│   │   └── common/             # Reusable components (Sidebar, etc)
│   ├── pages/                  # Page components
│   │   ├── Dashboard.jsx
│   │   ├── GoalsPage.jsx
│   │   ├── TimeLogPage.jsx
│   │   └── ProjectsPage.jsx
│   ├── hooks/                  # Custom React hooks
│   ├── contexts/               # Context API setup
│   ├── styles/                 # CSS/Tailwind styles
│   ├── services/               # API service calls
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── index.html
```

## Backend Structure
```
backend/
├── src/
│   ├── routes/                 # API route definitions
│   │   ├── goals.js
│   │   ├── timeentries.js
│   │   └── projects.js
│   ├── models/                 # MongoDB schemas
│   │   ├── Goal.js
│   │   ├── TimeEntry.js
│   │   ├── Project.js
│   │   └── Streak.js
│   ├── controllers/            # Route handlers
│   │   ├── goalController.js
│   │   ├── timeEntryController.js
│   │   └── projectController.js
│   ├── middleware/             # Express middleware
│   ├── config/                 # Database config
│   │   └── database.js
│   ├── app.js                  # Express app setup
│   └── server.js               # Server entry point
├── package.json
└── .env.example
```

## Quick Start Instructions

### Backend Setup
```bash
cd backend
cp .env.example .env
# Update .env with MongoDB URI
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:5173
The backend API will be available at http://localhost:5000

## Features Implemented
✅ Goal tracking with CRUD operations
✅ Time entry logging system
✅ Project tracker
✅ Streak system data model
✅ Responsive dark UI with Tailwind CSS
✅ React Router navigation
✅ API integration ready
✅ Dashboard with stats cards
✅ Weekly overview layouts
✅ Project management cards
