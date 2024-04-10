import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-4">
          <div className="">
            <div className="text-6xl font-white">En Kaliteli Ayakkabı</div>

            <div className="text-lg my-5 font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dicta nesciunt eum illum sint perspiciatis quae quam deleniti
              laboriosam, debitis, magni consectetur cum! Cumque, optio corporis
              dolore quas omnis nam quia at velit et autem sit consequuntur.
              Rerum molestias cupiditate minima provident consequuntur, unde
              voluptatibus, perspiciatis officiis cumque illum inventore?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-[42px] flex items-center justify-center bg-gray-300">
              İncele
            </div>
          </div>
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/556563da5c4d4c1eb8815418984f6e74_9366/Superstar_Ayakkabi_Beyaz_IF3654_01_standard.jpg"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-4">
          <div className="">
            <div className="text-6xl font-white">En Kaliteli Ayakkabı</div>

            <div className="text-lg my-5 font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dicta nesciunt eum illum sint perspiciatis quae quam deleniti
              laboriosam, debitis, magni consectetur cum! Cumque, optio corporis
              dolore quas omnis nam quia at velit et autem sit consequuntur.
              Rerum molestias cupiditate minima provident consequuntur, unde
              voluptatibus, perspiciatis officiis cumque illum inventore?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-[42px] flex items-center justify-center bg-gray-300">
              İncele
            </div>
          </div>
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4745ba78d0224d8db0d369f3eae7a7cb_9366/Gazelle_Ayakkabi_Kirmizi_IG6213_01_standard.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
