import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/common/Sidebar'
import Dashboard from './pages/Dashboard'
import GoalsPage from './pages/GoalsPage'
import TimeLogPage from './pages/TimeLogPage'
import ProjectsPage from './pages/ProjectsPage'
import './styles/index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-dark">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/time-log" element={<TimeLogPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
