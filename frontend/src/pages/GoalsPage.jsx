import { useState } from 'react'
import Modal from '../components/common/Modal'
import GoalForm from '../components/Goals/GoalForm'
import GoalsList from '../components/Goals/GoalsList'
import { goalsAPI } from '../services/api'

export default function GoalsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleGoalSubmit = async (formData) => {
    try {
      await goalsAPI.create(formData)
      setIsModalOpen(false)
      setRefreshKey(prev => prev + 1)
    } catch (error) {
      console.error('Failed to create goal:', error)
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Goals</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary"
        >
          + New Goal
        </button>
      </div>

      <GoalsList key={refreshKey} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Goal"
      >
        <GoalForm
          onSubmit={handleGoalSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  )
}
