import React, { useEffect, useState } from 'react'
import { Banner, Sidebar } from '../../components'

import BestSellers from '../../components/BestSellers'
const Home = () => {
   
    
  return (
    <div className='w-main flex'>
      <div className='flex flex-col gap-5 w-[20%] flex-auto border'>
        <Sidebar/>
        <span>Deal Daily</span>
      </div>
      <div className='flex flex-col gap-5 pl-5 w-[80%] flex-auto border'>
          <Banner/>
          <BestSellers/>
      </div>
    </div>
  )
}

export default Home