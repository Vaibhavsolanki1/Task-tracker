# 📄 Product Requirements Document (PRD)

## Product Name: Personal Tracker

**Owner:** Vaibhav Solanki
**Version:** v1.0
**Date:** Feb 2026

---

# 1. 🎯 Product Vision

Personal Tracker is a productivity web application designed to help a busy engineering student systematically track learning goals, coding progress, study time, and major projects without overwhelming daily workload.

The product prioritizes:

* clarity over complexity
* consistency over intensity
* actionable progress visibility

---

# 2. 🚨 Problem Statement

Students with heavy schedules struggle because:

* goals exist but are not operationalized
* progress is not measured objectively
* time gets lost in travel and college load
* multiple learning tracks create collisions
* motivation fluctuates without visible wins

Vaibhav specifically needs a system that works under:

* Mon–Fri college
* heavy travel time
* multiple parallel learning targets
* project-based growth

---

# 3. 🎯 Success Metrics

## Primary Success Metrics

* User logs time ≥ 5 days/week
* At least 3 active goals tracked
* Weekly dashboard checked ≥ 3 times/week
* Projects updated weekly

## Secondary Metrics

* Streak maintained ≥ 7 days
* Monthly hours trend increasing
* Goal completion rate improving

---

# 4. 👤 Target User

## Primary User

Engineering student with:

* tight weekday schedule
* long commute
* multiple technical goals
* desire to build consistently
* beginner → intermediate developer

## User Persona (Vaibhav Mode)

* Time-poor but ambitious
* Needs visual progress
* Works in bursts on weekends
* Prefers dark, focused UI
* Wants portfolio-quality tools

---

# 5. 🧩 Scope Definition

## ✅ In Scope (V1)

* Goal tracking
* Time logging
* Project tracking
* Weekly dashboard
* Streak system
* Basic analytics

## ❌ Out of Scope (V1)

* AI recommendations
* Social features
* Mobile app
* Team collaboration
* Advanced automation

---

# 6. 🏗️ Core Features

---

## 6.1 Goal Tracker

### Description

Allows user to define learning goals with deadlines and monitor progress.

### User Stories

* User can create a goal
* User can update progress %
* User can mark goal complete
* User can view upcoming deadlines

### Functional Requirements

User can:

* Add goal title
* Add description
* Set deadline
* Set category
* Update progress (0–100)
* Change status

### Data Fields

Goal:

* id
* title
* description
* category
* deadline
* progress
* status
* createdAt
* updatedAt

---

## 6.2 Daily Time Tracker

### Description

Logs focused work time per day by category.

### User Stories

* User logs study session
* User selects category
* User views daily total
* User views weekly total

### Functional Requirements

User can:

* Add time entry
* Edit entry
* Delete entry
* Filter by category
* View totals

### Categories (default)

* Web Dev
* DSA
* Python
* College
* Travel Learning
* Projects

### Data Fields

TimeEntry:

* id
* date
* durationMinutes
* category
* notes
* createdAt

---

## 6.3 Weekly Dashboard

### Description

Main control center showing productivity summary.

### Components

Top Stats Cards:

* Today hours
* Weekly hours
* Active goals
* Current streak

Charts:

* Weekly hours graph
* Category distribution
* Goal progress bars

Alerts:

* Upcoming deadlines
* Inactive goals

---

## 6.4 Project Tracker

### Description

Tracks major long-term builds.

### Default Projects

* Gyaandatta
* Offline LLM
* Robotics Research
* Game Dev

### User Stories

* User updates project status
* User logs last worked date
* User updates progress
* User adds notes

### Data Fields

Project:

* id
* name
* description
* status
* progress
* lastWorkedDate
* notes
* createdAt

---

## 6.5 Streak System

### Description

Motivational consistency tracker.

### Rules

* Streak increases if ≥ 30 min logged in a day
* Breaks if no entry
* Weekly streak visible

### Display

* Fire icon with number
* Weekly consistency bar

---

# 7. 🎨 UX/UI Requirements

## Design Theme

* Dark racing theme
* High contrast
* Minimal distraction
* Fast loading

## Layout

### Sidebar

* Dashboard
* Goals
* Time Log
* Projects
* Settings

### Main Area

* Card-based layout
* Progress bars
* Clean charts

---

# 8. 🧠 Technical Requirements

## Frontend

* React (Vite)
* Tailwind CSS
* React Router
* Recharts

## Backend

* Node.js
* Express
* MongoDB (Atlas ready)

## State Management

* React Query or Context API (V1 simple)

## Auth (Phase 2)

* JWT
* bcrypt

---

# 9. 📊 Non-Functional Requirements

## Performance

* Dashboard load < 2s
* API response < 500ms
* Mobile responsive

## Reliability

* No data loss
* Proper validation
* Error handling

## Security

* Input sanitization
* JWT protection (future)
* Rate limiting (future)

---

# 10. 🚀 Milestones

## Milestone 1 — Foundation (Week 1)

* Repo setup
* React setup
* Express setup
* Mongo connection
* Basic layout

## Milestone 2 — Core Tracking (Week 2)

* Goal CRUD
* Time logging
* Dashboard stats

## Milestone 3 — Visualization (Week 3)

* Charts
* Streak system
* Project tracker

## Milestone 4 — Polish (Week 4)

* UI refinement
* Bug fixes
* Deployment

---

# 11. 🔮 Future Roadmap (Post V1)

* AI productivity insights
* Travel learning mode
* GitHub sync
* Habit tracker
* Mobile app
* Multi-user support

---

# 12. ⚠️ Risks & Mitigation

## Risk: Overengineering early

Mitigation:

* Strict MVP scope
* Ship weekly

## Risk: Burnout due to schedule

Mitigation:

* Weekend heavy builds
* Weekday light work

## Risk: Feature creep

Mitigation:

* V1 freeze discipline

---

# 13. ✅ Definition of Done (V1)

Personal Tracker is considered complete when:

* User can create and track goals
* User can log daily time
* Weekly dashboard shows correct stats
* Projects can be tracked
* Streak works correctly
* App is deployed and usable

---

**End of PRD**
