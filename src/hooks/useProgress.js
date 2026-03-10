import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'

export function useProgress() {
  const { user } = useAuth()
  const [progress, setProgress] = useState(null)
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    loadProgress()
  }, [user])

  async function loadProgress() {
    setLoading(true)
    const [{ data: prog }, { data: hist }] = await Promise.all([
      supabase.from('user_progress').select('*').eq('user_id', user.id).single(),
      supabase.from('round_results').select('*').eq('user_id', user.id).order('played_at', { ascending: false }).limit(50),
    ])
    setProgress(prog || { highest_level: 1, current_level: 1 })
    setHistory(hist || [])
    setLoading(false)
  }

  // Gate tracking via localStorage (keyed by user id)
  function _getStoredGates() {
    try {
      return JSON.parse(localStorage.getItem(`gates_${user.id}`)) || []
    } catch { return [] }
  }

  // A gate is "passed" if the user has explicitly completed it OR if
  // their highest_level has already advanced past it (grandfathering).
  // levelIdx is 0-based (gate for level 1 = levelIdx 0).
  function isGatePassed(levelIdx) {
    if ((progress?.highest_level ?? 1) >= levelIdx + 2) return true
    return _getStoredGates().includes(levelIdx)
  }

  // Called when the user successfully completes a gate challenge.
  async function markGatePassed(levelIdx) {
    const gates = _getStoredGates()
    if (!gates.includes(levelIdx)) {
      localStorage.setItem(`gates_${user.id}`, JSON.stringify([...gates, levelIdx]))
    }
    const newHighest = Math.max(progress?.highest_level ?? 1, levelIdx + 2)
    const newCurrent = levelIdx + 2
    const { data } = await supabase
      .from('user_progress')
      .upsert({ user_id: user.id, highest_level: newHighest, current_level: newCurrent, updated_at: new Date().toISOString() })
      .select()
      .single()
    if (data) setProgress(data)
  }

  async function saveRoundResult({ level, score, passed, durationSecs }) {
    await supabase.from('round_results').insert({
      user_id: user.id,
      level,
      score,
      passed,
      duration_secs: durationSecs,
    })

    // NOTE: highest_level is now advanced by markGatePassed (gate system).
    // We still update current_level so the level select indicator stays accurate.
    if (passed) {
      await supabase
        .from('user_progress')
        .upsert({ user_id: user.id, current_level: level, updated_at: new Date().toISOString() })
      setProgress(prev => (prev ? { ...prev, current_level: level } : prev))
    }

    const { data: hist } = await supabase
      .from('round_results')
      .select('*')
      .eq('user_id', user.id)
      .order('played_at', { ascending: false })
      .limit(50)
    setHistory(hist || [])
  }

  async function setCurrentLevel(level) {
    await supabase
      .from('user_progress')
      .upsert({ user_id: user.id, current_level: level, updated_at: new Date().toISOString() })
    setProgress(prev => ({ ...prev, current_level: level }))
  }

  return { progress, history, loading, saveRoundResult, setCurrentLevel, isGatePassed, markGatePassed, reload: loadProgress }
}
