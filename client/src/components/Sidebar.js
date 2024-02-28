import React, { useEffect } from 'react'
import { createSlug } from '../utils/helperFn';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/categories/asyncAction';

const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const {categories} = useSelector(state =>state.categories);
  return (
    
    <div className='flex flex-col border'>
      {categories?.map(el =>(
        <NavLink key={createSlug(el.title)}
                to={createSlug(el.title)}
                className={({isActive}) => isActive 
                  ? "bg-main text-white px-5 pt-[15px] pb-[14px] text-sm hover:text-main" 
                  : "px-5 pt-[15px] pb-[14px] text-sm hover:text-main"
                } 
        >
          {el.title}
       </NavLink>
      ))}
    </div>
  )
}

export default Sidebar