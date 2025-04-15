import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Create from './pages/Create'
import View from './pages/View'
import Navbar from './components/Navbar'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Welcome/>} /> 
        <Route path="/create" element={<Create/>} /> 
        <Route path="/view" element={<View/>} /> 
    </Routes>
    
  )
}

export default App