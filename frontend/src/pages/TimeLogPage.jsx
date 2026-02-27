import { useState } from 'react'
import Modal from '../components/common/Modal'
import TimeEntryForm from '../components/TimeLog/TimeEntryForm'
import TimeEntriesList from '../components/TimeLog/TimeEntriesList'
import { timeEntriesAPI } from '../services/api'

export default function TimeLogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleTimeSubmit = async (formData) => {
    try {
      await timeEntriesAPI.create(formData)
      setIsModalOpen(false)
      setRefreshKey(prev => prev + 1)
    } catch (error) {
      console.error('Failed to log time:', error)
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Time Log</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary"
        >
          + Log Time
        </button>
      </div>

      <TimeEntriesList key={refreshKey} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Log Time"
      >
        <TimeEntryForm
          onSubmit={handleTimeSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  )
}
