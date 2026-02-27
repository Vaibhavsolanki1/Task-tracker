import { useState, useEffect } from 'react'
import { Flame } from 'lucide-react'
import StatCard from '../common/StatCard'
import { timeEntriesAPI } from '../../services/api'

export default function DashboardStats() {
  const [stats, setStats] = useState({
    todayHours: 0,
    weeklyHours: 0,
    streak: 8,
    activeGoals: 3
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Calculate today's hours
        const today = new Date().toISOString().split('T')[0]
        const dailyRes = await timeEntriesAPI.getDailyTotal(today)
        const todayHours = (dailyRes.data.totalMinutes / 60).toFixed(1)

        // Calculate weekly hours (last 7 days)
        const endDate = new Date()
        const startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000)
        const weeklyRes = await timeEntriesAPI.getByRange(
          startDate.toISOString().split('T')[0],
          endDate.toISOString().split('T')[0]
        )
        const weeklyHours = (
          weeklyRes.data.reduce((sum, entry) => sum + entry.durationMinutes, 0) / 60
        ).toFixed(1)

        setStats(prev => ({
          ...prev,
          todayHours,
          weeklyHours
        }))
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return <div className="text-gray-400">Loading stats...</div>
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <StatCard label="Today Hours" value={`${stats.todayHours}h`} color="accent" />
      <StatCard label="Weekly Hours" value={`${stats.weeklyHours}h`} color="accent" />
      <StatCard label="Active Goals" value={stats.activeGoals} color="accentLight" />
      <StatCard
        label="Current Streak"
        value={`🔥 ${stats.streak}`}
        color="accentLight"
      />
    </div>
  )
}
