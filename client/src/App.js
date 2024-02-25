import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import path from './utils/path'
import { Home, Login, Public } from './pages/public';
import { useDispatch } from 'react-redux';
import { getCategories } from './store/asyncAction';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  
  return (
    <Routes>
      <Route path={path.PUBLIC} element={<Public/>}></Route>
      <Route path={path.HOME} element={<Home/>}></Route>
      <Route path={path.LOGIN} element={<Login/>}></Route>
    </Routes>
  )
}

export default App