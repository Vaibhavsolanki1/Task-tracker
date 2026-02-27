import { useState } from 'react'
import Modal from '../components/common/Modal'
import ProjectForm from '../components/Projects/ProjectForm'
import ProjectsList from '../components/Projects/ProjectsList'
import { projectsAPI } from '../services/api'

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleProjectSubmit = async (formData) => {
    try {
      await projectsAPI.create(formData)
      setIsModalOpen(false)
      setRefreshKey(prev => prev + 1)
    } catch (error) {
      console.error('Failed to create project:', error)
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary"
        >
          + New Project
        </button>
      </div>

      <ProjectsList key={refreshKey} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Project"
      >
        <ProjectForm
          onSubmit={handleProjectSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  )
}
