import React from 'react'

export default function SelectField({ label, options, value, onChange, error, placeholder = 'Select...' }) {
  return (
    <div className="field-group">
      {label && <label>{label}</label>}
      <div className="select-wrap">
        <select
          className={`select-field ${error ? 'error' : ''}`}
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          <option value="">{placeholder}</option>
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>
      {error && <p className="error-msg">{error}</p>}
    </div>
  )
}
