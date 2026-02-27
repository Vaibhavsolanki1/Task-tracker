import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

// Goals API
export const goalsAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/goals`),
  getById: (id) => axios.get(`${API_BASE_URL}/goals/${id}`),
  create: (data) => axios.post(`${API_BASE_URL}/goals`, data),
  update: (id, data) => axios.put(`${API_BASE_URL}/goals/${id}`, data),
  delete: (id) => axios.delete(`${API_BASE_URL}/goals/${id}`)
}

// Time Entries API
export const timeEntriesAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/time-entries`),
  getByRange: (startDate, endDate) => 
    axios.get(`${API_BASE_URL}/time-entries/range`, { params: { startDate, endDate } }),
  getDailyTotal: (date) => 
    axios.get(`${API_BASE_URL}/time-entries/daily-total`, { params: { date } }),
  create: (data) => axios.post(`${API_BASE_URL}/time-entries`, data),
  update: (id, data) => axios.put(`${API_BASE_URL}/time-entries/${id}`, data),
  delete: (id) => axios.delete(`${API_BASE_URL}/time-entries/${id}`)
}

// Projects API
export const projectsAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/projects`),
  getById: (id) => axios.get(`${API_BASE_URL}/projects/${id}`),
  create: (data) => axios.post(`${API_BASE_URL}/projects`, data),
  update: (id, data) => axios.put(`${API_BASE_URL}/projects/${id}`, data),
  delete: (id) => axios.delete(`${API_BASE_URL}/projects/${id}`)
}
