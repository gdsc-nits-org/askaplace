import React, { useState } from "react";
import ReviewsList from "./review";

const Budget = () => {
  const [formData, setFormData] = useState({
    hotel: "",
    days: "",
    date: "",
    travelAgent: "self",
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Estimating Cost for:", formData);
  };

  return (
    <div>
    <div className="bg-white">
        <h2 className="text-center py-10 text-3xl text-green-600 mb-4">
          Budget Friendly Analysis
        </h2>
        <div className="flex flex-row justify-center m-4 items-center gap-11">
            <div className="p-6 gap-4 rounded-lg shadow-lg w-96">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4">
            {/* Hotel Input */}
            <input
            type="text"
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
            placeholder="Hotel"
            className="w-full p-2 border px-4 border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-green-400"
            />

          {/* Days Input */}
          <input
            type="number"
            name="days"
            value={formData.days}
            onChange={handleChange}
            placeholder="Days"
            className="w-full p-2 border px-4 border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Date Input */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border px-4 border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Travel Agent Selection */}
          <div className="flex justify-between gap-11 items-center">
            <label className="text-gray-700">Select Agent of Travel:</label>
            <div className="flex items-center space-x-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="travelAgent"
                  value="self"
                  checked={formData.travelAgent === "self"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Self
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="travelAgent"
                  value="rent"
                  checked={formData.travelAgent === "rent"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Rent
              </label>
            </div>
          </div>

          {/* Estimate Cost Button */}
          <button
            type="submit"
            className="w-[192px] h-[40px] bg-green-500 text-black py-2 rounded-[50px] hover:bg-green-600 transition"
          >
            Estimate Cost
          </button>
         </form>
        </div>

        {/* Cost Details */}
        <div className="flex flex-col gap-2 text-gray-700">
          <p>Hotel Cost:</p>
          <p>Food Cost:</p>
          <p>Travel Cost:</p>
          <p>Visiting Cost:</p>
          <p>Extra Cost:</p>
        </div>
      </div>
    </div>
    <ReviewsList/>
    </div>
  );
};

export default Budget;