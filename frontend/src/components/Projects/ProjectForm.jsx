import { useState } from 'react'
import FormInput from '../common/FormInput'

export default function ProjectForm({ project, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    project || {
      name: '',
      description: '',
      status: 'in-progress',
      progress: 0,
      notes: ''
    }
  )
  const [errors, setErrors] = useState({})

  const statuses = ['planning', 'in-progress', 'on-hold', 'completed', 'abandoned']

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
    if (!formData.name.trim()) newErrors.name = 'Project name is required'
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
        label="Project Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g., Gyaandatta Platform"
        error={errors.name}
        required
      />

      <FormInput
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="What is this project about?"
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

      <FormInput
        label="Notes"
        type="textarea"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Latest updates and next steps..."
      />

      <div className="flex gap-2">
        <button type="submit" className="flex-1 btn-primary">
          {project ? 'Update Project' : 'Create Project'}
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
