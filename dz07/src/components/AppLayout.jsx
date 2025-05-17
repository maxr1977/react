import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import TextComponent from './TextComponent'

const AppLayout = () => {
  return (
    <div className="app-container">
      <TextComponent />
      <LanguageSwitcher />
    </div>
  )
}

export default AppLayout
