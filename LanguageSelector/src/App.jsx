import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LanguageProvider } from './contexts/LanguageContext'
import LanguageSelector from './components/LanguageSelector'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
 
  return (
    <LanguageProvider>
        <LanguageSelector/>
        <hr/>
        <Header/>
        <hr/>
        <Footer/>
    </LanguageProvider>
  )
}

export default App
