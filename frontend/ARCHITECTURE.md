# Frontend Components Architecture

## Component Hierarchy

```
App.jsx
├── Sidebar
│   └── Navigation Links
└── Main Routes
    ├── Dashboard Page
    │   ├── DashboardStats
    │   └── DashboardCharts
    │       ├── Weekly Bar Chart
    │       ├── Category Pie Chart
    │       └── Upcoming Deadlines
    ├── Goals Page
    │   ├── GoalsList
    │   │   ├── GoalCard (multiple)
    │   │   └── GoalForm (in Modal)
    │   └── Filter Controls
    ├── Time Log Page
    │   ├── TimeEntriesList
    │   │   ├── TimeEntryCard (multiple)
    │   │   └── TimeEntryForm (in Modal)
    │   └── Period Filter (Day/Week/Month)
    └── Projects Page
        ├── ProjectsList
        │   ├── ProjectCard (multiple)
        │   ├── ProjectForm (in Modal)
        │   └── TimeEntryForm (in Modal for logging work)
        └── Status Filter
```

## Common Components

### Modal
Located in: `src/components/common/Modal.jsx`

Generic modal wrapper for forms and dialogs.

**Props:**
- `isOpen: boolean` - Controls visibility
- `onClose: function` - Callback when closing
- `title: string` - Modal title
- `children: ReactNode` - Modal content

**Usage:**
```jsx
<Modal isOpen={isOpen} onClose={handleClose} title="Title">
  <YourContent />
</Modal>
```

### StatCard
Located in: `src/components/common/StatCard.jsx`

Display statistics in a card format.

**Props:**
- `label: string` - Stat label
- `value: string|number` - Stat value
- `icon: Component` - Optional Lucide icon
- `color: string` - Color theme (accent, accentLight, gray, red)

**Usage:**
```jsx
<StatCard label="Total Hours" value="48h" color="accent" />
```

### FormInput
Located in: `src/components/common/FormInput.jsx`

Reusable form input with validation.

**Props:**
- `label: string` - Input label
- `type: string` - Input type (text, email, date, select, textarea)
- `name: string` - Form field name
- `value: string|number` - Input value
- `onChange: function` - Change handler
- `placeholder: string` - Input placeholder
- `options: array` - For select inputs
- `required: boolean` - Required field
- `error: string` - Error message

## Feature Components

### Goals

#### GoalsList
Main container for goal management.

**Features:**
- Fetch goals from API
- Filter by status
- Create, edit, delete goals
- Update progress with slider

**State:**
- `goals: array` - List of goals
- `loading: boolean` - Loading state
- `error: string` - Error messages
- `isModalOpen: boolean` - Modal visibility
- `editingGoal: object` - Currently editing goal
- `filter: string` - Active filter

#### GoalCard
Individual goal display.

**Features:**
- Show goal details
- Display status badge
- Progress bar with slider
- Shows deadline and days remaining
- Edit and delete buttons

**Props:**
- `goal: object` - Goal data
- `onEdit: function` - Edit handler
- `onDelete: function` - Delete handler
- `onUpdateProgress: function` - Progress update

#### GoalForm
Form for creating/editing goals.

**Fields:**
- Title (required)
- Description
- Category (required)
- Deadline (required)
- Status
- Progress slider

**Validation:**
- Title must be non-empty
- Category must be selected
- Deadline must be in future
- Progress 0-100

### Time Log

#### TimeEntriesList
Main container for time entry management.

**Features:**
- Fetch time entries
- Filter by date range (Day/Week/Month/All)
- Display total hours for period
- Create, edit, delete entries

#### TimeEntryCard
Individual time entry display.

**Features:**
- Category badge with color coding
- Duration in hours
- Date display
- Notes if available
- Edit and delete buttons

#### TimeEntryForm
Form for logging time.

**Fields:**
- Date (required)
- Duration in minutes (required)
- Category (required)
- Notes

**Validation:**
- Duration must be > 0
- Category must be selected
- Date must be valid

### Projects

#### ProjectsList
Main container for project management.

**Features:**
- Fetch projects
- Filter by status
- Create, edit, delete projects
- Log work time for projects

