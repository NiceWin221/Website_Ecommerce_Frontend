import { useEffect, useRef, useState } from "react"
import Logo from "./images/geoff-max-logo.png"
import Hovered from "./hovered.jsx"
import "./header.css"

export default function Header() {
  const [navbarToggle, setNavbarToggle] = useState(true)
  const [delayed, setDelayed] = useState(true)
  const [delayed2, setDelayed2] = useState(true)
  const [delayed3, setDelayed3] = useState(true)
  const [delayed4, setDelayed4] = useState(true)
  const [delayed5, setDelayed5] = useState(true)
  const [delayed6, setDelayed6] = useState(true)
  const [delayed7, setDelayed7] = useState(true)
  const [timeouts, setTimeouts] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { delay1: delay1s, delay2: delay2s, delay3: delay3s, delay4: delay4s, ref: ref1, hovered: hovered1, handleMouseEnter: handleMouseEnter1, handleMouseLeave: handleMouseLeave1,
    ref2: ref2, hovered2: hovered2, delayed1: delayed1, delayed2: dileyed2, handleMouseEnter2: handleMouseEnter2, handleMouseLeave2: handleMouseLeave2,
    ref3: ref3, hovered3: hovered3, deley1: deley1, deley2: deley2, deley3: deley3, handleMouseEnter3: handleMouseEnter3, handleMouseLeave3: handleMouseLeave3
  } = Hovered();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const navbar = isMobile
    ? {
      zIndex: navbarToggle ? '0' : '20',
      left: navbarToggle ? '-100%' : '0',
      opacity: navbarToggle ? '0' : '100%',
      transition: navbarToggle ? '' : '0.4s ease-in-out',
    }
    : {};

  const delay = isMobile
    ? {
      left: delayed ? '-10%' : '0',
      opacity: delayed ? '0' : '100',
    }
    : {};
  const delay2 = isMobile
    ? {
      left: delayed2 ? '-10%' : '0',
      opacity: delayed2 ? '0' : '100',
    }
    : {}; // Default or desktop styles
  const delay3 = isMobile
    ? {
      left: delayed3 ? '-10%' : '0',
      opacity: delayed3 ? '0' : '100',
    }
    : {}; // Default or desktop styles
  const delay4 = isMobile
    ? {
      left: delayed4 ? '-10%' : '0',
      opacity: delayed4 ? '0' : '100',
    }
    : {}; // Default or desktop styles
  const delay5 = isMobile
    ? {
      left: delayed5 ? '-10%' : '0',
      opacity: delayed5 ? '0' : '100',
    }
    : {}; // Default or desktop styles
  const delay6 = isMobile
    ? {
      left: delayed6 ? '-10%' : '0',
      opacity: delayed6 ? '0' : '100',
    }
    : {}; // Default or desktop styles
  const delay7 = isMobile
    ? {
      left: delayed7 ? '-10%' : '0',
      opacity: delayed7 ? '0' : '100',
    }
    : {};


  const handleClick = () => {
    if (isMobile) {
      setNavbarToggle(!navbarToggle);
      const timeout1 = setTimeout(() => {
        setDelayed(!delayed);
      }, 200);
      const timeout2 = setTimeout(() => {
        setDelayed2(!delayed2);
      }, 340);
      const timeout3 = setTimeout(() => {
        setDelayed3(!delayed3);
      }, 480);
      const timeout4 = setTimeout(() => {
        setDelayed4(!delayed4);
      }, 620);
      const timeout5 = setTimeout(() => {
        setDelayed5(!delayed5);
      }, 660);
      const timeout6 = setTimeout(() => {
        setDelayed6(!delayed6);
      }, 800);
      const timeout7 = setTimeout(() => {
        setDelayed7(!delayed7);
      }, 840);

      setTimeouts([timeout1, timeout2, timeout3, timeout4, timeout5, timeout6, timeout7]);
    }
  };

  const handleBack = () => {
    if (isMobile) {
      setNavbarToggle(!navbarToggle);

      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));

      setDelayed(true);
      setDelayed2(true);
      setDelayed3(true);
      setDelayed4(true);
      setDelayed5(true);
      setDelayed6(true);
      setDelayed7(true);
    }
  };

  return (
    <div className="header flex py-5 text-black w-full relative justify-between px-5 lg:justify-normal lg:px-[75px] lg:items-center lg:py-0 lg:flex lg:gap-3 lg:relative">
      <div className="flex gap-7">
        <span className="navbar-toggle lg:hidden">
          {navbarToggle ? (<i className="fa-solid fa-bars" onClick={handleClick}></i>) : (<i className="fa-solid fa-x" onClick={handleBack}></i>)}
        </span>
        <span><i className="fa-solid fa-magnifying-glass lg:hidden"></i></span>
      </div>
      <img src={Logo} alt="logo" className="w-[100px] lg:w-[135px]" />
      <div className="flex gap-7">
        <span><i className="fa-solid fa-right-to-bracket lg:hidden"></i></span>
        <span><i className="fa-solid fa-cart-shopping lg:hidden"></i></span>
      </div>
      <div className={`w-full bg-white py-8 px-10 text-xl font-bold hidden lg:flex absolute top-[60px] left-0 gap-24 z-10 opacity-0}`}
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
        ref={ref3}
      >
        <h1 className={`relative top-[50px] opacity-0`} ref={deley1}>T-SHIRT 24s</h1>
        <h1 className={`relative top-[50px] opacity-0`} ref={deley2}>T-SHIRT HEAVYWEIGHT 16S(POWER16)</h1>
        <h1 className={`relative top-[50px] opacity-0`} ref={deley3}>SHOES CUPSOLE</h1>
      </div>
      <div className={`w-full bg-white py-8 px-10 text-xl font-bold hidden lg:flex absolute top-[60px] left-0 gap-24 z-10 opacity-0}`}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
        ref={ref2}
      >
        <h1 className={`relative top-[50px] opacity-0`} ref={delayed1}>SHOES VULCANIZED</h1>
        <h1 className={`relative top-[50px] opacity-0`} ref={dileyed2}>SHOES CUPSOLE</h1>
      </div>
      <div className={`w-full bg-white py-8 px-10 text-xl font-bold hidden lg:flex absolute top-[60px] left-0 gap-24 z-10 opacity-0}`}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
        ref={ref1}
      >
        <h1 className={`relative top-[50px] opacity-0`} ref={delay1s}>START FROM 50k!</h1>
        <h1 className={`relative top-[50px] opacity-0`} ref={delay2s}>START FROM 100K</h1>
        <h1 className={`relative top-[50px] opacity-0`} ref={delay3s}>START FROM 150K</h1>
        <h1 className={`relative top-[50px] opacity-0`} ref={delay4s}>START FROM 200K</h1>
      </div>
      <nav className="navbar w-full py-4 px-6 pb-20 absolute bg-white top-full lg:opacity-100 lg:z-10 lg:pb-0 lg:py-0 lg:px-0 lg:relative lg:top-0" style={navbar}>
        <ul className="text-lg font-semibold lg:flex gap-2 lg:font-bold lg:w-full">
          <li className={`mt-6 item1 relative left-[-10%] opacity-0 lg:opacity-100 lg:left-0 lg:mt-0 lg:py-4 hovered1 ${hovered1 ? "expand1" : ""}`}
            style={delay}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <span className="flex justify-between items-center lg:justify-normal pr-[10px] gap-1 lg:hidden">
              <i className="fa-solid fa-chevron-down hidden lg:block"></i>
              <a href="#">CLEARANCE SALE START FROM 50K</a>
              <i className="fa-solid fa-angle-right lg:hidden"></i>
            </span>
            <span className="hidden lg:flex items-center justify-normal pr-[10px] gap-1">
              <i className="fa-solid fa-chevron-down hidden lg:block"></i>
              <a href="#">CLEARANCE SALE START FROM 50K</a>
              <i className="fa-solid fa-angle-right lg:hidden"></i>
            </span>
          </li>
          <li className={`mt-6 item2 relative left-[-10%] opacity-0 lg:opacity-100 lg:left-0 lg:mt-0 lg:py-4 hovered2 ${hovered2 ? "expand2" : ""}`} style={delay2}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <span className="flex justify-between items-center lg:justify-normal pr-[10px] gap-1 lg:hidden">
              <i className="fa-solid fa-chevron-down hidden lg:block"></i>
              <a href="#">SHOES</a>
              <i className="fa-solid fa-angle-right lg:hidden"></i>
            </span>
            <span className="hidden lg:flex items-center justify-normal pr-[10px] gap-1">
              <i className="fa-solid fa-chevron-down hidden lg:block"></i>
              <a href="#">SHOES</a>
              <i className="fa-solid fa-angle-right lg:hidden"></i>
            </span>
          </li>
          <li className={`mt-6 item3 relative left-[-10%] opacity-0 lg:opacity-100 lg:left-0 lg:mt-0 lg:py-4 hovered3 ${hovered3 ? "expand3" : ""}`} style={delay3}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            <span className="flex justify-between items-center lg:justify-normal pr-[10px] gap-1 lg:hidden">
              <i className="fa-solid fa-chevron-down hidden lg:block"></i>
              <a href="#">T-SHIRT</a>
              <i className="fa-solid fa-angle-right lg:hidden"></i>
            </span>
            <span className="hidden lg:flex justify-between items-center lg:justify-normal pr-[10px] gap-1">
              <i className="fa-solid fa-chevron-down hidden lg:block"></i>
              <a href="#">T-SHIRT</a>
              <i className="fa-solid fa-angle-right lg:hidden"></i>
            </span>
          </li>
          <li className="mt-6 item4 relative left-[-10%] opacity-0 lg:opacity-100 lg:left-0 lg:mt-0 lg:py-4" style={delay4}>
            <span className="flex justify-between items-center lg:justify-normal pr-[10px] gap-1 lg:hidden">
              <a href="#">SANDAL SLIPPER</a>
            </span>
            <span className="hidden lg:flex justify-between items-center lg:justify-normal pr-[10px] gap-1 hovered4">
              <a href="#">SANDAL SLIPPER</a>
            </span>
          </li>
          <li className="mt-6 item5 relative left-[-10%] opacity-0 lg:opacity-100 lg:left-0 lg:mt-0 lg:py-4" style={delay5}>
            <span className="flex justify-between items-center lg:justify-normal pr-[10px] gap-1 lg:hidden">
              <a href="#">HOODIE</a>
            </span>
            <span className="hidden lg:flex justify-between items-center lg:justify-normal pr-[10px] gap-1 hovered5">
              <a href="#">HOODIE</a>
            </span>
          </li>
          <li className="mt-6 item6 relative left-[-10%] opacity-0 lg:opacity-100 lg:left-0 lg:mt-0 lg:py-4" style={delay6}>
            <span className="flex justify-between items-center lg:justify-normal pr-[10px] gap-1 lg:hidden">
              <a href="#">PANTS</a>
            </span>
            <span className="hidden lg:flex justify-between items-center lg:justify-normal pr-[10px] gap-1 hovered6">
              <a href="#">PANTS</a>
            </span>
          </li>
          <li className="mt-6 item7 mb-10 relative left-[-10%] opacity-0 lg:opacity-100 lg:left-0 lg:mt-0 lg:mb-0 lg:py-4" style={delay7}>
            <span className="flex justify-between items-center lg:justify-normal pr-[10px] gap-1 lg:pr-0 lg:hidden">
              <a href="#">BAGS</a>
            </span>
            <span className="hidden lg:flex justify-between items-center lg:justify-normal pr-[10px] gap-1 lg:pr-0 hovered7">
              <a href="#">BAGS</a>
            </span>
          </li>
        </ul>
      </nav>
      <div className="hidden lg:flex gap-9">
        <i className="fa-solid fa-magnifying-glass hidden lg:block"></i>
        <div className="hidden lg:flex relative items-center">
          <i className="fa-solid fa-magnifying-glass absolute -scale-x-100 left-[-3px]"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <i className="fa-solid fa-lock hidden lg:block"></i>
      </div>
    </div >
  )
}