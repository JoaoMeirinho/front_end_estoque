import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter, createBrowserRouter, Route, Router, Routes } from 'react-router-dom'

import Cadastro from './pages/Cadastro/Cadastro.tsx'
import Login from './pages/Login/Login.tsx'
import Dashboard from './pages/Dashboard/Dashboard.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
