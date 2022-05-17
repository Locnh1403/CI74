import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <p>Name : {product.title}</p>
      <p>Price : {product.price}</p>
      <p>Category : {product.category}</p>
      <p>Rate : {product.rating.rate}</p>
    </div>
  );
};

export default Product;
