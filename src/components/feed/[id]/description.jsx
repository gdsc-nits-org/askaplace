import ViewMoreButton from "../../components/viewMorebutton";
import DescriptionContent from "../../components/description";
import Card from "../../components/card";
import Map from "../../components/map";
import BudgetAnalysis from "../../components/budgetAnalysis";
import dots from "../../../public/assets/dots.jpg";
import Image from "next/image";

export default function Page({ params }) {
  const { id } = params; 

  return (
    <div>

      <h1 className="text-6xl p-0 font-bold m-40 my-5 sm-m-20">{id}</h1>
      <Image
        src={dots}
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