import { useEffect, useRef } from "react";
import Shoes from "./images/hero.jpg"
import "./herosection.css";

export default function Herosection() {
  const heroImg = useRef(null);
  const heroText = useRef(null)

  useEffect(() => {
    const hero = heroImg.current;
    const text = heroText.current

    // Add a delay of 300ms before adding the animate class
    const timeoutHero = setTimeout(() => {
      hero.style.transform = 'scale(1)'
    }, 300);

    const timeoutText = setTimeout(() => {
      text.style.bottom = "20px"
      text.style.opacity = "100"
    }, 600)

    // Clean up function to clear the timeout
    return () => {
      clearTimeout(timeoutHero);
      clearTimeout(timeoutText);
    };
  }, []);

  return (
    <div className="hero relative overflow-hidden w-full h-[500px] bg-gray-500">
      <img
        src={Shoes}
        alt="shoes"
        ref={heroImg}
        className="firstLoad w-full opacity-70"
      />
      <div className="hero-text absolute right-5" ref={heroText}>
        <div className="flex justify-end">
          <h1 className="text-xl font-bold text-white mb-3">MAKE AN IMPACT</h1>
        </div>
        <h2 className="text-3xl font-bold text-white">BIG, BEAUTIFUL IMAGERY</h2>
        <div className="flex justify-end">
          <div className="button">
            <button className="btn block relative z-10">SHOP NOW</button>
            <div className="background"></div>
          </div>
        </div>
        <div className="flex justify-end mb-3">
          <div className="button text-white hover:text-black transition duration-300 ease-in-out flex justify-center">
            <button className="block relative z-10">SHOP ALL</button>
            <div className="bg-right"></div>
            <div className="bg-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
