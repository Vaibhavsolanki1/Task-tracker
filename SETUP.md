# Personal Tracker - Complete Setup Guide

## 📋 Prerequisites

- Node.js (v16+)
- MongoDB Atlas account
- Git (optional)

## 🚀 Quick Start

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment:
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB URI:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/personal-tracker
```

5. Start the server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
tracker/
├── backend/
│   ├── src/
│   │   ├── routes/        # API route definitions
│   │   ├── models/        # MongoDB schemas
│   │   ├── controllers/   # Route handlers
│   │   ├── middleware/    # Express middleware
│   │   ├── config/        # Configuration files
│   │   ├── app.js         # Express app setup
│   │   └── server.js      # Entry point
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── src/
    │   ├── components/    # React components
    │   ├── pages/         # Page components
    │   ├── services/      # API calls
    │   ├── hooks/         # Custom hooks
    │   ├── contexts/      # Context API
    │   ├── utils/         # Utility functions
    │   ├── constants/     # App constants
    │   ├── styles/        # CSS files
    │   ├── App.jsx        # Main component
    │   └── main.jsx       # Entry point
    ├── package.json
    ├── vite.config.js
    └── .env.example
```

## ✨ Key Features

### 1. Goal Tracking
- Create goals with deadlines
- Track progress (0-100%)
- Categorize by learning track
- Monitor status (active, completed, paused, abandoned)

### 2. Time Logging
- Log study/work sessions
- Track by category
- View daily/weekly/monthly totals
- Filter by date range

### 3. Project Management
- Manage long-term projects
- Update progress and status
- Log work sessions
- Track last activity date

### 4. Analytics Dashboard
- Weekly hours overview (bar chart)
- Category distribution (pie chart)
- Upcoming deadlines list
- Real-time statistics

### 5. User Interface
- Dark racing theme
- Responsive design
- Smooth animations
- Fast load times

## 🔧 Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication (future)
- **bcryptjs** - Password hashing (future)

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Recharts** - Charting library
- **Axios** - HTTP client
- **Lucide React** - Icons

## 📊 Database Schema

### Goals Collection
```javascript
{
  title: String,
  description: String,
  category: String,
  deadline: Date,
  progress: Number (0-100),
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

### TimeEntries Collection
```javascript
{
  date: Date,
  durationMinutes: Number,
  category: String,
  notes: String,
  createdAt: Date
}
```

### Projects Collection
```javascript
{
  name: String,
  description: String,
  status: String,
  progress: Number (0-100),
  lastWorkedDate: Date,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🎯 Default Projects

The app comes with suggested default projects:
1. **Gyaandatta** - Learning platform with interactive content
2. **Offline LLM** - Local language model implementation
3. **Robotics Research** - Research and development
4. **Game Dev** - Game development project

## 📈 Categories

- Web Dev
- DSA (Data Structures & Algorithms)
- Python
- College
- Travel Learning
- Projects

## 🔐 Security (Future Implementation)

- JWT authentication
- Password hashing with bcryptjs
- Input validation and sanitization
- Rate limiting
- CORS configuration

## 🚀 Deployment

### Backend (Heroku/Railway)
```bash
npm run build
npm start
```

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the dist/ folder
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify MongoDB URI in .env
- Check IP whitelist in MongoDB Atlas
- Ensure database is active

### CORS Errors
- Check CORS_ORIGIN in backend .env
- Verify frontend URL matches configuration

### Port Already in Use
- Change PORT in .env
- Or kill the process using the port

### API Not Responding
- Ensure backend is running
- Check API URL in frontend .env
- Verify MongoDB connection

## 📝 API Examples

### Create a Goal
```bash
curl -X POST http://localhost:5000/api/goals \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn React",
    "category": "Web Dev",
    "deadline": "2026-03-15",
    "progress": 0
  }'
```

### Log Time
```bash
curl -X POST http://localhost:5000/api/time-entries \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2026-02-27",
    "durationMinutes": 120,
    "category": "Web Dev",
    "notes": "Built React components"
  }'
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)

## 🎓 Development Tips

1. **Commit frequently** - Version control is important
2. **Test APIs** - Use Postman/curl before frontend integration
3. **Check console** - Browser console logs are helpful
4. **Use React DevTools** - Extension for debugging React
5. **Monitor performance** - Use DevTools throttling

## 📞 Support

For issues or questions:
1. Check the error message carefully
2. Review the troubleshooting section
3. Check documentation in README files
4. Review API documentation in backend README

## ✅ Checklist Before Deployment

- [ ] All environment variables configured
- [ ] MongoDB connection working
- [ ] API endpoints tested
- [ ] Frontend builds without errors
- [ ] All features working locally
- [ ] Security settings configured
- [ ] Error handling implemented
- [ ] Performance optimized

## 🎉 You're Ready!

Start tracking your progress and building amazing projects!

---

**Created by**: Vaibhav Solanki
**Version**: v1.0
**Date**: Feb 2026
