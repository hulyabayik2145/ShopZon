/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories, "category");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-1/8 bg-gray-100 p-4 max-h-screen ">
      <div className="border-b pb-1 text-xl px-2 font-bold">KATEGORİ</div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg cursor-pointer p-2 hover:bg-gray-200"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
