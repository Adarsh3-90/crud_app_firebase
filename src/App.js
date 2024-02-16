import React from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Crud from './components/Crud'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/crud' element={<Crud />} />

      </Routes>
    </Router>
    {/* <Crud/> */}
   
    </>
  )
}

export default App