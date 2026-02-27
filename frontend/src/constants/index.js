// Constants for the application

export const CATEGORIES = [
  'Web Dev',
  'DSA',
  'Python',
  'College',
  'Travel Learning',
  'Projects'
]

export const GOAL_STATUSES = [
  'active',
  'completed',
  'paused',
  'abandoned'
]

export const PROJECT_STATUSES = [
  'planning',
  'in-progress',
  'on-hold',
  'completed',
  'abandoned'
]

export const CATEGORY_COLORS = {
  'Web Dev': { bg: 'bg-accent/20', text: 'text-accent', border: 'border-accent' },
  'DSA': { bg: 'bg-accentLight/20', text: 'text-accentLight', border: 'border-accentLight' },
  'Python': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500' },
  'College': { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500' },
  'Travel Learning': { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500' },
  'Projects': { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500' }
}

export const CHART_COLORS = [
  '#ff006e',
  '#fb5607',
  '#8338ec',
  '#3a86ff',
  '#06ffa5',
  '#ffbe0b'
]

export const DEFAULT_PROJECTS = [
  { name: 'Gyaandatta', description: 'Learning platform with interactive content' },
  { name: 'Offline LLM', description: 'Local language model implementation' },
  { name: 'Robotics Research', description: 'Research and development in robotics' },
  { name: 'Game Dev', description: 'Game development project' }
]
