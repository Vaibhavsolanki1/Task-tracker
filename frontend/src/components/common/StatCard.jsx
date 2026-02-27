export default function StatCard({ label, value, icon: Icon, color = 'accent' }) {
  const colorClasses = {
    accent: 'text-accent',
    accentLight: 'text-accentLight',
    gray: 'text-gray-400',
    red: 'text-red-500'
  }

  return (
    <div className="stat-card">
      {Icon && <Icon className={`${colorClasses[color]} mb-2`} size={24} />}
      <div className={`text-3xl font-bold ${colorClasses[color]} mb-2`}>
        {value}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}
