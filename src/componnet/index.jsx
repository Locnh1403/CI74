import React, { useEffect, useState } from "react";
import Product from "./product";

const Ex = () => {
  const [item, setItem] = useState(null);

  const fetchItem = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    setItem(resData);
  };

  const handleMoreThan60 = () => {
    setItem(item.filter((p) => p.price >= 60));
  };

  const handleMoreThan4 = () => {
    setItem(item.filter((p) => p.rating.rate >= 4));
  };

  const handleJewelery = () => {
    setItem(item.filter((p) => p.category === "jewelery"));
  };

  return (
    <div>
      <button onClick={fetchItem}>Show All</button>
      <button onClick={handleMoreThan60}>More than $60</button>
      <button onClick={handleMoreThan4}>More than 4 rate</button>
      <button onClick={handleJewelery}>Jewelery</button>
      {item && item.map((i, index) => <Product key={index} product={i} />)}
    </div>
  );
};

export default Ex;