#### ProjectCard
Individual project display.

**Features:**
- Project name and description
- Status badge
- Progress bar
- Last worked date
- Notes section
- Log work button
- Edit and delete buttons

#### ProjectForm
Form for creating/editing projects.

**Fields:**
- Project name (required)
- Description
- Status
- Progress slider
- Notes

### Dashboard

#### DashboardStats
Statistics component for dashboard.

**Displays:**
- Today's hours
- Weekly hours
- Active goals count
- Current streak

**Data Source:** Real-time API calls

#### DashboardCharts
Charts and analytics component.

**Features:**
- Weekly hours bar chart
- Category distribution pie chart
- Upcoming deadlines list
- Real-time data refresh

**Libraries:** Recharts

## Custom Hooks

### useGoals
Located in: `src/hooks/useData.js`

**Returns:**
```javascript
{
  goals: array,
  loading: boolean,
  error: string,
  fetchGoals: function,
  createGoal: function(data),
  updateGoal: function(id, data),
  deleteGoal: function(id)
}
```

### useTimeEntries
Located in: `src/hooks/useData.js`

**Returns:**
```javascript
{
  entries: array,
  loading: boolean,
  error: string,
  fetchEntries: function,
  createEntry: function(data),
  updateEntry: function(id, data),
  deleteEntry: function(id),
  getDailyTotal: function(date)
}
```

### useProjects
Located in: `src/hooks/useData.js`

**Returns:**
```javascript
{
  projects: array,
  loading: boolean,
  error: string,
  fetchProjects: function,
  createProject: function(data),
  updateProject: function(id, data),
  deleteProject: function(id)
}
```

## Services

### API Service
Located in: `src/services/api.js`

Base URL: `http://localhost:5000/api`

**Available APIs:**
- `goalsAPI` - Goal CRUD operations
- `timeEntriesAPI` - Time entry CRUD + date range queries
- `projectsAPI` - Project CRUD operations

## Utilities

### Date Utilities
Located in: `src/utils/dateUtils.js`

**Functions:**
- `formatDate(date)` - Format as MMM D, YYYY
- `formatDateTime(date)` - Format with time
- `getDaysUntil(deadline)` - Days until deadline
- `getWeekStart()` - Get start of current week
- `getMonthStart()` - Get start of current month
- `formatMinutes(minutes)` - Format as "1h 30m"
- `minutesToHours(minutes)` - Convert to decimal hours

### Constants
Located in: `src/constants/index.js`

**Exports:**
- `CATEGORIES` - All categories
- `GOAL_STATUSES` - Goal status options
- `PROJECT_STATUSES` - Project status options
- `CATEGORY_COLORS` - Color mapping for categories
- `CHART_COLORS` - Colors for charts
- `DEFAULT_PROJECTS` - Suggested projects

## State Management

Currently using:
- React hooks (useState, useEffect)
- Custom hooks for API calls
- Context API (AppContext) for global state

Can be extended to Redux if needed.

## Styling

### Tailwind CSS
- Custom colors in `tailwind.config.js`
- Dark theme: `#0f0f0f` background
- Accent color: `#ff006e`
- Light accent: `#fb5607`

### CSS Classes
- `.card` - Main card component
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.progress-bar` - Progress bar container
- `.stat-card` - Statistics card

## Performance Optimizations

1. **Lazy Loading**
   - Routes are loaded on demand
   - Charts render only in Dashboard

2. **Memoization**
   - useCallback for API functions
   - Prevents unnecessary re-renders

3. **API Caching**
   - Data cached in component state
   - Refresh on user action

4. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: 640px, 1024px

## Error Handling

- Try-catch blocks in all async functions
- Error state management in components
- User-friendly error messages
- Console logging for debugging

## Testing Recommendations

1. Unit tests for utility functions
2. Integration tests for API calls
3. Component snapshot tests
4. E2E tests for user flows

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## Best Practices

1. Always handle loading and error states
2. Validate form inputs before submission
3. Use proper error boundaries
4. Keep components focused and small
5. Use custom hooks for logic reuse
6. DRY principle - Don't repeat yourself
