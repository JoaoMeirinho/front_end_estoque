import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter, createBrowserRouter, Route, Router, Routes } from 'react-router-dom'

import Login from './pages/Login.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
