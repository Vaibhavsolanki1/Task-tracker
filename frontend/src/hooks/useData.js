import { useState, useEffect, useCallback } from 'react'
import { goalsAPI, timeEntriesAPI, projectsAPI } from '../services/api'

export const useGoals = () => {
  const [goals, setGoals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchGoals = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await goalsAPI.getAll()
      setGoals(res.data)
    } catch (err) {
      setError('Failed to fetch goals')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  const createGoal = useCallback(async (data) => {
    try {
      await goalsAPI.create(data)
      await fetchGoals()
      return { success: true }
    } catch (err) {
      setError('Failed to create goal')
      return { success: false, error: err.message }
    }
  }, [fetchGoals])

  const updateGoal = useCallback(async (id, data) => {
    try {
      await goalsAPI.update(id, data)
      await fetchGoals()
      return { success: true }
    } catch (err) {
      setError('Failed to update goal')
      return { success: false, error: err.message }
    }
  }, [fetchGoals])

  const deleteGoal = useCallback(async (id) => {
    try {
      await goalsAPI.delete(id)
      await fetchGoals()
      return { success: true }
    } catch (err) {
      setError('Failed to delete goal')
      return { success: false, error: err.message }
    }
  }, [fetchGoals])

  useEffect(() => {
    fetchGoals()
  }, [fetchGoals])

  return {
    goals,
    loading,
    error,
    fetchGoals,
    createGoal,
    updateGoal,
    deleteGoal
  }
}

export const useTimeEntries = () => {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchEntries = useCallback(async (startDate = null, endDate = null) => {
    setLoading(true)
    setError(null)
    try {
      let res
      if (startDate && endDate) {
        res = await timeEntriesAPI.getByRange(startDate, endDate)
      } else {
        res = await timeEntriesAPI.getAll()
      }
      setEntries(res.data)
    } catch (err) {
      setError('Failed to fetch entries')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  const createEntry = useCallback(async (data) => {
    try {
      await timeEntriesAPI.create(data)
      await fetchEntries()
      return { success: true }
    } catch (err) {
      setError('Failed to create entry')
      return { success: false, error: err.message }
    }
  }, [fetchEntries])

  const updateEntry = useCallback(async (id, data) => {
    try {
      await timeEntriesAPI.update(id, data)
      await fetchEntries()
      return { success: true }
    } catch (err) {
      setError('Failed to update entry')
      return { success: false, error: err.message }
    }
  }, [fetchEntries])

  const deleteEntry = useCallback(async (id) => {
    try {
      await timeEntriesAPI.delete(id)
      await fetchEntries()
      return { success: true }
    } catch (err) {
      setError('Failed to delete entry')
      return { success: false, error: err.message }
    }
  }, [fetchEntries])

  const getDailyTotal = useCallback(async (date) => {
    try {
      const res = await timeEntriesAPI.getDailyTotal(date)
      return res.data
    } catch (err) {
      console.error('Failed to fetch daily total:', err)
      return null
    }
  }, [])

  useEffect(() => {
    fetchEntries()
  }, [fetchEntries])

  return {
    entries,
    loading,
    error,
    fetchEntries,
    createEntry,
    updateEntry,
    deleteEntry,
    getDailyTotal
  }
}

export const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProjects = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await projectsAPI.getAll()
      setProjects(res.data)
    } catch (err) {
      setError('Failed to fetch projects')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  const createProject = useCallback(async (data) => {
    try {
      await projectsAPI.create(data)
      await fetchProjects()
      return { success: true }
    } catch (err) {
      setError('Failed to create project')
      return { success: false, error: err.message }
    }
  }, [fetchProjects])

  const updateProject = useCallback(async (id, data) => {
    try {
      await projectsAPI.update(id, data)
      await fetchProjects()
      return { success: true }
    } catch (err) {
      setError('Failed to update project')
      return { success: false, error: err.message }
    }
  }, [fetchProjects])

  const deleteProject = useCallback(async (id) => {
    try {
      await projectsAPI.delete(id)
      await fetchProjects()
      return { success: true }
    } catch (err) {
      setError('Failed to delete project')
      return { success: false, error: err.message }
    }
  }, [fetchProjects])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  return {
    projects,
    loading,
    error,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject
  }
}
