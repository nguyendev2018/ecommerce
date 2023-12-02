import React, { useEffect, useState } from 'react'
import { apiGetProducts } from '../api/product';
import Slider from "react-slick";
import Product from './Product';

const tabs = [
    {id:1, name: "best seller"},
    {id:2, name: "new arrivals"},
    {id:3, name: "tablet"}
]
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};
const BestSellers = () => {
  

    const [bestSellers, setBestSellers] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [activeTab, setActiveTab] = useState(1);
   
    const fetchProducts = async () =>{
      const response = await Promise.all([apiGetProducts({sort:'-sold'}), apiGetProducts({order:'-createAt'})]);
      if(response[0]?.success){
        setBestSellers(response[0].data)
      }
      console.log(bestSellers);
      if(response[1]?.success){
        setNewProducts(response[1].data)
      }
    }
    useEffect(() => {
       fetchProducts()
    }, [])
  return (
    <div>
        <div className='flex text-[20px] gap-8 pb-4 border-b-2 border-main'>
            {tabs.map(item =>(
                <span 
                key={item.id} 
                className={`font-semibold cursor-pointer capitalize border-r text-gray-400 ${activeTab ==  item.id ? "text-black": ""}`}
                onClick={() =>{setActiveTab(item.id)}}
                >
                    {item.name}
                </span>
            ))}
        </div>
        <div className="mt-5">
        <Slider {...settings}>
              {bestSellers?.map(el => (
                <Product key={el.id} productData={el}></Product>
              ))}
        </Slider>
        </div>
    </div>
  )
}

export default BestSellers