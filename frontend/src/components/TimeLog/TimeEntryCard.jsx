import { Clock, Trash2, Edit2 } from 'lucide-react'

export default function TimeEntryCard({ entry, onEdit, onDelete }) {
  const categoryColors = {
    'Web Dev': 'border-accent text-accent',
    'DSA': 'border-accentLight text-accentLight',
    'Python': 'border-blue-500 text-blue-400',
    'College': 'border-green-500 text-green-400',
    'Travel Learning': 'border-purple-500 text-purple-400',
    'Projects': 'border-pink-500 text-pink-400'
  }

  const hours = (entry.durationMinutes / 60).toFixed(1)
  const date = new Date(entry.date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })

  return (
    <div className={`card border-l-4 ${categoryColors[entry.category]}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Clock size={18} className={categoryColors[entry.category].split(' ')[1]} />
            <span className="font-bold text-lg">{entry.category}</span>
          </div>
          {entry.notes && <p className="text-gray-400 text-sm">{entry.notes}</p>}
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${categoryColors[entry.category].split(' ')[1]}`}>
            {hours}h
          </div>
          <div className="text-gray-500 text-sm">{entry.durationMinutes} min</div>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-400 pt-3 border-t border-gray-700">
        <span>{date}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(entry)}
            className="text-accent hover:text-accentLight transition-colors"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => onDelete(entry._id)}
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
