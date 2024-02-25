import React, { useEffect, useState } from 'react'
import { apiGetProducts } from '../api/product';
import Slider from "react-slick";
import Product from './Product';

const tabs = [
    {id:1, name: "best seller"},
    {id:2, name: "new arrivals"}
]
const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};
const BestSellers = () => {
    const [bestSellers, setBestSellers] = useState(null);
    const [newProducts, setNewProducts] = useState(null);
    const [activeTab, setActiveTab] = useState(1);
    const [product, setProducts] = useState(null);
    const fetchProducts = async () =>{
      const response = await Promise.all([apiGetProducts({sort:'-sold'}), apiGetProducts({order:'-createdAt'})]);
      if(response[0]?.success){
        setBestSellers(response[0].data);
        setProducts(response[0].data)
      }
      if(response[1]?.success){
        setNewProducts(response[1].data);
        setProducts(response[0].data)
      }
    }
    useEffect(() => {
       fetchProducts()
    }, [])
    useEffect(() => {
      if(activeTab === 1) {
        setProducts(bestSellers)
      }
      if(activeTab === 2 ){
        setProducts(newProducts)
      }
    }, [activeTab])
  return (
    <div>
        <div className='flex text-[20px] gap-8 pb-4 border-b-2 border-main'>
            {tabs.map(item =>(
                <span 
                key={item.id} 
                className={`font-semibold uppercase px-8 cursor-pointer border-r text-gray-400 ${activeTab ===  item.id ? "text-gray-900": ""}`}
                onClick={() =>{setActiveTab(item.id)}}
                >
                    {item.name}
                </span>
            ))}
        </div>
        <div className="mt-4 mx-[10px] border-t-2 border-main pt-4">
        <Slider {...settings}>
              {product?.map(el => (
                <Product key={el.id} productData={el} isLabel= {activeTab === 1 ? true : false}></Product>
              ))}
        </Slider>
        </div>
    </div>
  )
}

export default BestSellers