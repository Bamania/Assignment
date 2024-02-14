import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const result = data.products;
        setProductData(result);
        console.log(result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <Header/>
        <div className="items-end">
        
        </div>
        
<div className="flex flex-wrap justify-center bg-white py-5 gap-10">
      {productData.map((el) => (
        <Card image={el.images[0]} brand={el.brand} price={el.price} />
      ))}
    </div>
    </div>
    
    
  );
};

export default Products;