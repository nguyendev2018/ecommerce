import React from 'react'

const Product = ({productData}) => {
  console.log(productData);
  return (
    <div className='1/3'>
      <img src={productData?.thumb || ''} alt="" className='w-[243px] '
    </div>
  )
}

export default Product