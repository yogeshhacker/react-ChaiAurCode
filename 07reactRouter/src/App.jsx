import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './components/Header/Header'
import Home from './components/Home/Home'


function App() {
  

  return (
    <BrowserRouter>
      <h1 className='text-blue-700 font-bold bg-yellow-200 flex mt-2 py-2 text-2xl justify-center'>React Router</h1>
       <Routes>
        <Route path="/" element={<Header />} />
        {/* Add more routes as needed */}
        
      </Routes>
      <header />
      <Home />
      <footer />
    </BrowserRouter>
  )
}

export default App
