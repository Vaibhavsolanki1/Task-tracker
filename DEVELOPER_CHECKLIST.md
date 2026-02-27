# Development Checklist & Quick Reference

## Pre-Development Setup

### Environment Setup
- [ ] Install Node.js v16+ and npm
- [ ] Create MongoDB Atlas account
- [ ] Clone/download the project
- [ ] Review readme.md (PRD)

### Backend Initialization
- [ ] Navigate to backend directory: `cd backend`
- [ ] Install dependencies: `npm install`
- [ ] Copy environment file: `cp .env.example .env`
- [ ] Update .env with MongoDB URI
- [ ] Test connection: `npm run dev`
- [ ] Verify API health check: `curl http://localhost:5000/api/health`

### Frontend Initialization
- [ ] Navigate to frontend directory: `cd frontend`
- [ ] Install dependencies: `npm install`
- [ ] Copy environment file: `cp .env.example .env`
- [ ] Verify API URL in .env matches backend
- [ ] Start dev server: `npm run dev`
- [ ] Check http://localhost:5173 loads

## Feature Completion Checklist

### Goals Module
- [ ] Create goal form validation works
- [ ] Goal list displays from API
- [ ] Edit goal updates successfully
- [ ] Delete goal removes from list
- [ ] Progress slider updates goal
- [ ] Filter by status works
- [ ] Deadline calculation correct
- [ ] Category display shows emoji

### Time Tracking Module
- [ ] Log time form validation works
- [ ] Create entry submits to API
- [ ] Time entries list displays
- [ ] Edit entry functionality works
- [ ] Delete entry removes from list
- [ ] Daily total calculation correct
- [ ] Weekly total calculation correct
- [ ] Period filter (Day/Week/Month/All) works
- [ ] Category colors display correctly

### Projects Module
- [ ] Create project form validation works
- [ ] Project list displays from API
- [ ] Edit project updates successfully
- [ ] Delete project removes from list
- [ ] Log work for project updates lastWorkedDate
- [ ] Project status filter works
- [ ] Progress bar updates correctly
- [ ] Notes display properly

### Dashboard
- [ ] Stats cards display current values
- [ ] Weekly hours chart renders
- [ ] Category distribution pie chart renders
- [ ] Upcoming deadlines list displays
- [ ] Data updates in real-time
- [ ] Charts responsive on resize

### Navigation
- [ ] Sidebar displays all navigation items
- [ ] Active link highlighted correctly
- [ ] Navigation switches between pages
- [ ] Sidebar accessible on all pages
- [ ] Settings link placeholder working

## API Testing Checklist

### Goals API
- [ ] POST /api/goals creates goal
- [ ] GET /api/goals retrieves all
- [ ] GET /api/goals/:id retrieves one
- [ ] PUT /api/goals/:id updates goal
- [ ] DELETE /api/goals/:id deletes goal

### Time Entries API
- [ ] POST /api/time-entries creates entry
- [ ] GET /api/time-entries retrieves all
- [ ] GET /api/time-entries/range works with params
- [ ] GET /api/time-entries/daily-total works
- [ ] PUT /api/time-entries/:id updates entry
- [ ] DELETE /api/time-entries/:id deletes entry

### Projects API
- [ ] POST /api/projects creates project
- [ ] GET /api/projects retrieves all
- [ ] GET /api/projects/:id retrieves one
- [ ] PUT /api/projects/:id updates project
- [ ] DELETE /api/projects/:id deletes project

## UI/UX Testing Checklist

### Responsive Design
- [ ] Works on desktop (1920px+)
- [ ] Works on laptop (1440px)
- [ ] Works on tablet (1024px)
- [ ] Works on mobile (640px)
- [ ] Sidebar collapses on mobile
- [ ] Grid layouts adjust properly
- [ ] Forms fit on all screen sizes

