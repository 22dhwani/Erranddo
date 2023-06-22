import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
