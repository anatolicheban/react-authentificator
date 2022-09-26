import React from 'react'
import './App.sass'
import { Authentificator, Autorisation, RequiresAuth } from './components'
import { Route, Routes } from 'react-router'
import Register from './components/Register'

const App = () => {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<RequiresAuth><Authentificator /></RequiresAuth>} />
        <Route path='/login' element={<Autorisation />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