### Dark Theme
- [ ] Background is proper dark (#0f0f0f)
- [ ] Text is readable (white/gray)
- [ ] Accent colors stand out (#ff006e, #fb5607)
- [ ] Cards have proper contrast
- [ ] No white flashes on load

### Interactions
- [ ] Buttons respond to clicks
- [ ] Forms validate before submit
- [ ] Loading states show spinners
- [ ] Error messages appear clearly
- [ ] Success notifications work
- [ ] Modals open/close smoothly
- [ ] Sliders work properly
- [ ] Date pickers function correctly

### Performance
- [ ] Dashboard loads in < 2 seconds
- [ ] API calls return in < 500ms
- [ ] Charts render smoothly
- [ ] No console errors
- [ ] No memory leaks
- [ ] Smooth scrolling

## Data Validation Checklist

### Goals
- [ ] Title cannot be empty
- [ ] Category must be selected
- [ ] Deadline must be in future
- [ ] Progress must be 0-100
- [ ] Status must be valid enum

### Time Entries
- [ ] Duration must be > 0
- [ ] Category must be selected
- [ ] Date must be valid
- [ ] Notes are optional

### Projects
- [ ] Name cannot be empty
- [ ] Progress must be 0-100
- [ ] Status must be valid enum
- [ ] Notes are optional

## Security Checklist (For Future)

- [ ] Input sanitization implemented
- [ ] XSS prevention in place
- [ ] CSRF tokens implemented
- [ ] Rate limiting configured
- [ ] Error messages don't expose internals
- [ ] Sensitive data not logged

## Documentation Checklist

- [ ] README.md covers setup
- [ ] API documentation complete
- [ ] Component documentation added
- [ ] Code comments where needed
- [ ] Setup guide comprehensive
- [ ] Troubleshooting section included

## Deployment Checklist

### Pre-Deployment
- [ ] All tests passing
- [ ] No console errors/warnings
- [ ] All features working
- [ ] Performance optimized
- [ ] Environment variables set
- [ ] Database backups configured

### Backend Deployment
- [ ] package.json has start script
- [ ] Environment variables configured
- [ ] MongoDB Atlas IP whitelist updated
- [ ] Deployed to hosting (Heroku/Railway)
- [ ] API endpoints accessible
- [ ] Database connected

### Frontend Deployment
- [ ] npm run build succeeds
- [ ] dist/ folder created
- [ ] API URLs configured
- [ ] Deployed to CDN (Vercel/Netlify)
- [ ] Production build tested
- [ ] HTTPS enabled

## Common Commands Reference

### Backend
```bash
cd backend
npm install                 # Install dependencies
npm run dev               # Start dev server
npm start                 # Start production
npm test                  # Run tests (if added)
```

### Frontend
```bash
cd frontend
npm install               # Install dependencies
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run linter (if configured)
```

### Git
```bash
git status               # Check changes
git add .               # Stage all changes
git commit -m "message" # Commit changes
git push                # Push to repository
```

## Debugging Tips

### Backend Issues
```bash
# Check if port 5000 is in use
netstat -an | grep 5000

# Check MongoDB connection
mongo "mongodb+srv://..."

# View server logs
npm run dev  # Shows real-time logs
```

### Frontend Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules && npm install

# Clear npm cache
npm cache clean --force

# Check for unused imports
npm run lint

# View Network tab in DevTools for API calls
# Check Console tab for JavaScript errors
```

## Key URLs

- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- API Base: http://localhost:5000/api
- Health Check: http://localhost:5000/api/health
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas

## Important Credentials to Save

- [ ] MongoDB Atlas username/password
- [ ] Database connection string (URI)
- [ ] Backend API URL (for production)
- [ ] Frontend deployment URL (for CORS)
- [ ] Environment variables file (.env)

## Support Resources

### Documentation
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [Recharts](https://recharts.org)

### Tools & Extensions
- Visual Studio Code
- Thunder Client or Postman (API testing)
- MongoDB Compass (Database management)
- Git
- Node Package Manager

## Progress Tracking

### Completed ✅
1. Project structure created
2. Backend API implemented
3. Database schemas defined
4. Frontend components built
5. Navigation implemented
6. Form validation added
7. API integration completed
8. Dashboard charts added
9. Responsive design implemented
10. Dark theme styling applied

### In Progress 🔄
- Initial data seeding
- End-to-end testing
- Performance optimization
- Documentation finalization

### To Do 📋
- User authentication
- Advanced filtering
- Export functionality
- Mobile app version
- Automated backups
- Advanced analytics
- Social features

---

**Last Updated**: February 27, 2026
**Project Owner**: Vaibhav Solanki
**Version**: v1.0 MVP
