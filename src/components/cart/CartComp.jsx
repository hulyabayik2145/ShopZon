/* eslint-disable no-undef */
import React from "react";
import { removeFromCart } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className=" w-[476px] text-xl font-bold">
        <div>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-xl">
        {cart?.price}TL {cart?.quantity} adet
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[150px]  cursor-pointer rounded-md text-xl h-16 flex items-center justify-center"
      >
        Ürünü sil
      </div>
    </div>
  );
};

export default CartComp;
