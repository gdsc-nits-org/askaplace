import React, { useEffect, useState } from "react";
import axios from "axios";

const defaultImages = [
  "/assets/descAssets/img1.png",
  "/assets/descAssets/img2.png",
  "/assets/descAssets/img3.png",
  "/assets/descAssets/img4.png",
  "/assets/descAssets/img5.png",
  "/assets/descAssets/img6.png",
  "/assets/descAssets/img7.png",
];

function Grid() {
  const [images, setImages] = useState(defaultImages);

  useEffect(() => {
    axios
      .get("https://askaplace-api-3.onrender.com/place/")
      .then((res) => {
        if (
          res.data &&
          res.data.length > 0 &&
          Array.isArray(res.data[0].photos)
        ) {
          // Ensure exactly 7 images, fill missing with defaults
          const backendImages = res.data[0].photos.slice(0, 7);
          const filledImages = defaultImages.map(
            (img, idx) => backendImages[idx] || img
          );
          setImages(filledImages);
        } else {
          setImages(defaultImages);
        }
      })
      .catch(() => {
        setImages(defaultImages);
      });
  }, []);

  return (
    <div className="w-full max-w-[1350px] mx-auto p-0">
      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden overflow-hidden">
        {images.slice(0, 3).map((src, idx) => (
          <img
            key={idx}
            className="w-full h-auto mb-4 transform transition-transform duration-300 hover:scale-105 z-10"
            src={src}
            alt={`Image ${idx + 1}`}
          />
        ))}
      </div>
      {/* Desktop Layout */}
      <div className="hidden md:block w-[1350px] h-[508.80px] relative ml-20">
        <div className="w-[1350px] h-[508.80px] left-0 top-0 absolute">
          <div className="w-[1145px] h-[508.80px] left-0 top-0 absolute bg-white" />
          <div className="relative group">
            <img className="w-56 h-80 left-0 top-[10.40px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-110" src={images[0]} alt="Image 1" />
          </div>
          <div className="relative group">
            <img className="w-84 h-64 left-[253.60px] top-[10.40px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-110" src={images[2]} alt="Image 3" />
          </div>
          <div className="relative group">
            <img className="w-72 h-48 left-[251.20px] top-[304.80px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-110" src={images[3]} alt="Image 4" />
          </div>
          <div className="relative group">
            <img className="w-56 h-40 left-0 top-[341.60px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-110" src={images[1]} alt="Image 2" />
          </div>
          <div className="relative group">
            <img className="w-80 h-[488px] left-[820.80px] top-[10.40px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-110" src={images[6]} alt="Image 7" />
          </div>
          <div className="relative group">
            <img className="w-56 h-48 left-[557.60px] top-[304.80px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-110" src={images[5]} alt="Image 6" />
          </div>
          <div className="relative group">
            <img className="w-45 h-64 left-[638.40px] top-[10.40px] absolute transform transition-transform duration-300 group-hover:z-50 hover:scale-110" src={images[4]} alt="Image 5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;