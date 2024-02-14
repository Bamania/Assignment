import React, { useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom'






const Login = () => {

  const navigate=useNavigate()


  

 

  
    const fetchUserData = async (username,password) => {
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username:username,
            password:password,
            // username: 'kminchelle',
            // password: '0lelplR',
            // expiresInMins: 60, // optional
          })
        })
        const data = await response.json();
        console.log(data);
        console.log(data.token)
       

        if(data.token){

          navigate("/products")
        } else  {

          alert("error occured")
        }

        // setUserData(user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      fetchUserData(username, password);
    };




  return (
    // <div className="flex justify-center items-center inset-0 backdrop-filter backdrop-blur-sm  w-[25rem] relative h-[308px]">
    <div className=""> 
    <div className="flex flex-col gap-8 border justify-center items-center border-gray-300 w-[25rem]  absolute p-5 rounded-xl  z-10">
      <h1 className="text-4xl text-white font-bold">Welcome</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="User Name"
        className="border-b border-gray-200 p-2 w-[80%] bg-transparent focus:outline-none focus:ring-0 text-white text-[18px]"
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        className="border-b border-gray-200 p-2 w-[80%] bg-transparent focus:outline-none focus:ring-0 text-white text-[18px]"
      />

      <button
      
        type="submit"
        className="text-xl border border-black w-[20%] rounded-full px-[20%] py-[1%]  flex justify-center text-white  bg-[#0F3B60]"
      >
        Login
      </button>
      </form>
    </div>
 
  </div>
  );
};

export default Login;







