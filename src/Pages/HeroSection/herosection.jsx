import { useEffect, useRef, useState } from "react";
import ImageSM from "./images/image-sm.jpg";
import ImageLG from "./images/image-lg.png";
import "./herosection.css";

export default function Herosection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const heroImg = useRef(null);
  const heroText = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const hero = heroImg.current;
    const text = heroText.current;

    // Add a delay of 300ms before adding the animate class
    const timeoutHero = setTimeout(() => {
      hero.style.transform = "scale(1.1)";
    }, 300);

    const timeoutText = setTimeout(() => {
      text.style.bottom = "20px";
      text.style.opacity = "100";
    }, 600);

    // Clean up function to clear the timeout
    return () => {
      clearTimeout(timeoutHero);
      clearTimeout(timeoutText);
    };
  }, []);

  return (
    <div className="hero relative overflow-hidden w-full h-[500px] bg-gray-500">
      {windowWidth >= 1024 ? (
        <img
          src={ImageLG}
          alt="shoes"
          ref={heroImg}
          className="firstLoad w-full opacity-90"
        />
      ) : (
        <img
          src={ImageSM}
          alt="shoes"
          ref={heroImg}
          className="firstLoad w-full opacity-90"
        />
      )}
      <div className="hero-text absolute right-5 lg:right-16" ref={heroText}>
        <div className="flex justify-end">
          <h1 className="text-xl font-bold text-white mb-3 lg:text-2xl">MAKE AN IMPACT</h1>
        </div>
        <h2 className="text-3xl font-bold text-white lg:text-5xl">BIG, BEAUTIFUL IMAGERY</h2>
        <div className="flex justify-end lg:absolute lg:right-[150px]">
          <div className="button">
            <button className="btn block relative z-10">SHOP NOW</button>
            <div className="background"></div>
          </div>
        </div>
        <div className="flex justify-end mb-3 lg:mb-10">
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
