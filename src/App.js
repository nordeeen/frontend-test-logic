import React from 'react'
import DeretAngka from './components/Test_PsudoCode/DeretAngka'
import Starts from './components/Test_PsudoCode/Starts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fibonacci from './components/Test_PsudoCode/Fibonacci'
import Table from './components/Test_Utama/Table'
import Datas from './components/Test_Utama/Datas'
import UserLogin from './components/Test_Utama/UserLogin'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DeretAngka />} />
        <Route path='/star' element={<Starts />} />
        <Route path='/fibonacci' element={<Fibonacci />} />
        <Route path='/table' element={<Table />} />
        <Route path='/datas' element={<Datas />} />
        <Route path='/login' element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
