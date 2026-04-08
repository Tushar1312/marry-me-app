import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import '../styles/welcome.css'

export default function Welcome() {
  const navigate = useNavigate()
  const userName = localStorage.getItem('userName') || 'Priyanka Reddy Diyya'

  return (
    <div className="welcome-page">
      {/* Mandala top decoration */}
      <div className="mandala-top">
        <svg viewBox="0 0 390 180" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%">
          <g opacity="0.25">
            {/* Mandala petals - simplified decorative pattern */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180
              const cx = 195 + Math.cos(angle) * 60
              const cy = 0 + Math.sin(angle) * 60
              return (
                <ellipse
                  key={i}
                  cx={cx}
                  cy={cy}
                  rx="28"
                  ry="14"
                  transform={`rotate(${i * 30}, ${cx}, ${cy})`}
                  stroke="#b8933a"
                  strokeWidth="1"
                  fill="none"
                />
              )
            })}
            <circle cx="195" cy="0" r="70" stroke="#b8933a" strokeWidth="0.8" fill="none" />
            <circle cx="195" cy="0" r="50" stroke="#b8933a" strokeWidth="0.8" fill="none" />
            <circle cx="195" cy="0" r="30" stroke="#b8933a" strokeWidth="0.8" fill="none" />
            {Array.from({ length: 16 }).map((_, i) => {
              const a = (i * 22.5 * Math.PI) / 180
              return (
                <line
                  key={i}
                  x1={195 + Math.cos(a) * 30}
                  y1={Math.sin(a) * 30}
                  x2={195 + Math.cos(a) * 70}
                  y2={Math.sin(a) * 70}
                  stroke="#b8933a"
                  strokeWidth="0.6"
                />
              )
            })}
          </g>
        </svg>
      </div>

      {/* Logo */}
      <div className="welcome-logo">
        <Logo size="sm" />
      </div>

      {/* Content */}
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome</h1>
        <h2 className="welcome-name">{userName}</h2>
        <p className="welcome-desc">
          Before you Start your journey,<br />
          set Partner Preferences for better<br />
          matches
        </p>
        <button className="btn-primary" onClick={() => navigate('/preferences')}>
          Set Partner Preferences
        </button>
      </div>

      {/* Ring image placeholder */}
      <div className="rings-image">
        <svg viewBox="0 0 390 220" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%">
          {/* Decorative ring illustration */}
          <defs>
            <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5f5f5" />
              <stop offset="100%" stopColor="#e8e0d0" />
            </radialGradient>
          </defs>
          <rect width="390" height="220" fill="url(#ringGrad)" />
          {/* Left ring */}
          <ellipse cx="155" cy="130" rx="70" ry="55" stroke="#c0a060" strokeWidth="12" fill="none"/>
          <ellipse cx="155" cy="130" rx="70" ry="55" stroke="#e8d4a0" strokeWidth="4" fill="none" opacity="0.5"/>
          <ellipse cx="155" cy="130" rx="56" ry="43" stroke="#a08040" strokeWidth="3" fill="none" opacity="0.3"/>
          {/* Right ring */}
          <ellipse cx="240" cy="115" rx="70" ry="55" stroke="#b0b0b0" strokeWidth="12" fill="none"/>
          <ellipse cx="240" cy="115" rx="70" ry="55" stroke="#d8d8d8" strokeWidth="4" fill="none" opacity="0.5"/>
          <ellipse cx="240" cy="115" rx="56" ry="43" stroke="#909090" strokeWidth="3" fill="none" opacity="0.3"/>
          {/* Decorative lace suggestion */}
          <ellipse cx="195" cy="195" rx="160" ry="30" stroke="#d0c0a0" strokeWidth="0.8" fill="none" opacity="0.5" strokeDasharray="4 4"/>
        </svg>
      </div>
    </div>
  )
}
