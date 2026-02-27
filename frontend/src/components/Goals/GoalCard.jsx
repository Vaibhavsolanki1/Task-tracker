import { useState } from 'react'
import { Trash2, Edit2 } from 'lucide-react'

export default function GoalCard({ goal, onEdit, onDelete, onUpdateProgress }) {
  const [newProgress, setNewProgress] = useState(goal.progress)

  const statusColors = {
    active: 'bg-accent/20 text-accent',
    completed: 'bg-green-500/20 text-green-400',
    paused: 'bg-yellow-500/20 text-yellow-400',
    abandoned: 'bg-red-500/20 text-red-400'
  }

  const categoryEmoji = {
    'Web Dev': '🌐',
    'DSA': '📊',
    'Python': '🐍',
    'College': '🎓',
    'Travel Learning': '✈️',
    'Projects': '🚀'
  }

  const daysUntilDeadline = Math.ceil(
    (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)
  )

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{categoryEmoji[goal.category]}</span>
            <h3 className="text-xl font-bold">{goal.title}</h3>
          </div>
          {goal.description && (
            <p className="text-gray-400 text-sm mt-1">{goal.description}</p>
          )}
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[goal.status]}`}>
          {goal.status}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Progress</span>
          <span className={`font-bold ${goal.progress >= 100 ? 'text-green-400' : 'text-accent'}`}>
            {goal.progress}%
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="h-2 bg-accent rounded-full transition-all"
            style={{ width: `${goal.progress}%` }}
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={newProgress}
          onChange={(e) => {
            setNewProgress(e.target.value)
            onUpdateProgress(goal._id, parseInt(e.target.value))
          }}
          className="w-full mt-2 cursor-pointer"
        />
      </div>

      <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
        <span>{daysUntilDeadline > 0 ? `${daysUntilDeadline} days left` : 'Overdue'}</span>
        <span>{new Date(goal.deadline).toLocaleDateString()}</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(goal)}
          className="flex-1 btn-secondary flex items-center justify-center gap-2"
        >
          <Edit2 size={16} />
          Edit
        </button>
        <button
          onClick={() => onDelete(goal._id)}
          className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  )
}
