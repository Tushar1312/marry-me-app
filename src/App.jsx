import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SplashScreen from './pages/SplashScreen'
import ProfileForm from './pages/ProfileForm'
import Welcome from './pages/Welcome'
import Preferences from './pages/Preferences'

function App() {
  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
