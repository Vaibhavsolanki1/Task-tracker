import { useState, useEffect } from 'react'
import Modal from '../common/Modal'
import GoalForm from '../Goals/GoalForm'
import GoalCard from '../Goals/GoalCard'
import { goalsAPI } from '../../services/api'

export default function GoalsList() {
  const [goals, setGoals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingGoal, setEditingGoal] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchGoals()
  }, [])

  const fetchGoals = async () => {
    setLoading(true)
    try {
      const res = await goalsAPI.getAll()
      setGoals(res.data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch goals')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingGoal) {
        await goalsAPI.update(editingGoal._id, formData)
      } else {
        await goalsAPI.create(formData)
      }
      setIsModalOpen(false)
      setEditingGoal(null)
      fetchGoals()
    } catch (err) {
      setError('Failed to save goal')
      console.error(err)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this goal?')) {
      try {
        await goalsAPI.delete(id)
        fetchGoals()
      } catch (err) {
        setError('Failed to delete goal')
        console.error(err)
      }
    }
  }

  const handleUpdateProgress = async (id, progress) => {
    try {
      const goal = goals.find(g => g._id === id)
      await goalsAPI.update(id, { ...goal, progress })
      fetchGoals()
    } catch (err) {
      console.error(err)
    }
  }

  const filteredGoals = goals.filter(goal => {
    if (filter === 'all') return true
    return goal.status === filter
  })

  if (loading && goals.length === 0) return <div className="text-gray-400">Loading goals...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <>
      <div className="flex gap-2 mb-6">
        {['all', 'active', 'completed', 'paused'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg transition-colors capitalize ${
              filter === status
                ? 'bg-accent text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredGoals.length > 0 ? (
          filteredGoals.map(goal => (
            <GoalCard
              key={goal._id}
              goal={goal}
              onEdit={(goal) => {
                setEditingGoal(goal)
                setIsModalOpen(true)
              }}
              onDelete={handleDelete}
              onUpdateProgress={handleUpdateProgress}
            />
          ))
        ) : (
          <div className="text-gray-400 text-center py-8">
            No {filter !== 'all' ? filter : ''} goals yet
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingGoal(null)
        }}
        title={editingGoal ? 'Edit Goal' : 'Create New Goal'}
      >
        <GoalForm
          goal={editingGoal}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false)
            setEditingGoal(null)
          }}
        />
      </Modal>
    </>
  )
}
