"use client"
import ViewMoreButton from "@/src/components/description_components/viewMorebutton";
import DescriptionContent from "@/src/components/description_components/description";
import Card from "@/src/components/description_components/card";
import Map from "@/src/components/description_components/map";
import BudgetAnalysis from "@/src/components/description_components/budgetAnalysis";
import Image from "next/image";
import { useParams } from 'next/navigation';


export default function Page() {

  const { id } =  useParams(); 

  return (
    <div>

      <h1 className="text-6xl p-0 font-bold m-40 my-5 sm-m-20">{id}</h1>
      <Image
        src={"/assets/dots.jpg"}
        width={1920} 
        height={400}
        alt="dots"
        className="absolute top-20 right-0 -z-10 h-[400px] w-[600px]"
      />
      {/* The client component is embedded here */}
      <ViewMoreButton />
      <DescriptionContent />
      <h1 className="text-5xl p-0 font-medium m-40 my-5 text-center">
        Top places to visit in {id}
      </h1>
      <Card />
      <Card />
      <Card />
      <Map />
      <h1 className="text-5xl p-0 font-medium m-40 my-5 text-center">
        Food and lodging in {id}
      </h1>
      <Card />
      <Card />
      <Card />
      <BudgetAnalysis />
    </div>
  );
}