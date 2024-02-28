import React from 'react'
import { formatMoney, renderStarFromNumber } from '../utils/helperFn'

const ProductCard = ({price,totalRatings,title, image, id}) => {
  return (
    
    <div  className='w-1/3 flex-auto mx-[10px] mb-[20px]' key={id}>
      <h2>Product Card</h2>
      <div className="flex w-full border">
      <img src={image} alt="products" className='w-[90px] object-contain p-4' />
      <div className="flex flex-col mt-[15px] items-start gap-1 w-full text-sm">
      <span className='line-clamp-1 capitalize'>{title}</span>
        <span className='flex h-4'>{renderStarFromNumber(totalRatings)?.map((el,index) => (
          <span key={index}>{el}</span>
        ))}</span>
        <span>{`${formatMoney(price)} VND`}</span>
      </div>
      </div>
    </div>
  )
}

export default ProductCard