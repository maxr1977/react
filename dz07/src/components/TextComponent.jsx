import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const TextComponent = () => {
  const { language } = useContext(LanguageContext)

  const messages = {
    en: 'English language was chosen',
    ru: 'Был выбран русский язык',
    uk: 'Було обрано українську мову',
    de: 'Deutsche Sprache wurde gewählt',
  }

  return <h1>{messages[language]}</h1>
}

export default TextComponent
