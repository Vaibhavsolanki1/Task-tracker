import { Trash2, Edit2, Clock } from 'lucide-react'

export default function ProjectCard({ project, onEdit, onDelete, onLogWork }) {
  const statusColors = {
    'planning': 'bg-blue-500/20 text-blue-400',
    'in-progress': 'bg-accent/20 text-accent',
    'on-hold': 'bg-yellow-500/20 text-yellow-400',
    'completed': 'bg-green-500/20 text-green-400',
    'abandoned': 'bg-red-500/20 text-red-400'
  }

  const daysAgo = Math.floor(
    (new Date() - new Date(project.lastWorkedDate)) / (1000 * 60 * 60 * 24)
  )

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold">{project.name}</h3>
          {project.description && (
            <p className="text-gray-400 text-sm mt-1">{project.description}</p>
          )}
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Progress</span>
          <span className="text-accent font-bold">{project.progress}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="h-2 bg-accent rounded-full"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {project.notes && (
        <div className="mb-4 p-3 bg-gray-900 rounded text-sm text-gray-300">
          {project.notes}
        </div>
      )}

      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <Clock size={16} />
        <span>Last worked: {daysAgo === 0 ? 'Today' : `${daysAgo} days ago`}</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onLogWork(project._id)}
          className="flex-1 btn-secondary"
        >
          Log Work
        </button>
        <button
          onClick={() => onEdit(project)}
          className="flex-1 btn-secondary flex items-center justify-center gap-2"
        >
          <Edit2 size={16} />
          Edit
        </button>
        <button
          onClick={() => onDelete(project._id)}
          className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  )
}
