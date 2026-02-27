import DashboardStats from '../components/Dashboard/DashboardStats'
import DashboardCharts from '../components/Dashboard/DashboardCharts'

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="mb-8">
        <DashboardStats />
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-3 gap-6">
        <DashboardCharts />
      </div>
    </div>
  )
}
