import React from 'react'
import { LanguageProvider } from '../context/LanguageContext'
import AppLayout from './AppLayout'
import "../styles/App.css";

function App() {
  return (
    <LanguageProvider>
      <AppLayout />
    </LanguageProvider>
  )
}

export default App
