'use client';
import React from 'react'
import Image from "next/image";
function Hero() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-blue-500 bg-[url(https://s3-alpha-sig.figma.com/img/43ac/2e20/d0aab18d1c1468eb9476074402cd5837?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DmFvn5TSfr1YG9XjCEn7lGSOI4xx8YEYQisSCJqJ-NZTYCm7GhNvgnF~Du0Hs1fN-e4x5KYPFgg6KJ9nDwvNSYaWZE7tDn0wZeBr7HmZC6A86JjsBgxgoAwDxSFldJc9llDr07weAQDY12hjVnw~tPeGiFBag~XgMZoruTQlgAUNBgEZPPvqCAmuLN~KReCGmC-4tOQlD0vWKVpWGPS0qSm8cMvHMOKPj2-QMpwhcoX68ECJx1XBN9WEo~XEUkt6dqYsta9Z-oGt4hQGqAOwo9Eo4wdZP4Ue6tzS~2v1Cukj2qhWTBsSeksKps3y9Kqxk~qkr5Ne7BQWV4ZzhWLvSg__)] bg-cover bg-center inset-0 overflow-hidden">
     
      <div className="z-10 flex flex-col items-center justify-center h-auto text-white">
          <span className="text-6xl font-bold ">
             Enjoy
          </span>
          <span className="text-6xl font-bold">
            <span className=" text-green-400">Wonderful</span> Feeling
          </span>
          <p className="text-lg text-center max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat dignissimos quos voluptatum quas vitae fugiat, nisi rerum recusandae quia, corporis earum facere minima, error velit sunt sed animi. Id.</p>
          <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
            Read More
          </button>
      </div>
     
    </div>
  );
}

export default Hero;
