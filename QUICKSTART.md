# Quick Start Guide - Personal Tracker

## 🚀 5-Minute Setup

### Step 1: Backend Setup (2 minutes)
```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your MongoDB URI
npm run dev
```
✅ Backend running on http://localhost:5000

### Step 2: Frontend Setup (2 minutes)
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend running on http://localhost:5173

### Step 3: Access the App (1 minute)
Open browser to: http://localhost:5173

🎉 **You're ready to track!**

---

## 📋 First 5 Actions to Try

### 1. Create Your First Goal
1. Click **Goals** in sidebar
2. Click **+ New Goal**
3. Fill in:
   - Title: "Learn React Hooks"
   - Category: "Web Dev"
   - Deadline: 30 days from now
4. Click **Create Goal**

### 2. Log Your First Time Entry
1. Click **Time Log** in sidebar
2. Click **+ Log Time**
3. Fill in:
   - Duration: 60 minutes
   - Category: "Web Dev"
   - Notes: "Built component library"
4. Click **Log Time**

### 3. Create Your First Project
1. Click **Projects** in sidebar
2. Click **+ New Project**
3. Fill in:
   - Name: "Personal Portfolio"
   - Status: "In Progress"
   - Progress: 25%
4. Click **Create Project**

### 4. Update a Goal's Progress
1. Go to **Goals**
2. Find your goal
3. Use the slider to update progress
4. Watch it update in real-time

### 5. View Your Analytics
1. Click **Dashboard**
2. See your stats:
   - Today's hours
   - Weekly hours
   - Weekly chart
   - Category breakdown
   - Upcoming deadlines

---

## 🎯 Feature Overview

### Goals 🎓
- **Purpose**: Track learning objectives and milestones
- **What you can do**:
  - Create goals with deadlines
  - Track progress (0-100%)
  - Set category (Web Dev, DSA, Python, etc.)
  - Change status (Active, Completed, Paused, Abandoned)
  - See days until deadline
  - Filter by status

### Time Logging ⏱️
- **Purpose**: Track how much time you spend on activities
- **What you can do**:
  - Log time spent studying/coding
  - Categorize by learning track
  - View daily/weekly/monthly totals
  - Add notes about what you did
  - Edit or delete entries
  - Filter by date range

### Projects 🚀
- **Purpose**: Track long-term builds and projects
- **What you can do**:
  - Create multi-week projects
  - Track progress visually
  - Log work sessions for projects
  - Update status and notes
  - See last worked date
  - Manage multiple projects

### Dashboard 📊
- **Purpose**: Get overview of your productivity
- **What you see**:
  - Today's and weekly hours
  - Active goals count
  - Current streak
  - Weekly hours chart
  - Category distribution pie chart
  - Upcoming deadlines with status

---

## 🎨 UI Navigation

```
┌─────────────────────────────────────────┐
│ ☰ Sidebar                                    │
├─────────────────────────────────────────┤
│ 🏠 Dashboard (Main stats & charts)    │
│ 🎯 Goals (Track learning goals)       │
│ ⏱️  Time Log (Log study sessions)     │
│ ⚡ Projects (Track projects)           │
│ ⚙️  Settings (Coming soon)            │
└─────────────────────────────────────────┘
```

---

## 📝 Data Models

### Goal Object
```javascript
{
  title: "Learn TypeScript",
  description: "Master TypeScript fundamentals",
  category: "Web Dev",
  deadline: "2026-03-15",
  progress: 45,
  status: "active"
}
```

### Time Entry Object
```javascript
{
  date: "2026-02-27",
  durationMinutes: 120,
  category: "Web Dev",
  notes: "Built TypeScript components"
}
```

### Project Object
```javascript
{
  name: "Gyaandatta",
  description: "Learning platform",
  status: "in-progress",
  progress: 45,
  lastWorkedDate: "2026-02-27",
  notes: "Frontend components done"
}
```

---

