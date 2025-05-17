import { createContext, useState } from 'react'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const languageMap = {
    en: 'ru',
    ru: 'uk',
    uk: 'de',
    de: 'en',
  }

  const switchLanguage = () => {
    setLanguage((prevLang) => languageMap[prevLang])
  }

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
