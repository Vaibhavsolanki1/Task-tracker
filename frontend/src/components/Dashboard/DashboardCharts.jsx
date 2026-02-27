import { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { timeEntriesAPI, goalsAPI } from '../../services/api'

const COLORS = ['#ff006e', '#fb5607', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b']

export default function DashboardCharts() {
  const [weeklyData, setWeeklyData] = useState([])
  const [categoryData, setCategoryData] = useState([])
  const [upcomingGoals, setUpcomingGoals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        // Fetch weekly data
        const endDate = new Date()
        const startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000)

        const entriesRes = await timeEntriesAPI.getByRange(
          startDate.toISOString().split('T')[0],
          endDate.toISOString().split('T')[0]
        )

        // Process weekly data
        const dailyMap = {}
        for (let i = 0; i < 7; i++) {
          const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000)
          const dateStr = date.toLocaleDateString('en-US', { weekday: 'short' })
          dailyMap[dateStr] = 0
        }

        entriesRes.data.forEach(entry => {
          const date = new Date(entry.date).toLocaleDateString('en-US', { weekday: 'short' })
          if (dailyMap[date] !== undefined) {
            dailyMap[date] += entry.durationMinutes / 60
          }
        })

        const weeklyChartData = Object.entries(dailyMap).map(([day, hours]) => ({
          day,
          hours: parseFloat(hours.toFixed(1))
        }))
        setWeeklyData(weeklyChartData)

        // Process category data
        const categoryMap = {}
        entriesRes.data.forEach(entry => {
          categoryMap[entry.category] = (categoryMap[entry.category] || 0) + entry.durationMinutes / 60
        })

        const categoryChartData = Object.entries(categoryMap).map(([category, hours]) => ({
          name: category,
          value: parseFloat(hours.toFixed(1))
        }))
        setCategoryData(categoryChartData)

        // Fetch upcoming goals
        const goalsRes = await goalsAPI.getAll()
        const sorted = goalsRes.data
          .filter(g => g.status !== 'completed')
          .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
          .slice(0, 5)
        setUpcomingGoals(sorted)
      } catch (error) {
        console.error('Error fetching chart data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchChartData()
  }, [])

  if (loading) {
    return <div className="text-gray-400">Loading charts...</div>
  }

  return (
    <>
      {/* Weekly Hours Chart */}
      <div className="card col-span-2">
        <h2 className="text-xl font-bold mb-4">Weekly Overview</h2>
        {weeklyData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #444' }}
                cursor={{ fill: '#ff006e20' }}
              />
              <Bar dataKey="hours" fill="#ff006e" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-64 flex items-center justify-center text-gray-500">
            No data to display
          </div>
        )}
      </div>

      {/* Category Distribution */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Category Distribution</h2>
        {categoryData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}h`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #444' }}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-64 flex items-center justify-center text-gray-500">
            No data to display
          </div>
        )}
      </div>

      {/* Upcoming Deadlines */}
      <div className="card col-span-1">
        <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {upcomingGoals.length > 0 ? (
            upcomingGoals.map(goal => {
              const daysUntil = Math.ceil(
                (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)
              )
              const isUrgent = daysUntil <= 3

              return (
                <div
                  key={goal._id}
                  className={`p-3 rounded border-l-2 ${
                    isUrgent
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-accent bg-accent/10'
                  }`}
                >
                  <p className="font-medium">{goal.title}</p>
                  <p className={`text-sm ${isUrgent ? 'text-red-400' : 'text-gray-400'}`}>
                    {daysUntil > 0 ? `In ${daysUntil} days` : 'Overdue'}
                  </p>
                  <div className="mt-2 bg-gray-900 rounded p-1">
                    <div
                      className="h-1 bg-accent rounded"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              )
            })
          ) : (
            <p className="text-gray-400 text-sm">No active goals</p>
          )}
        </div>
      </div>
    </>
  )
}