## 🔧 Common Tasks

### Update a Goal
1. Go to Goals page
2. Find the goal
3. Click **Edit**
4. Change fields
5. Click **Update Goal**

### Log Work for a Project
1. Go to Projects page
2. Click **Log Work** on a project
3. Enter duration and notes
4. Click **Log Time**
(This automatically updates "Last Worked Date")

### View This Week's Hours
1. Go to Time Log
2. Click **Week** button
3. See total and chart

### Check Upcoming Deadlines
1. Go to Dashboard
2. Look at "Upcoming Deadlines" section
3. Red alerts = urgent (3 days or less)

---

## ⚠️ Troubleshooting

### API Connection Error
**Error**: "Failed to fetch goals"
**Solution**:
1. Make sure backend is running: `npm run dev` in backend folder
2. Check API URL in `frontend/.env` matches your backend

### MongoDB Connection Error
**Error**: "MongoDB Connected: error"
**Solution**:
1. Check MongoDB URI in `backend/.env`
2. Verify IP whitelist in MongoDB Atlas
3. Check internet connection

### Port Already in Use
**Error**: "Port 5000 already in use"
**Solution**:
```bash
# Kill process using port
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Blank Dashboard or Missing Data
**Solution**:
1. Create at least one goal
2. Log at least one time entry
3. Dashboard will show data once you have entries

---

## 📚 Default Categories

When logging time or creating goals, choose from:
- 🌐 **Web Dev** - React, HTML, CSS, JavaScript
- 📊 **DSA** - Data Structures, Algorithms
- 🐍 **Python** - Python learning
- 🎓 **College** - College coursework
- ✈️ **Travel Learning** - Learning during travel
- 🚀 **Projects** - Personal projects

---

## 💡 Pro Tips

### Time Tracking
- Log time daily for accuracy
- Break work into focused sessions
- Use notes to remember what you did
- Review weekly to see patterns

### Goal Setting
- Set realistic deadlines
- Break large goals into smaller ones
- Update progress weekly
- Mark completed goals as done

### Dashboard Insights
- Check dashboard every 2-3 days
- Look for category trends
- Prioritize upcoming deadlines
- Celebrate completed goals

---

## 🔐 Important Notes

### Your Data
- All data stored in your MongoDB database
- No data shared externally
- You own your data

### Private Use
- No authentication yet (coming in v2)
- Keep backend URL private
- Don't share MongoDB URI

### Backup
- Regularly backup MongoDB
- Export data if needed
- Keep .env files safe

---

## 🎓 Learning Path

If you're new to the tech stack:

1. **React Basics**
   - Components in `src/components/`
   - Pages in `src/pages/`
   - Hooks in `src/hooks/`

2. **API Integration**
   - Services in `src/services/api.js`
   - Check how components use hooks

3. **Styling**
   - `src/styles/index.css` - Global styles
   - `tailwind.config.js` - Tailwind config
   - Components use Tailwind classes

4. **Navigation**
   - React Router in `src/App.jsx`
   - Sidebar in `src/components/common/Sidebar.jsx`

---

## 📞 Need Help?

### Check These Files
- **Setup**: `SETUP.md` - Complete setup guide
- **Architecture**: `frontend/ARCHITECTURE.md` - Component design
- **API**: `backend/README.md` - API endpoints
- **Checklist**: `DEVELOPER_CHECKLIST.md` - Feature checklist

### Common Documentation
- **Frontend**: `frontend/README.md`
- **Backend**: `backend/README.md`
- **Files**: `FILE_STRUCTURE.md`

### Debug Mode
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab for API calls
- Use DevTools Sources to debug

---

## 🎉 You're All Set!

Start tracking your progress and building amazing things!

**Dashboard**: http://localhost:5173
**API**: http://localhost:5000/api

Happy learning! 🚀

---

**Version**: v1.0
**Last Updated**: Feb 27, 2026
**Owner**: Vaibhav Solanki
