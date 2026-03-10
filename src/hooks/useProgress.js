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

  async function saveRoundResult({ level, score, passed, durationSecs }) {
    // Insert round result
    await supabase.from('round_results').insert({
      user_id: user.id,
      level,
      score,
      passed,
      duration_secs: durationSecs,
    })

    if (passed) {
      const newHighest = Math.max(progress?.highest_level ?? 1, level + 1)
      const newCurrent = level + 1
      const { data } = await supabase
        .from('user_progress')
        .upsert({ user_id: user.id, highest_level: newHighest, current_level: newCurrent, updated_at: new Date().toISOString() })
        .select()
        .single()
      setProgress(data)
    }

    // Refresh history
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

  return { progress, history, loading, saveRoundResult, setCurrentLevel, reload: loadProgress }
}
