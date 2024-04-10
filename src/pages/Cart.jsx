import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { getCartTotal } from "../redux/cardSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(
    carts,
    totalAmount,
    itemCount,
    location,
    getCartTotal,

    "cartcneredefxbxcvs"
  );
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl ">
            Toplam Tutar:
            <span className="font-bold ml-2">{totalAmount}TL</span>
          </div>
        </div>
      ) : (
        <div>Sepetiniz Boş</div>
      )}
    </div>
  );
};

export default Cart;
