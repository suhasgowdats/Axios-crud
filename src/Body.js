import React from 'react'
import Tabel from './components/Tabel'
import { Routes, Route } from 'react-router-dom'
import Input from './components/Input'
import Edit from './components/Edit'
import Details from './components/Details'


export default function Body() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Tabel/>}></Route>
      <Route path='/input' element={<Input/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
      </Routes>
        
    </div>
  )
}
