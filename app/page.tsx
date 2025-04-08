import Navbar from "./components/navbar";
import ViewMoreButton from "./components/viewMorebutton"; // Import the client component
import Description from "./components/description";
import Card from "./components/card";
import Map from "./components/map";
import BudgetAnalysis from "./components/budgetAnalysis";
import dots from "../public/assets/dots.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Navbar />
      <h1 className="text-6xl p-0 font-bold m-40 my-5 sm-m-20">Haflong</h1>
      <Image src={dots} alt="dots" className="absolute top-20 right-0 -z-10 h-[400px] w-[600px]"/>
      {/*  the client component is embedded here */}
      <ViewMoreButton />
      <Description/>
      <h1 className="text-5xl p-0 font-medium m-40 my-5 text-center">Top places to visit in Haflong</h1>
      <Card/>
      <Card/>
      <Card/>
      <Map/>
      <h1 className="text-5xl p-0 font-medium m-40 my-5 text-center">Food and logding in Haflong</h1>
      <Card/>
      <Card/>
      <Card/>
      <BudgetAnalysis/>
    </div>
  );
}
