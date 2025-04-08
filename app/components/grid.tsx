import React from "react";

function Grid() {
  return (
    <div className="w-full max-w-[1350px] mx-auto p-0">
      {/* Mobile Layout (List of Images) */}
      <div className="flex flex-col md:hidden overflow-hidden">
        <img
          className="w-full h-auto mb-4 transform transition-transform duration-300 hover:scale-105 z-10"
          src="https://images.pexels.com/photos/3037435/pexels-photo-3037435.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 1"
        />
        <img
          className="w-full h-auto mb-4 transform transition-transform duration-300 hover:scale-105 z-10"
          src="https://images.pexels.com/photos/2416419/pexels-photo-2416419.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 2"
        />
        <img
          className="w-full h-auto mb-4 transform transition-transform duration-300 hover:scale-105 z-10"
          src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 3"
        />
      </div>

      {/* Desktop Layout (Original Grid) */}
      <div className="hidden md:block w-[1350px] h-[508.80px] relative ml-20">
        <div className="w-[1350px] h-[508.80px] left-0 top-0 absolute">
          <div className="w-[1145px] h-[508.80px] left-0 top-0 absolute bg-white" />
          <div className="relative group">
            <img
              className="w-56 h-80 left-0 top-[10.40px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-115"
              src="https://images.pexels.com/photos/3037435/pexels-photo-3037435.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 1"
            />
          </div>
          <div className="relative group">
            <img
              className="w-96 h-64 left-[253.60px] top-[10.40px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-115"
              src="https://images.pexels.com/photos/2416419/pexels-photo-2416419.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 2"
            />
          </div>
          <div className="relative group">
            <img
              className="w-72 h-48 left-[251.20px] top-[304.80px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-115"
              src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 3"
            />
          </div>
          <div className="relative group">
            <img
              className="w-56 h-40 left-0 top-[341.60px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-115"
              src="https://images.pexels.com/photos/4448859/pexels-photo-4448859.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 4"
            />
          </div>
          <div className="relative group">
            <img
              className="w-80 h-[488px] left-[820.80px] top-[10.40px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-115"
              src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 5"
            />
          </div>
          <div className="relative group">
            <img
              className="w-56 h-48 left-[557.60px] top-[304.80px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-115"
              src="https://images.pexels.com/photos/4652276/pexels-photo-4652276.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 6"
            />
          </div>
          <div className="relative group">
            <img
              className="w-40 h-64 left-[638.40px] top-[10.40px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-115"
              src="https://images.pexels.com/photos/2884864/pexels-photo-2884864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Image 7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;