import React, { useState, useRef, useEffect } from 'react'

export default function MultiSelect({ label, options, value = [], onChange, error, placeholder = 'Select...' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const toggle = (opt) => {
    if (value.includes(opt)) {
      onChange(value.filter(v => v !== opt))
    } else {
      onChange([...value, opt])
    }
  }

  const remove = (opt, e) => {
    e.stopPropagation()
    onChange(value.filter(v => v !== opt))
  }

  return (
    <div className="field-group">
      {label && <label>{label}</label>}
      <div className="multi-select" ref={ref}>
        <div
          className={`multi-select-trigger ${open ? 'open' : ''} ${error ? 'error' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <div className="chips-wrap">
            {value.length === 0
              ? <span className="chip-placeholder">{placeholder}</span>
              : value.map(v => (
                <span key={v} className="chip">
                  {v}
                  <button className="chip-remove" onClick={(e) => remove(v, e)}>×</button>
                </span>
              ))
            }
          </div>
          <span style={{ fontSize: 11, color: '#888', flexShrink: 0 }}>{open ? '▲' : '▼'}</span>
        </div>
        {open && (
          <div className="dropdown-list">
            {options.map(opt => (
              <label key={opt} className="dropdown-item">
                <input
                  type="checkbox"
                  checked={value.includes(opt)}
                  onChange={() => toggle(opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        )}
      </div>
      {error && <p className="error-msg">{error}</p>}
    </div>
  )
}
