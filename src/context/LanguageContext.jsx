import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('selectedLanguage') || null
  })

  function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang)
    setLanguageState(lang)
  }

  function clearLanguage() {
    localStorage.removeItem('selectedLanguage')
    setLanguageState(null)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, clearLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
