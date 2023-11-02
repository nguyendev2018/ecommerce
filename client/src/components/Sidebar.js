import React, { useEffect } from 'react'
import { GetAllCategories } from '../api/app'

const Sidebar = () => {
  
  const fetchCategory = async () => { 
    const data = await GetAllCategories();
    console.log(data);
    }
   useEffect(() => {
     fetchCategory()
   }, [])
   
  return (
    <div>Tio nmef</div>
  )
}

export default Sidebar