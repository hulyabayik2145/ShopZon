import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/cardSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCard({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-cover p-10"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="font-bold text-2xl border-b rounded-md hover:bg-gray-200">
          {productDetail?.title}
        </div>
        <div className="mt-10 text-xl">{productDetail.description}</div>
        <div className="my-5 text-xl text-red-500 font-bold relative">
          Rating : {productDetail.rating?.rate}
        </div>
        <div className="my-5 text-xl text-red-500 font-bold relative">
          Count : {productDetail.rating?.count}
        </div>
        <div className=" my-5 text-xl font-bold">
          Fiyat : {productDetail.price}
          <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-10 text-center text-xl font-bold "
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border text-2xl rounded-md ng-gray-200 cursor-pointer my-2 w-[200px] h-16 flex items-center justify-center"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
