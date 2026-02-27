import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FormInput({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  options,
  required = false,
  error
}) {
  const [showOptions, setShowOptions] = useState(false)

  if (type === 'select' && options) {
    return (
      <div className="mb-4">
        {label && <label className="block text-sm font-medium mb-2">{label}</label>}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:border-accent outline-none transition-colors"
          required={required}
        >
          <option value="">Select {label || 'option'}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    )
  }

  if (type === 'textarea') {
    return (
      <div className="mb-4">
        {label && <label className="block text-sm font-medium mb-2">{label}</label>}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:border-accent outline-none transition-colors resize-none"
          required={required}
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    )
  }

  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:border-accent outline-none transition-colors"
        required={required}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  )
}
