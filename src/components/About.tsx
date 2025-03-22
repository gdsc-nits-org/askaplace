'use client';
import React from 'react'
import Image from "next/image";
function About() {
  return (
    <div className=" relative flex justify-center items-center w-screen h-screen bg-blue-500 bg-[url(/beach.jpeg)] bg-cover bg-center inset-0 overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-gray-600"></div>
       
       <div className="flex flex-col justify-center items-center gap-1 lg:gap10 md:gap-10 w-full h-auto">
          <div className="flex flex-col justify-center items-center w-full h-auto ">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-semibold ">
              ABOUT <span className="text-green-500">US</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl md:text-xl text-white text-center p-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus erat at vestibulum efficitur Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque ad saepe porro. Necessitatibus laborum vitae reiciendis modi explicabo! Quam, asperiores! Adipisci, praesentium. Alias illo consequuntur itaque fugit aliquam numquam..
            </p>
          </div>
          <div className="flex flex-col justify-center lg:flex-row  md:flex-row max-h-[300px] overflow-y-auto overflow-hidden pt-[380px] lg:pt-0 md:pt-0 w-auto gap-3">
              <div className="flex flex-col justify-center bg-gray-700 bg-opacity-30 items-center text-center  w-[300px] md:w-[350px] lg:w-[350px] h-[280px] lg:h-[300px] md:h-[300px]  p-3 rounded-[1rem] border-2 border-white border-opacity-70 ">
                <div className="mb-4 flex h-[160px] w-3/4 bg-white items-center justify-center rounded-[1rem] bg-[url(/map.png)] bg-cover bg-center overflow-hidden ">
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-green-300">Worldwide connected</h3>
                <p className="text-sm sm:text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="flex flex-col justify-center bg-gray-700 bg-opacity-30 items-center text-center  w-[300px] md:w-[350px] lg:w-[350px] h-[280px] lg:h-[300px] md:h-[300px]  p-3 rounded-[1rem] border-2 border-white border-opacity-70 ">
                <div className="mb-4 flex h-[160px] w-3/4 bg-white items-center justify-center rounded-[1rem] bg-[url(/location.png)] bg-cover bg-center overflow-hidden ">
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-green-300">Choose Locations</h3>
                <p className="text-sm sm:text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="flex flex-col justify-center bg-gray-700 bg-opacity-30 items-center text-center  w-[300px] md:w-[350px] lg:w-[350px] h-[280px] lg:h-[300px] md:h-[300px]  p-3 rounded-[1rem] border-2 border-white border-opacity-70">
                <div className="mb-4 flex h-[160px] w-3/4 bg-white items-center justify-center rounded-[1rem] bg-[url(/globe.png)] bg-cover bg-center overflow-hidden ">
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-green-300">Enjoy Destinations</h3>
                <p className="text-sm sm:text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About
