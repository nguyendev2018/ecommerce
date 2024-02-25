import React from 'react'
import { Banner, Sidebar, DealDaily, FeatureProduct } from '../../components'

import BestSellers from '../../components/BestSellers'
const Home = () => {
   
    
  return (
    <>
      <div className='w-main'>
      <div className="flex">
      <div className='flex flex-col gap-5 w-[25%] flex-auto border'>
        <Sidebar/>
        <DealDaily/>
      </div>
      <div className='flex flex-col gap-5 pl-5 w-[75%] flex-auto border'>
          <Banner/>
          <BestSellers/>
      </div>
      </div>
      <div className='my-8'>
      <FeatureProduct/>
    </div>
    <div className="w-full h-[500px]"></div>
    </div>
    
    </>
  )
}

export default Home