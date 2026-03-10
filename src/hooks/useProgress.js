import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'

export function useProgress(language = 'danish') {
  const { user } = useAuth()
  const [progress, setProgress] = useState(null)
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user || !language) return
    loadProgress()
  }, [user, language])

  async function loadProgress() {
    setLoading(true)
    const [{ data: prog }, { data: hist }] = await Promise.all([
      supabase.from('user_progress').select('*').eq('user_id', user.id).eq('language', language).single(),
      supabase.from('round_results').select('*').eq('user_id', user.id).eq('language', language).order('played_at', { ascending: false }).limit(50),
    ])
    setProgress(prog || { highest_level: 1, current_level: 1 })
    setHistory(hist || [])
    setLoading(false)
  }

  // Gate tracking via localStorage (keyed by user id + language)
  function _getStoredGates() {
    try {
      return JSON.parse(localStorage.getItem(`gates_${user.id}_${language}`)) || []
    } catch { return [] }
  }

  // A gate is "passed" if highest_level has already advanced past it, or explicitly completed.
  function isGatePassed(levelIdx) {
    if ((progress?.highest_level ?? 1) >= levelIdx + 2) return true
    return _getStoredGates().includes(levelIdx)
  }

  async function markGatePassed(levelIdx) {
    const gates = _getStoredGates()
    if (!gates.includes(levelIdx)) {
      localStorage.setItem(`gates_${user.id}_${language}`, JSON.stringify([...gates, levelIdx]))
    }
    const newHighest = Math.max(progress?.highest_level ?? 1, levelIdx + 2)
    const newCurrent = levelIdx + 2
    const { data } = await supabase
      .from('user_progress')
      .upsert({ user_id: user.id, language, highest_level: newHighest, current_level: newCurrent, updated_at: new Date().toISOString() })
      .select()
      .single()
    if (data) setProgress(data)
  }

  async function saveRoundResult({ level, score, passed, durationSecs }) {
    await supabase.from('round_results').insert({
      user_id: user.id,
      language,
      level,
      score,
      passed,
      duration_secs: durationSecs,
    })

    if (passed) {
      if (language === 'danish') {
        // For Danish, highest_level is advanced by markGatePassed (gate system).
        // Only update current_level here so the level select indicator stays accurate.
        await supabase
          .from('user_progress')
          .upsert({ user_id: user.id, language, current_level: level, updated_at: new Date().toISOString() })
        setProgress(prev => (prev ? { ...prev, current_level: level } : prev))
      } else {
        // For Spanish (no gates), advance highest_level directly.
        const newHighest = Math.max(progress?.highest_level ?? 1, level + 1)
        const newCurrent = level + 1
        const { data } = await supabase
          .from('user_progress')
          .upsert({ user_id: user.id, language, highest_level: newHighest, current_level: newCurrent, updated_at: new Date().toISOString() })
          .select()
          .single()
        setProgress(data)
      }
    }

    const { data: hist } = await supabase
      .from('round_results')
      .select('*')
      .eq('user_id', user.id)
      .eq('language', language)
      .order('played_at', { ascending: false })
      .limit(50)
    setHistory(hist || [])
  }

  async function setCurrentLevel(level) {
    await supabase
      .from('user_progress')
      .upsert({ user_id: user.id, language, current_level: level, updated_at: new Date().toISOString() })
    setProgress(prev => ({ ...prev, current_level: level }))
  }

  return { progress, history, loading, saveRoundResult, setCurrentLevel, isGatePassed, markGatePassed, reload: loadProgress }
}
