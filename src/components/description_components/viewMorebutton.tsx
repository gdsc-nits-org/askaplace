'use client';

import React, { useState } from "react";
import Grid from "./grid";

export default function ViewMoreButton() {
  const [gridCount, setGridCount] = useState(1);
  const [isViewMore, setIsViewMore] = useState(true);

  const handleToggleView = () => {
    if (isViewMore) {
      setGridCount((prevCount) => prevCount + 1);
    } else {
      setGridCount((prevCount) => prevCount - 1);
    }
    setIsViewMore((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center">
      {Array.from({ length: gridCount }).map((_, index) => (
        <Grid key={index} />
      ))}

      <button
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full mt-6"
        onClick={handleToggleView}
      >
        {isViewMore ? "View More" : "View Less"}
      </button>
    </div>
  );
}