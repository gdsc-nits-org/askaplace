import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const DecorativeLine = () => {
  return (
    <div className="relative flex justify-center items-center mt-2 mb-2">
      <div className="w-2 h-2 bg-white square rotate-45 absolute left-0"></div>
      <div className="w-full border-t border-white"></div>
      <div className="w-2 h-2 bg-white square rotate-45 absolute right-0"></div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Move the Image Outside the Footer */}
      
      <div
        className="absolute -top-20 right-28 w-48 h-48 rounded-full overflow-hidden shadow-lg hidden md:block"
        style={{ zIndex: 50 }}
      >
        <img
          src="/footer.jpeg"
          alt="Hikers"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer Section */}
      <div
        className="relative bg-green-500 w-full text-white py-10 flex flex-col justify-end items-center overflow-hidden"
        style={{
          clipPath: "ellipse(80% 100% at 50% 100%)",
          zIndex: 10, // Lower than the image
        }}
      >
        <div className="w-full flex justify-start items-center px-40 mt-10">
          <div className="text-left">
            <p className="font-bold">CONNECT US:</p>
            <div className="flex space-x-3 my-2">
              <FontAwesomeIcon icon={faInstagram} width={25} />
              <FontAwesomeIcon icon={faFacebook} width={25} />
              <FontAwesomeIcon icon={faTwitter} width={25} />
              <FontAwesomeIcon icon={faLinkedin} width={25} />
            </div>
            <p className="font-bold">CONTACT US</p>
            <p>abcd.efg@gmail.com</p>
          </div>
        </div>

        <div className="relative text-center text-sm mb-1">
          <p>
            Made By <span className="font-bold">GDG</span> On Campus NIT Silchar
        
          <img
            src="/gdgc.png"
            className="absolute h-[29px] w-[65px] top-[-5px] left-[240px] "
          />
        </p>
        </div>

        <div className="w-[1330px] mx-auto">
          <DecorativeLine />
        </div>

        <div className="text-center text-sm mt-1">
          <p>&copy;Copyright 2025 | All Rights Reserved</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;