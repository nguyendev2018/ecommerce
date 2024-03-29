import React from 'react'
import { Link } from 'react-router-dom'
import path from '../utils/path'

const TopHeader = () => {
  return (
    <>
          <div className='h-[38px] w-full bg-primary flex items-center justify-center'>
        <div className="w-main flex items-center justify-between text-xs text-white">
            <span>order online or call us (+1800) 000 8808</span>
            <Link to={`/${path.LOGIN}`}>Sign In or Create Account</Link>
        </div>
    </div>
    </>
  
  )
}

export default TopHeader