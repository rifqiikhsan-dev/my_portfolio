import { Portfolio } from "./sections/Portfolio/Portfolio";
import { About } from "./sections/About/About";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Navbar } from "./sections/Navbar";

export const WebPortfolio = (): JSX.Element => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-[#121212] flex flex-col items-center w-full relative">
      <img
        className="absolute w-[70%] max-w-[748px] h-auto top-[69px] left-0 z-0 opacity-20 pointer-events-none"
        alt="Vector"
        src="/vector.svg"
      />

      <Navbar />

      <div className="overflow-hidden flex flex-col items-center gap-10 sm:gap-28 md:gap-24 lg:gap-[150px] relative z-10 pt-[20px] sm:pt-[20px]">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};
