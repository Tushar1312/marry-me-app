import React from 'react'

export default function RangeSlider({ label, min, max, value, onChange, unit = '', hint = '' }) {
  const percent = ((value - min) / (max - min)) * 100

  return (
    <div className="field-group">
      <label>{label} {hint && <span style={{ fontWeight: 300, color: '#888', fontSize: 11 }}>{hint}</span>}</label>
      <div className="range-wrap">
        <div className="range-values">
          <span>{min}{unit}</span>
          <span style={{ color: '#b8933a', fontWeight: 600 }}>{value}{unit}</span>
          <span>{max}{unit}</span>
        </div>
        <input
          type="range"
          className="range-slider"
          min={min}
          max={max}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, #b8933a 0%, #b8933a ${percent}%, #ddd ${percent}%, #ddd 100%)`
          }}
        />
      </div>
    </div>
  )
}
