import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useContext(LanguageContext)

  const buttonTexts = {
    en: 'Switch language',
    ru: 'Сменить язык',
    uk: 'Змінити мову',
    de: 'Sprache wechseln',
  }

  return <button onClick={switchLanguage}>{buttonTexts[language]}</button>
}

export default LanguageSwitcher
