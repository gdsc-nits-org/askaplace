import React from 'react';

const hotelCost = 0;
const foodCost = 0;
const travelCost = 0;
const visitingCost = 0;
const extraCost = 0;
let total = 0;

function add() {
  total = hotelCost + foodCost + travelCost + visitingCost + extraCost;
}

function budgetAnalysis() {
  return (
    <div className="w-full h-auto my-10 mx-auto p-5 bg-green-500 text-white">
      <h1 className="text-4xl font-bold text-center my-0 py-5">Budget Analysis</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {/* First Section */}
        <div className="h-auto w-full md:w-[500px] bg-white mx-4 rounded-3xl flex flex-col justify-center items-center gap-4 p-4">
          <input
            type="text"
            placeholder="From"
            className="border border-black rounded-xl p-3 w-[90%] text-black"
          />
          <input
            type="text"
            placeholder="To"
            className="border border-black rounded-xl p-3 w-[90%] text-black"
          />
          <input
            type="date"
            className="border border-black rounded-xl p-3 w-[90%] text-black"
          />
          <div className="flex flex-row justify-evenly py-5 w-full">
            <label htmlFor="radio" className="text-black font-bold">
              Select Agent of Travel:
            </label>
            <div className="flex items-center gap-2">
              <input type="radio" id="self" name="agent" />
              <label htmlFor="self" className="text-black px-2">
                Self
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="rent" name="agent" />
              <label htmlFor="rent" className="text-black px-2">
                Rent
              </label>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="h-auto w-full md:w-[500px] text-black bg-white mx-4 rounded-3xl flex flex-col justify-evenly p-4">
          <div className="flex flex-col justify-evenly gap-4 font-bold">
            <h5 className="pb-1">Hotel Cost: {hotelCost}</h5>
            <h5 className="py-2">Food Cost: {foodCost}</h5>
            <h5 className="py-2">Travel Cost: {travelCost}</h5>
            <h5 className="py-2">Visiting Cost: {visitingCost}</h5>
            <h5 className="py-2">Extra Cost: {extraCost}</h5>
            <hr />
            <h5 className="py-2">Total: {total}</h5>
            <button
              className="bg-green-300 w-40 rounded-xl my-5 mx-auto"
            >
              Estimate Cost
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default budgetAnalysis;
