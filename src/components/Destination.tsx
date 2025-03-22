'use client';
import React from 'react';

function Destination() {
  return (
    <div className=" relative flex justify-center items-center w-screen h-screen bg-blue-500 bg-[url(/destination.jpeg)] bg-cover bg-center inset-0 overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-gray-500"></div>

       <div className="flex flex-col justify-center items-center gap-1 lg:gap10 md:gap-10 w-full h-auto">
          <div className="flex flex-col justify-center items-center w-full h-auto ">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-semibold ">
              AWESOME <span className="text-green-500">DESTINATIONS</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl md:text-xl text-white text-center p-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus erat at vestibulum efficitur Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque ad saepe porro. Necessitatibus laborum vitae reiciendis modi explicabo! Quam, asperiores! Adipisci, praesentium. Alias illo consequuntur itaque fugit aliquam numquam..
            </p>
          </div>
          <div className="flex flex-col justify-center lg:flex-row  md:flex-row max-h-[300px] overflow-y-auto overflow-hidden pt-[0px] lg:pt-0 md:pt-0 w-auto gap-3">
              <div className="relative w-[300px] md:w-[350px] lg:w-[350px] h-[280px] lg:h-[300px] md:h-[300px]  p-3 rounded-[1rem] border-2 border-white border-opacity-70 bg-[url(/destination1.jpeg)] bg-cover bg-center inset-0 overflow-hidden ">
              </div>

              <div className="relative w-[300px] md:w-[350px] lg:w-[350px] h-[280px] lg:h-[300px] md:h-[300px]  p-3 rounded-[1rem] border-2 border-white border-opacity-70 bg-[url(/destination2.jpeg)] bg-cover bg-center inset-0 overflow-hidden ">
              </div>

              <div className="relative w-[300px] md:w-[350px] lg:w-[350px] h-[280px] lg:h-[300px] md:h-[300px]  p-3 rounded-[1rem] border-2 border-white border-opacity-70 bg-[url(/destination3.jpeg)] bg-cover bg-center inset-0 overflow-hidden ">
              </div>
            </div>
        </div>
    </div>
  );
}

export default Destination;
