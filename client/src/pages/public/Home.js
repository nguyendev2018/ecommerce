import React, { useEffect } from "react";
import { Banner, Sidebar, FeatureProduct, CustomerSlider, DealDaily } from "../../components";
import BestSellers from "../../components/BestSellers";
import { useDispatch, useSelector } from "react-redux";
import { getNewProducts } from "../../store/products/asynsAction";
import HotCollection from "../../components/HotCollection";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getNewProducts());
  }, []);
  const {newProducts} = useSelector(state =>state.products);
  return (
    <>
      <div className="w-main">
        <div className="flex">
          <div className="flex flex-col gap-5 w-[25%] flex-auto border">
            <Sidebar />
            <DealDaily />
          </div>
          <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto border">
            <Banner />
            <BestSellers />
          </div>
        </div>
        <div className="my-8">
          <FeatureProduct />
        </div>
        <div className="my-8">
          <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-primary">
            NEW ARRIVALS
          </h3>
          <div className="w-full mt-4 mx-[-10px] border-t-2 border-main pt-4">
            <CustomerSlider products={newProducts}   />
          </div>
        </div>
        <div className="my-8">
          <HotCollection />
        </div>
        <div className="w-full h-[500px]"></div>
      </div>
    </>
  );
};

export default Home;
