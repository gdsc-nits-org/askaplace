'use client'
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Budget from "./budget";


const App = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    travelMode: "",
  });

  const markers = [
    { id: 1, lat: 25.17, lng: 93.01, name: "Haflong"},
    { id: 2, lat: 28.61, lng: 77.23, name: "New Delhi" ,img:"/locate.png"},
    { id: 3, lat: 19.07, lng: 72.87, name: "Mumbai",img:"/gdgc.png" },
    { id: 4, lat: 13.08, lng: 80.27, name: "Chennai" ,img:"/locate.png"},
  ];

  const[mapCenter,setMapCenter]=useState<[number,number]>([25.17,93.01]);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <div className="bg-green-500 flex flex-col items-center py-10">
      <h1 className="text-white text-3xl mb-2">How can you Reach Haflong?</h1>
      <p className="text-black text-2xl mb-4">Plan your Trip</p>

      {/* Main Container */}
      <div className="flex flex-row justify-center w-full max-w-4xl gap-11 ">
        {/* Map Section */}
        <div className=" bg-white rounded-lg shadow-md w-96 h-80">
          <MapContainer center={[25.17, 93.01]} zoom={5} className="h-full w-full rounded-lg">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker) => (
              <Marker key={marker.id} position={[marker.lat, marker.lng]}>
                <Popup>{marker.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Form Section */}
        <div className="w-96 h-80 px-4 mt-4 md:mt-0 bg-white p-6 rounded-lg flex flex-col justify-center items-center shadow-md">
          <input
            type="text"
            name="from"
            placeholder="From"
            value={formData.from}
            onChange={handleChange}
            className="w-full p-2 border px-6 rounded-[50px] mb-3"
          />
          <input
            type="text"
            name="to"
            placeholder="To"
            value={formData.to}
            onChange={handleChange}
            className="w-full p-2 border px-6 rounded-[50px] mb-3"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border px-6 rounded-[50px] mb-3"
          />

          <div className="flex justify-around items-center gap-4 mb-4">
          <p className="text-gray-600">Select Mode of Travel:</p>
          <div className="flex gap-6">
            <button
              onClick={() => setFormData({ ...formData, travelMode: "bus" })}
              className={`p-2 border rounded ${formData.travelMode === "bus" ? "bg-gray-300" : ""}`}
            >
              🚌
            </button>
            <button
              onClick={() => setFormData({ ...formData, travelMode: "train" })}
              className={`p-2 border rounded ${formData.travelMode === "train" ? "bg-gray-300" : ""}`}
            >
              🚆
            </button>
            <button
              onClick={() => setFormData({ ...formData, travelMode: "plane" })}
              className={`p-2 border rounded ${formData.travelMode === "plane" ? "bg-gray-300" : ""}`}
            >
              ✈️
            </button>
          </div>
          </div>

          <button className="w-[168px] h-[40px] bg-green-500 text-black py-2 rounded-[50px]">
            Show Route
          </button>
        </div>
      </div>
    </div>
    <Budget/>
    </div>
  );
};

export default App;