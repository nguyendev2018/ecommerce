import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetProducts } from '../api/product';
import {Product, CustomerSlider} from './';
import { getNewProducts } from '../store/products/asynsAction';
const tabs = [
    {id:1, name: "best seller"}, 
    {id:2, name: "new arrivals"}
]
const BestSellers = () => {
  const dispatch = useDispatch();
    const [bestSellers, setBestSellers] = useState([]);
    const {newProducts} = useSelector(state => state.products);
    const [activeTab, setActiveTab] = useState(1);
    const [product, setProducts] = useState([]);
    const fetchProducts = async () =>{
      const response = await apiGetProducts({sort:'-sold'});
      console.log(response);
      if(response.success){
        setBestSellers(response.data);
        setProducts(response.data)
      }
    }
    useEffect(() => {
       fetchProducts()
       dispatch(getNewProducts());
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
        <div className="mt-4 mx-[10px] border-t-2 border-primary pt-4">
              <CustomerSlider products={product} activeTab={activeTab} />
        </div>
    </div>
  )
}

export default BestSellers