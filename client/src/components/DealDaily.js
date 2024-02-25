import React, { useEffect, useState } from 'react';
import { apiGetProducts } from '../api/product';
import { AiFillStar, AiOutlineMenu } from 'react-icons/ai';
import { renderStarFromNumber, secondsToHms } from '../utils/helperFn';
import moment from 'moment';
import Countdown from './Countdown';
let idInterval;
const DealDaily = () => {
    const [DealDaily, setDealDaily] = useState([]);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [expireTime, setExpireTime] = useState(false);
  const fetchDealDaily = async () =>{
      const response = await apiGetProducts({limit: 1, pages: Math.round(Math.random() * 10), totalRatings: 1});
      if(response.success) {
        setDealDaily(response.data[0])
        //set up time
        const today = `${moment().format('MM/DD/YYYY')} 5:00:00`;
        const seconds = new Date(today).getTime() - new Date().getTime() + 24 * 3600 * 1000; 
        const number = secondsToHms(seconds);
        setHour(number.h)
        setMinute(number.m)
        setSecond(number.s)
      }
    }
    useEffect(() => {
      idInterval && clearInterval(idInterval)
      fetchDealDaily();
    }, [expireTime])
    useEffect(() => {
      idInterval = setInterval(() => {
      if(second > 0) setSecond(prev => prev - 1);
      else {
        if(minute > 0) {
          setMinute(prev => prev - 1);
          setSecond(59)
        }else {
          if(hour > 0) {
            setHour(prev => prev - 1);
            setMinute(59);
            setSecond(59);
          }
          else {
            setExpireTime(!expireTime)
          }
        }
      }
    }, 1000);
    return () =>{
      //unmount khi thoát khỏi home
      clearInterval(idInterval)
    }
   }, [hour,minute,second])
  return (
    <div className='border w-full flex-auto'>
        <div className="flex items-center justify-between p-4 w-full">
            <span className="flex-1 flex justify-center"><AiFillStar size={20} color="#DD1111"/></span>
            <div className="flex-8 font-bold text-[20px] text-center text-gray-700">DEAL DAILY</div>
            <span className='flex-3'></span>
        </div>
        <div className="w-full flex flex-col items-center pt-8">
          <img src={DealDaily?.thumb} alt="" className='w-full object-contain' />
          <span className='flex h-4'>{renderStarFromNumber(DealDaily?.totalRatings, 20)}</span>
          <span className="line-clamp-1">{DealDaily.title}</span>
        </div>
        <div className='px-4 mt-4'>
          <div className="flex justify-center gap-2 items-center mb-4">
            <Countdown unit={'Hour'} number={hour}/>
            <Countdown unit={'Minutes'} number={minute}/>
            <Countdown unit={'Seconds'} number={second}/>
          </div>
          <button type='button' className='flex gap-2 items-center justify-center w-full bg-main hover:bg-gray-800'>
            <AiOutlineMenu/>
            <span>Options</span>
          </button>
        </div>
    </div>
  )
}

export default DealDaily