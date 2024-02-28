import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Nav, TopHeader } from '../../components'
const Public = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <TopHeader/>
      <Header/>
      <Nav/>
      <div className='w-main'>
        <Outlet/>
      </div>
      Footer
    </div> 
  )
}

export default Public