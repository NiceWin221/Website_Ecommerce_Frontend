import { useRef, useState } from "react"
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
  const navbar = {
    zIndex: navbarToggle ? "0" : '20',
    left: navbarToggle ? "-100%" : "0",
    opacity: navbarToggle ? "0" : "100%",
    transition: navbarToggle ? "" : "0.4s ease-in-out"
  }

  const delay = {
    left: delayed ? "-10%" : "0",
    opacity: delayed ? "0" : "100"
  }
  const delay2 = {
    left: delayed2 ? "-10%" : "0",
    opacity: delayed2 ? "0" : "100"
  }
  const delay3 = {
    left: delayed3 ? "-10%" : "0",
    opacity: delayed3 ? "0" : "100"
  }
  const delay4 = {
    left: delayed4 ? "-10%" : "0",
    opacity: delayed4 ? "0" : "100"
  }
  const delay5 = {
    left: delayed5 ? "-10%" : "0",
    opacity: delayed5 ? "0" : "100"
  }
  const delay6 = {
    left: delayed6 ? "-10%" : "0",
    opacity: delayed6 ? "0" : "100"
  }
  const delay7 = {
    left: delayed7 ? "-10%" : "0",
    opacity: delayed7 ? "0" : "100"
  }


  const handleClick = () => {
    setNavbarToggle(!navbarToggle)
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

  const handleBack = () => {
    setNavbarToggle(!navbarToggle);

    timeouts.forEach(timeoutId => clearTimeout(timeoutId));

    setDelayed(true);
    setDelayed2(true);
    setDelayed3(true);
    setDelayed4(true);
    setDelayed5(true);
    setDelayed6(true);
    setDelayed7(true);
  };

  return (
    <div className="header flex py-5 text-black w-full relative justify-between px-5">
      <span className="navbar-toggle">
        {navbarToggle ? (<i className="fa-solid fa-bars" onClick={handleClick}></i>) : (<i className="fa-solid fa-x" onClick={handleBack}></i>)}
      </span>
      <span><i className="fa-solid fa-magnifying-glass"></i></span>
      <h1 className="text-xl font-bold px-12">Warung WiYan</h1>
      <span><i className="fa-solid fa-right-to-bracket"></i></span>
      <span><i className="fa-solid fa-cart-shopping"></i></span>
      <nav className="navbar w-full py-4 px-6 pb-20 absolute bg-white top-full left-0" style={navbar}>
        <ul className="text-lg font-semibold">
          <li className="mt-6 item1 flex justify-between" style={delay}>CLEARANCE SALE START FROM 50K <span><i className="fa-solid fa-angle-right"></i></span></li>
          <li className="mt-6 item2 flex justify-between" style={delay2}>SHOES <span><i className="fa-solid fa-angle-right"></i></span></li>
          <li className="mt-6 item3 flex justify-between" style={delay3}>T-SHIRT <span><i className="fa-solid fa-angle-right"></i></span></li>
          <li className="mt-6 item4 flex justify-between" style={delay4}>SANDAL SLIPPER <span><i className="fa-solid fa-angle-right"></i></span></li>
          <li className="mt-6 item5 flex justify-between" style={delay5}>HOODIE <span><i className="fa-solid fa-angle-right"></i></span></li>
          <li className="mt-6 item6 flex justify-between" style={delay6}>PANTS <span><i className="fa-solid fa-angle-right"></i></span></li>
          <li className="mt-6 item7 flex justify-between mb-10" style={delay7}>BAGS <span><i className="fa-solid fa-angle-right"></i></span></li>
        </ul>
      </nav>
    </div>
  )
}