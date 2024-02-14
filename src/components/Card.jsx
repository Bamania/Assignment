import React, { useState } from "react";

const Card = ({image,brand,price}) => {
    
  return (
    <div className="flex flex-col border w-[20%] justify-center items-center border-black rounded-xl">
      <img
        src={image}
        alt=""
        className="m-4 w-40 h-40 rounded-full  shadow-2xl"
      />
      <h1 className="font-bold text-xl">{brand}</h1>
      <h1 className="text-gray-500">{price}</h1>
      <button className="border border-gray-400 rounded-full p-2 m-2 text-gray-500">Add to Shopping Cart</button>
    </div>
  );
};

export default Card;