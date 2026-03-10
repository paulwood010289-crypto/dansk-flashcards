import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useLeaderboard() {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    supabase
      .from('leaderboard')
      .select('*')
      .limit(50)
      .then(({ data, error }) => {
        if (error) setError(error)
        else setRows(data ?? [])
        setLoading(false)
      })
  }, [])

  return { rows, loading, error }
}
