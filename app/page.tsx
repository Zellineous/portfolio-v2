import Hero from "@/components/Hero";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className = "relative bg-black-100 flex justify-center items-center flex-col oberflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Projects />
        <About/>
        <Footer />
      </div>
    </main>
  );
}
