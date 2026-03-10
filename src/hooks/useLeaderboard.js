// NOTE: Create language-specific Supabase views for the leaderboard:
//   'leaderboard_danish' — same as 'leaderboard' but filters round_results by language='danish'
//   'leaderboard_spanish' — same but filters by language='spanish'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useLeaderboard(language = 'danish') {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setRows([])
    const viewName = language === 'spanish' ? 'leaderboard_spanish' : 'leaderboard_danish'
    supabase
      .from(viewName)
      .select('*')
      .limit(50)
      .then(({ data, error: viewErr }) => {
        if (viewErr) {
          // Fall back to main leaderboard view with language filter
          return supabase.from('leaderboard').select('*').eq('language', language).limit(50)
        }
        return { data, error: null }
      })
      .then(({ data, error: err }) => {
        if (err) setError(err)
        else setRows(data ?? [])
        setLoading(false)
      })
  }, [language])

  return { rows, loading, error }
}
