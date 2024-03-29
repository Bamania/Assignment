import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-4xl p-5 ">Products</h1>

      <input
        type="text"
        placeholder="Search"
        className="w-[50%] h-[30] m-5 p-2 border border-gray-400 rounded-full"
      />

      <button className=" rounded-full p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <h6>0</h6>
      </button>
      <button className="border border-green-900 mr-10 p-2 rounded-xl">Logout</button>
    </div>
  );
};

export default Header;