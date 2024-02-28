import React, { useState } from 'react';
import { formatMoney } from '../utils/helperFn';
import label from '../assets/label-red.png';
import { renderStarFromNumber } from '../utils/helperFn';
import SelectOption from './SelectOption';
import icons from '../utils/icons';
const {AiFillEye, AiOutlineMenu, BsFillSuitHeartFill} = icons; 
const Product = ({productData, isLabel}) => {
    const [isShowOption, setIsOption] = useState(false);
    return (
    <div className='w-full text-base px-[10px]'>
      <div className="w-full border-p-[15px] flex flex-col items-center"
        onMouseEnter={e => {
          e.stopPropagation();
          setIsOption(true)
        }}
        onMouseLeave={e =>{
          e.stopPropagation();
          setIsOption(false)
        }}>
        <div className="w-full relative">
        
            {
            isShowOption ? (
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 animate-slide-top">
            <SelectOption icon={<AiFillEye/>}/>
            <SelectOption icon={<AiOutlineMenu/>}/>
            <SelectOption icon={<BsFillSuitHeartFill/>}/>
            </div>
            ) : null}
          <img src={productData?.thumb || 'https://static.thenounproject.com/png/4974686-200.png'} alt="" className='w-[274px] h-[274px] object-cover' />
          <img src={label} alt="" className='absolute top-0 left-0 w-[100%] h-[25px] object-cover'/>
          <span className='font-bold top-[0] left-[20px] text-white absolute'> {isLabel ? "Trending" : "New"}</span>
        </div>
        <div className="flex flex-col mt-[15px] items-start gap-1 w-full">
          <span className='line-clamp-1'>{productData?.title}</span>
          <span className='flex'>{renderStarFromNumber(productData?.totalRatings)?.map((el,index) => (
              <span key={index}>{el}</span>
          ))}</span>
          <span>{`${formatMoney(productData?.price)} VND`}</span>
        </div>
      </div>
    </div>
  )
}

export default Product