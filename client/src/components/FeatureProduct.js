import React, {useState, useEffect} from 'react';
// import {ProductCard} from './';
import { apiGetProducts } from '../api/product';
import ProductCard from './ProductCard';

const FeatureProduct = () => {
    const [products, setProduct] = useState([]);
    const featureProducts = async () =>{
        const response = await apiGetProducts({limit:10, totalRatings: 5});
        if(response.success) {
            setProduct(response.data);
        }
    }
    useEffect(() => {
        featureProducts()
    }, [])
    
  return (
    <div className='w-full'>
        <h3  className='text-[20px] font-semibold py-[15px] border-b-2 border-main'>
            FEATURE PRODUCTS
        </h3>
        <div className="flex flex-wrap mt-[15px] mx-[-10px]">
            {products?.map(el => (
                <ProductCard
                key={el._id}
                id={el._id}
                image={el.images}
                title={el.title}
                price={el.price}
                totalRatings={el.totalRatings}
                
            />
            ))}
        </div>
        <div className='flex justify-between gap-4'>
            <img src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_600x.jpg?v=1613166661" alt="" className='w-[50%] object-cover' />
            <div className='flex flex-col justify-between gap-4 w-[20%]'>
                <img src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-bottom-home2_400x.jpg?v=1613166661" alt="" className='h-[48%] object-cover' />
                <img src="https://digital-world-2.myshopify.com/cdn/shop/files/banner3-bottom-home2_400x.jpg?v=1613166661" alt="" className='h-[48%] object-cover'/>
            </div>
                <img src="https://digital-world-2.myshopify.com/cdn/shop/files/banner4-bottom-home2_92e12df0-500c-4897-882a-7d061bb417fd_400x.jpg?v=1613166661" alt="" className='w-[30%]  object-cover' />
        </div>
    </div>
  )
}

export default FeatureProduct