import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import '../styles/splash.css'

export default function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/profile'), 2500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="splash-page">
      <div className="splash-content">
        <div className="splash-logo-wrap">
          <Logo size="lg" />
        </div>
        <p className="splash-tagline">Modern matrimony for a modern generation.</p>
      </div>
    </div>
  )
}
