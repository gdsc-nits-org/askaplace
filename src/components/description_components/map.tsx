import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faTrainSubway } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

function map({ placeName = "Haflong" }) {
  return (
    <div className="w-full h-auto my-10 mx-auto p-5 bg-green-500 text-white overflow-hidden">
      <h1 className="text-4xl font-bold text-center my-0 py-5">
        How can you reach {placeName}?
      </h1>
      <h4 className="text-2xl font-bold text-black text-center pb-10">
        Plan your Trip
      </h4>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {/* First Section */}
        <div className="h-[400px] w-full md:w-[500px] bg-white mx-4 rounded-3xl"></div>

        {/* Second Section */}
        <div className="h-[400px] w-full md:w-[500px] bg-white mx-4 rounded-3xl flex flex-col justify-center items-center gap-4">
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
          <div className="flex flex-row items-center gap-4">
            <label htmlFor="list" className="text-black font-bold">
              Select the mode of Travel:
            </label>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <FontAwesomeIcon
                height={30}
                width={30}
                icon={faPlane}
                style={{ color: 'blue' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <FontAwesomeIcon
                height={30}
                width={30}
                icon={faTrainSubway}
                style={{ color: 'green' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <FontAwesomeIcon
                height={30}
                width={30}
                icon={faBus}
                style={{ color: 'red' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default map;
