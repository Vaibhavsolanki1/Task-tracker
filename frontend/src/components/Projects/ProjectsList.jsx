import { useState, useEffect } from 'react'
import Modal from '../common/Modal'
import ProjectForm from './ProjectForm'
import ProjectCard from './ProjectCard'
import TimeEntryForm from '../TimeLog/TimeEntryForm'
import { projectsAPI, timeEntriesAPI } from '../../services/api'

export default function ProjectsList() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    setLoading(true)
    try {
      const res = await projectsAPI.getAll()
      setProjects(res.data.sort((a, b) => new Date(b.lastWorkedDate) - new Date(a.lastWorkedDate)))
      setError(null)
    } catch (err) {
      setError('Failed to fetch projects')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingProject) {
        await projectsAPI.update(editingProject._id, formData)
      } else {
        await projectsAPI.create(formData)
      }
      setIsProjectModalOpen(false)
      setEditingProject(null)
      fetchProjects()
    } catch (err) {
      setError('Failed to save project')
      console.error(err)
    }
  }

  const handleTimeSubmit = async (formData) => {
    try {
      await timeEntriesAPI.create({
        ...formData,
        date: formData.date || new Date().toISOString().split('T')[0]
      })
      // Update project's lastWorkedDate
      const project = projects.find(p => p._id === selectedProjectId)
      if (project) {
        await projectsAPI.update(selectedProjectId, {
          ...project,
          lastWorkedDate: new Date()
        })
      }
      setIsTimeModalOpen(false)
      setSelectedProjectId(null)
      fetchProjects()
    } catch (err) {
      setError('Failed to log time')
      console.error(err)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await projectsAPI.delete(id)
        fetchProjects()
      } catch (err) {
        setError('Failed to delete project')
        console.error(err)
      }
    }
  }

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true
    return project.status === filter
  })

  if (loading && projects.length === 0) return <div className="text-gray-400">Loading projects...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <>
      <div className="flex gap-2 mb-6">
        {['all', 'planning', 'in-progress', 'on-hold', 'completed'].map(status => (
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

      <div className="grid grid-cols-2 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard
              key={project._id}
              project={project}
              onEdit={(project) => {
                setEditingProject(project)
                setIsProjectModalOpen(true)
              }}
              onDelete={handleDelete}
              onLogWork={(id) => {
                setSelectedProjectId(id)
                setIsTimeModalOpen(true)
              }}
            />
          ))
        ) : (
          <div className="col-span-2 text-gray-400 text-center py-8">
            No {filter !== 'all' ? filter : ''} projects yet
          </div>
        )}
      </div>

      <Modal
        isOpen={isProjectModalOpen}
        onClose={() => {
          setIsProjectModalOpen(false)
          setEditingProject(null)
        }}
        title={editingProject ? 'Edit Project' : 'Create New Project'}
      >
        <ProjectForm
          project={editingProject}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsProjectModalOpen(false)
            setEditingProject(null)
          }}
        />
      </Modal>

      <Modal
        isOpen={isTimeModalOpen}
        onClose={() => {
          setIsTimeModalOpen(false)
          setSelectedProjectId(null)
        }}
        title="Log Time for Project"
      >
        <TimeEntryForm
          onSubmit={handleTimeSubmit}
          onCancel={() => {
            setIsTimeModalOpen(false)
            setSelectedProjectId(null)
          }}
        />
      </Modal>
    </>
  )
}
