'use client';
import React from 'react'
import Image from "next/image";
function Hero() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-blue-500 bg-[url(https://s3-alpha-sig.figma.com/img/43ac/2e20/d0aab18d1c1468eb9476074402cd5837?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DmFvn5TSfr1YG9XjCEn7lGSOI4xx8YEYQisSCJqJ-NZTYCm7GhNvgnF~Du0Hs1fN-e4x5KYPFgg6KJ9nDwvNSYaWZE7tDn0wZeBr7HmZC6A86JjsBgxgoAwDxSFldJc9llDr07weAQDY12hjVnw~tPeGiFBag~XgMZoruTQlgAUNBgEZPPvqCAmuLN~KReCGmC-4tOQlD0vWKVpWGPS0qSm8cMvHMOKPj2-QMpwhcoX68ECJx1XBN9WEo~XEUkt6dqYsta9Z-oGt4hQGqAOwo9Eo4wdZP4Ue6tzS~2v1Cukj2qhWTBsSeksKps3y9Kqxk~qkr5Ne7BQWV4ZzhWLvSg__)] bg-cover bg-center inset-0 overflow-hidden">
       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-600"></div>
      <div className="z-10 flex flex-col items-start justify-start h-auto w-screen text-white pl-8 sm:pl-12 md:pl-20 lg:pl-40 gap-2">
          <span className=" text-4xl lg:text-6xl sm:text-5xl md:text-5xl font-bold text-left">
             ENJOY
          </span>
          <span className=" text-4xl lg:text-6xl sm:text-5xl md:text-5xl font-bold text-left">
            <span className=" text-primary ">WONDERFUL</span> FEELING
          </span>
          <p className="text-lg lg:text-2xl sm:text-lg md:text-2xl text-left max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat dignissimos quos voluptatum quas vitae fugiat, nisi rerum recusandae quia, corporis earum facere minima, error velit sunt sed animi. Id.</p>
          <button className="w-auto h-[45px] md:h-[50px] lg:h-[50px] mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 flex items-center justify-center text-white rounded-full gap-2">
            <span className="text-base md:text-base lg:text-lg font-semibold">
              Read More
            </span>
            <span className="w-7 md:w-8 lg:w-8 h-7 md:h-8 lg:h-8 flex items-center justify-center bg-green-700 rounded-full border-2 border-white">
                <svg className="w-4 md:w-4 lg:w-4  h-4 md:h-4 lg:h-4 text-white fill-none stroke-current stroke-2 " viewBox="0 0 24 24">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
                 </svg>
            </span>
          </button>
      </div>
     
    </div>
  );
}

export default Hero;
