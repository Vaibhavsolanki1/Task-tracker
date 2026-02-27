import { Home, Target, Clock, Zap, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Target, label: 'Goals', path: '/goals' },
    { icon: Clock, label: 'Time Log', path: '/time-log' },
    { icon: Zap, label: 'Projects', path: '/projects' },
  ]

  return (
    <aside className="w-64 bg-darkCard border-r border-gray-800 p-6 flex flex-col">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-accent">Tracker</h1>
        <p className="text-sm text-gray-400">Personal Progress Hub</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-accent text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-gray-700">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
        >
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </Link>
      </div>
    </aside>
  )
}
