import { useState } from 'react'
import FormInput from '../common/FormInput'

export default function GoalForm({ goal, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    goal || {
      title: '',
      description: '',
      category: '',
      deadline: '',
      progress: 0,
      status: 'active'
    }
  )
  const [errors, setErrors] = useState({})

  const categories = ['Web Dev', 'DSA', 'Python', 'College', 'Travel Learning', 'Projects']
  const statuses = ['active', 'completed', 'paused', 'abandoned']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'progress' ? parseInt(value) : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.deadline) newErrors.deadline = 'Deadline is required'
    if (new Date(formData.deadline) < new Date()) newErrors.deadline = 'Deadline cannot be in the past'
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
        label="Goal Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="e.g., Master Advanced DSA"
        error={errors.title}
        required
      />

      <FormInput
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="What do you want to learn or achieve?"
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
        label="Deadline"
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        error={errors.deadline}
        required
      />

      <FormInput
        label="Status"
        type="select"
        name="status"
        value={formData.status}
        onChange={handleChange}
        options={statuses}
      />

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Progress: {formData.progress}%</label>
        <input
          type="range"
          name="progress"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="flex-1 btn-primary">
          {goal ? 'Update Goal' : 'Create Goal'}
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
