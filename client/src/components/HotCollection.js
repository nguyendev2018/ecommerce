import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../store/categories/asyncAction';
const HotCollection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const {categories} = useSelector(state =>state.categories);
  console.log(categories);
  return (
    <div>
      {categories.map((el, index) =>(
        <div key={el._id}>
          <h2 className='font-bold'>{el.title}</h2>
          <img src={el.img} alt="" />
          <div>{
         el.brand
          }</div>
        </div>
        
      ))};
      
    </div>
  )
}

export default HotCollection