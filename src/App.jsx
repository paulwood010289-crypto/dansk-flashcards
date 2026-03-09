import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import LandingPage from './pages/LandingPage'
import UsernameSetup from './pages/UsernameSetup'
import GamePage from './pages/GamePage'
import ProfilePage from './pages/ProfilePage'
import LeaderboardPage from './pages/LeaderboardPage'

function ProtectedRoute({ children }) {
  const { user, profile, loading } = useAuth()
  if (loading) return <LoadingScreen />
  if (!user) return <Navigate to="/" replace />
  if (!profile) return <Navigate to="/setup" replace />
  return children
}

function LoadingScreen() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#f5f0e8', fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem', color: '#5a4a3a', letterSpacing: '0.1em'
    }}>
      Loading…
    </div>
  )
}

export default function App() {
  const { loading } = useAuth()
  if (loading) return <LoadingScreen />

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/setup" element={<UsernameSetup />} />
      <Route path="/game" element={<ProtectedRoute><GamePage /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/leaderboard" element={<ProtectedRoute><LeaderboardPage /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}