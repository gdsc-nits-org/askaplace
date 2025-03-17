import React from "react";

const DecorativeLine = () => {
  return (
    <div className=" relative flex justify-center items-center mt-2 mb-2">

      <div className="w-2 h-2 bg-white square rotate-45 absolute left-0"></div>

      <div className="w-full border-t border-white"></div>

      <div className="w-2 h-2 bg-white square rotate-45 absolute right-0"></div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="relative bg-green-500 text-white py-6 px-10 rounded-t-[50%] flex flex-col justify-end items-center">
      <div className="absolute -top-20 right-28 w-48 h-48 rounded-full overflow-hidden shadow-lg">
        <img
          src="/footer.jpeg"
          alt="Hikers"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex justify-start items-center px-40 mt-10">
        
        <div className="text-left">
          <p className="font-bold">CONNECT US:</p>
          <div className="flex space-x-3 my-2">
            <i className="fab fa-instagram text-xl"></i>
            <i className="fab fa-facebook text-xl"></i>
            <i className="fab fa-twitter text-xl"></i>
            <i className="fab fa-linkedin text-xl"></i>
          </div>
          <p className="font-bold">CONTACT US</p>
          <p>abcd.efg@gmail.com</p>
        </div>
      </div>

      
      <div className="text-center w-full font-poppins text-sm mt-4">
        <p>
          Made By <span className="font-bold">GDG</span> On Campus NIT Silchar
        </p>
        <div className="mx-auto">
          <DecorativeLine />
        </div>
        <p>&copy;Copyright 2025 | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;