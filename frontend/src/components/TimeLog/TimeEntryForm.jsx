import { useState } from 'react'
import FormInput from '../common/FormInput'

export default function TimeEntryForm({ entry, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    entry || {
      date: new Date().toISOString().split('T')[0],
      durationMinutes: '',
      category: '',
      notes: ''
    }
  )
  const [errors, setErrors] = useState({})

  const categories = ['Web Dev', 'DSA', 'Python', 'College', 'Travel Learning', 'Projects']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'durationMinutes' ? parseInt(value) || '' : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.durationMinutes || formData.durationMinutes <= 0) {
      newErrors.durationMinutes = 'Duration must be greater than 0'
    }
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.date) newErrors.date = 'Date is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        error={errors.date}
        required
      />

      <FormInput
        label="Duration (minutes)"
        type="number"
        name="durationMinutes"
        value={formData.durationMinutes}
        onChange={handleChange}
        placeholder="60"
        error={errors.durationMinutes}
        required
      />

      <FormInput
        label="Category"
        type="select"
        name="category"
        value={formData.category}
        onChange={handleChange}
        options={categories}
        error={errors.category}
        required
      />

      <FormInput
        label="Notes"
        type="textarea"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="What did you work on?"
      />

      <div className="flex gap-2">
        <button type="submit" className="flex-1 btn-primary">
          {entry ? 'Update Entry' : 'Log Time'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 btn-secondary"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
