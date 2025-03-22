import Link from "next/link";
import Hero from "../components/Hero";
import About from "../components/About";
import Destination from "../components/Destination";
export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Hero />
      <About />
      <Destination />
    </div>
  );
}
