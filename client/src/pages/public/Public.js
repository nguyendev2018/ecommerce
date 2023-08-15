import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Nav } from '../../components'

const Public = () => {
  return (
    <div className='w-full flex justify-center'>
      <Header/>
    <Nav/>
      <div className='w-main'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Public