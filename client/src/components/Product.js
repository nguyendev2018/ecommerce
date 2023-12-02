import React from 'react'

const Product = ({productData}) => {
  console.log(productData);
  return (
    <div className='1/3'>
        <img src={productData?.images[0] || ''} alt="" className='ư-full object-contain' />
    </div>
  )
}

export default Product