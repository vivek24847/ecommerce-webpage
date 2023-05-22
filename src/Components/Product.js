import React from "react";
import { useEffect } from "react";

import { setProduct } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
  const { value, filterData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchData = () => {
    return fetch("data.json")
      .then((response) => response.json())
      .then((data) => dispatch(setProduct(data)));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="outerBox">
      <div className="shopping-cart">
        {(filterData?.length > 0 ? filterData : value)?.map((product) => (
          <div className="main" key={product.id}>
            <img src={product.img} alt="printer"></img> <p> {product.name}</p>
            <h6>{product.rating}</h6>
            <h5>{product.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
