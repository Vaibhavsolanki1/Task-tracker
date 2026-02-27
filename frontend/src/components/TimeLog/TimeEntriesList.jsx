import { useState, useEffect } from 'react'
import Modal from '../common/Modal'
import TimeEntryForm from './TimeEntryForm'
import TimeEntryCard from './TimeEntryCard'
import { timeEntriesAPI } from '../../services/api'

export default function TimeEntriesList() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingEntry, setEditingEntry] = useState(null)
  const [dateFilter, setDateFilter] = useState('week')

  useEffect(() => {
    fetchEntries()
  }, [dateFilter])

  const fetchEntries = async () => {
    setLoading(true)
    try {
      let res
      if (dateFilter === 'all') {
        res = await timeEntriesAPI.getAll()
      } else {
        const endDate = new Date()
        const startDate = new Date()
        if (dateFilter === 'day') {
          startDate.setDate(endDate.getDate() - 1)
        } else if (dateFilter === 'week') {
          startDate.setDate(endDate.getDate() - 7)
        } else if (dateFilter === 'month') {
          startDate.setMonth(endDate.getMonth() - 1)
        }
        res = await timeEntriesAPI.getByRange(
          startDate.toISOString().split('T')[0],
          endDate.toISOString().split('T')[0]
        )
      }
      setEntries(res.data.sort((a, b) => new Date(b.date) - new Date(a.date)))
      setError(null)
    } catch (err) {
      setError('Failed to fetch entries')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingEntry) {
        await timeEntriesAPI.update(editingEntry._id, formData)
      } else {
        await timeEntriesAPI.create(formData)
      }
      setIsModalOpen(false)
      setEditingEntry(null)
      fetchEntries()
    } catch (err) {
      setError('Failed to save entry')
      console.error(err)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      try {
        await timeEntriesAPI.delete(id)
        fetchEntries()
      } catch (err) {
        setError('Failed to delete entry')
        console.error(err)
      }
    }
  }

  const totalHours = (entries.reduce((sum, e) => sum + e.durationMinutes, 0) / 60).toFixed(1)

  if (loading && entries.length === 0) return <div className="text-gray-400">Loading entries...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <>
      <div className="mb-8 card">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm">Total {dateFilter} hours</p>
            <p className="text-4xl font-bold text-accent">{totalHours}h</p>
          </div>
          <div className="flex gap-2">
            {['day', 'week', 'month', 'all'].map(period => (
              <button
                key={period}
                onClick={() => setDateFilter(period)}
                className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                  dateFilter === period
                    ? 'bg-accent text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {entries.length > 0 ? (
          entries.map(entry => (
            <TimeEntryCard
              key={entry._id}
              entry={entry}
              onEdit={(entry) => {
                setEditingEntry(entry)
                setIsModalOpen(true)
              }}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="text-gray-400 text-center py-8">
            No time entries for this period
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingEntry(null)
        }}
        title={editingEntry ? 'Edit Entry' : 'Log Time'}
      >
        <TimeEntryForm
          entry={editingEntry}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false)
            setEditingEntry(null)
          }}
        />
      </Modal>
    </>
  )
}
