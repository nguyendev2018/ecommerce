import React from 'react'
import { Route, Routers, Routes } from 'react-router-dom'
import path from './utils/path'
import { Home, Login, Public } from './pages/public'
const App = () => {
  return (
    <Routes>
      <Route path={path.PUBLIC} element={<Public/>}></Route>
      <Route path={path.HOME} element={<Home/>}></Route>
      <Route path={path.LOGIN} element={<Login/>}></Route>
    </Routes>
  )
}

export default App