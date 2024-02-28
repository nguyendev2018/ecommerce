import React, {memo} from "react";
import Slider from "react-slick";
import { Product } from "./";
const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const CustomerSlider = ({ products, activeTab }) => {
  return (
    <>
      {products && (
        <Slider {...settings}>
          {products?.map((el,index) => (
            <Product
              key={index}
              pid={el.id}
              productData={el}
              isLabel={activeTab === 1 ? true : false}
            ></Product>
          ))}
        </Slider>
      )}
    </>
  );
};

export default memo(CustomerSlider);
