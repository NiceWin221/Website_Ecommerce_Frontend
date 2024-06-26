import { useEffect, useState, useRef } from 'react'
import './collection.css'
import Shoes from './images/shoes.png'
import Poto1 from './images/poto1.jpg'
import Poto2 from './images/poto2.jpg'
import Poto3 from './images/poto3.jpg'
import Poto4 from './images/poto4.jpg'
import Poto5 from './images/poto5.jpg'
import Poto6 from './images/poto6.jpg'
import Sandal1 from './images/sandal1.png'
import Sandal1s from './images/sandal1s.png'
import Sandal2 from './images/sandal2.png'
import Sandal2s from './images/sandal2s.png'
import Shoes1 from './images/shoes1.png'
import Shoes1s from './images/shoes1s.png'
import Shoes2 from './images/shoes3.png'
import Shoes2s from './images/shoes3s.png'
import Background from './images/background.jpg'
import PotoLG from './images/poto-lg.jpg'

export default function Collection() {
  const inViewElement1 = useRef(null)
  const inViewElement2 = useRef(null)
  const inViewElement3 = useRef(null)
  const inViewElement4 = useRef(null)
  const inViewElement5 = useRef(null)
  const inViewElement6 = useRef(null)
  const adidasInView = useRef(null)
  const collection = useRef(null)
  const followUs = useRef(null)
  const followUsObject = useRef(null)
  const shoesDisplay1 = useRef(null)
  const shoesDisplay2 = useRef(null)
  const sandalDisplay1 = useRef(null)
  const sandalDisplay2 = useRef(null)
  const shoesWidth = useRef(null)
  const shoesZoom = useRef(null)
  const [quantity, setQuantity] = useState(1)
  const [activeQuantity, setActiveQuantity] = useState(null)

  const handleQuantityPlus = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleQuantityMinus = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const onScroll = () => {
    let inShoesWidth = shoesWidth.current
    let inFollowUsObject = followUsObject.current;
    let inFollowUs = followUs.current;
    let inViewPosition1 = inViewElement1.current;
    let inViewPosition2 = inViewElement2.current;
    let inViewPosition3 = inViewElement3.current;
    let inViewPosition4 = inViewElement4.current;
    let inViewPosition5 = inViewElement5.current;
    let inViewPosition6 = inViewElement6.current;
    let inShoesDisplay1 = shoesDisplay1.current
    let collectionPosition = collection.current
    let adidasPositon = adidasInView.current
    let inViewShoesWidth = inShoesWidth.getBoundingClientRect().top
    let inViewShoes = inShoesDisplay1.getBoundingClientRect().top
    let inViewAdidas = adidasPositon.getBoundingClientRect().top
    let inViewTop1 = inViewPosition1.getBoundingClientRect().top;
    let inViewFollow = inFollowUs.getBoundingClientRect().top
    let viewport = window.innerHeight;

    if (inViewAdidas < viewport - 300) {
      adidasPositon.style.transform = "scale(1)"
      setTimeout(() => {
        collectionPosition.style.opacity = '1'
        collectionPosition.style.top = '0'
      }, 300)
    }

    if (inViewShoesWidth < viewport - 450) {
      shoesWidth.current.style.width = "100%"
      shoesZoom.current.style.transform = "scale(1.1)"
      shoesZoom.current.style.transition = "transform 7s ease-in-out"
    } else {
      shoesWidth.current.style.width = "90%"
      shoesZoom.current.style.transform = "scale(1)"
      shoesZoom.current.style.transition = "transform 2s ease-in-out"
    }

    if (inViewFollow < viewport - 200) {
      inFollowUs.style.transform = "scale(1)";
      setTimeout(() => {
        inFollowUsObject.style.bottom = "24px";
        inFollowUsObject.style.opacity = "1"
      }, 600)
    }

    if (inViewShoes < viewport - 100) {
      shoesDisplay1.current.style.top = "0"
      shoesDisplay1.current.style.opacity = "1"

      setTimeout(() => {
        shoesDisplay2.current.style.top = "0"
        shoesDisplay2.current.style.opacity = "1"
      }, 300)
      setTimeout(() => {
        sandalDisplay1.current.style.top = "0"
        sandalDisplay1.current.style.opacity = "1"
      }, 600)
      setTimeout(() => {
        sandalDisplay2.current.style.top = "0"
        sandalDisplay2.current.style.opacity = "1"
      }, 900)
    }

    if (inViewTop1 < viewport - 70) {
      setTimeout(() => {
        inViewPosition1.style.opacity = '1';
        inViewPosition1.style.top = "0";
      }, 0);

      setTimeout(() => {
        inViewPosition2.style.opacity = '1';
        inViewPosition2.style.top = "0";
      }, 400);

      setTimeout(() => {
        inViewPosition3.style.opacity = '1';
        inViewPosition3.style.top = "0";
      }, 700);

      setTimeout(() => {
        inViewPosition4.style.opacity = '1';
        inViewPosition4.style.top = "0";
      }, 900);

      setTimeout(() => {
        inViewPosition5.style.opacity = '1';
        inViewPosition5.style.top = "0";
      }, 1100);

      setTimeout(() => {
        inViewPosition6.style.opacity = '1';
        inViewPosition6.style.top = "0";
      }, 1300);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="w-full ">
      <h1 className="text-3xl font-bold text-black text-center mb-4">COLLECTION LIST</h1>
      <div className='display-parent'>
        <div className={`fadein relative bg-gray-500 w-full h-full lg:w-1/3 overflow-hidden`} ref={inViewElement1}>
          <img src={Poto1} alt="Shoes" className='opacity-60' />
          <span className="absolute left-5 bottom-7 lg:left-10 lg:bottom-10">
            <h1 className="text-base font-bold text-white mb-3 lg:text-xl lg:mb-6">SHOES</h1>
            <span className='collection-btn group lg:py-3 lg:px-5'>
              <button className="text-balck relative z-10 group-hover:text-white transition duration-500 ease-in-out">SHOP NOW</button>
              <span className='collection-btn-bg'></span>
            </span>
          </span>
        </div>
        <div className="fadein relative bg-gray-500 w-full h-full lg:w-1/3 overflow-hidden" ref={inViewElement2}>
          <img src={Poto2} alt="Shoes" className='opacity-60' />
          <span className="absolute left-5 bottom-7 lg:left-10 lg:bottom-10">
            <h1 className="text-base font-bold text-white mb-3 lg:text-xl lg:mb-6">HOODIE</h1>
            <span className='collection-btn group lg:py-3 lg:px-5'>
              <button className="text-balck relative z-10 group-hover:text-white transition duration-500 ease-in-out">SHOP NOW</button>
              <span className='collection-btn-bg'></span>
            </span>
          </span>
        </div>
        <div className="fadein relative bg-gray-500 w-full h-full lg:w-1/3 overflow-hidden" ref={inViewElement3}>
          <img src={Poto3} alt="Shoes" className='opacity-60' />
          <span className="absolute left-5 bottom-7 lg:left-10 lg:bottom-10">
            <h1 className="text-base font-bold text-white mb-3 lg:text-xl lg:mb-6">SANDAL</h1>
            <span className='collection-btn group lg:py-3 lg:px-5'>
              <button className="text-balck relative z-10 group-hover:text-white transition duration-500 ease-in-out">SHOP NOW</button>
              <span className='collection-btn-bg'></span>
            </span>
          </span>
        </div>
        <div className="fadein relative bg-gray-500 w-full h-full lg:w-1/3 overflow-hidden" ref={inViewElement4}>
          <img src={Poto4} alt="Shoes" className='opacity-60' />
          <span className="absolute left-5 bottom-7 lg:left-10 lg:bottom-10">
            <h1 className="text-base font-bold text-white mb-3 lg:text-xl lg:mb-6">SHOES</h1>
            <span className='collection-btn group lg:py-3 lg:px-5'>
              <button className="text-balck relative z-10 group-hover:text-white transition duration-500 ease-in-out">SHOP NOW</button>
              <span className='collection-btn-bg'></span>
            </span>
          </span>
        </div>
        <div className="fadein relative bg-gray-500 w-full h-full lg:w-1/3 overflow-hidden" ref={inViewElement5}>
          <img src={Poto5} alt="Shoes" className='opacity-60' />
          <span className="absolute left-5 bottom-7 lg:left-10 lg:bottom-10">
            <h1 className="text-base font-bold text-white mb-3 lg:text-xl lg:mb-6">HOODIE</h1>
            <span className='collection-btn group lg:py-3 lg:px-5'>
              <button className="text-balck relative z-10 group-hover:text-white transition duration-500 ease-in-out">SHOP NOW</button>
              <span className='collection-btn-bg'></span>
            </span>
          </span>
        </div>
        <div className="fadein relative bg-gray-500 w-full h-full lg:w-1/3 overflow-hidden" ref={inViewElement6}>
          <img src={Poto6} alt="Shoes" className='opacity-60' />
          <span className="absolute left-5 bottom-7 lg:left-10 lg:bottom-10">
            <h1 className="text-base font-bold text-white mb-3 lg:text-xl lg:mb-6">SANDAL</h1>
            <span className='collection-btn group lg:py-3 lg:px-5'>
              <button className="text-balck relative z-10 group-hover:text-white transition duration-500 ease-in-out">SHOP NOW</button>
              <span className='collection-btn-bg'></span>
            </span>
          </span>
        </div>
      </div>
      {/*  */}
      <div className='lg:flex lg:justify-center'>
        <div className="w-full px-4 pt-4 flex flex-wrap mb-20 h-full lg:w-[90%] lg:h-[750px]">
          <span className='w-full px-10 relative overflow-hidden h-[600px] lg:w-1/2 lg:h-full'>
            <span className='w-full h-[5%] absolute left-0 top-[390px] -z-10 bg-gradient-to-b from-white to-gray-500'></span>
            <span className='w-full h-[5%] absolute left-0 top-[415px] -z-10 bg-gradient-to-t from-white to-gray-500'></span>
            <span className='w-full h-[66%] absolute left-0 top-0 -z-10 bg-gradient-to-t from-white to-gray-300'></span>
            <img src={Shoes} alt="Shoes" className='-z-10 w-full flex-shrink-0 mt-8 ml-6 adidas' ref={adidasInView} />
            <h1 className='text-2xl font-bold text-center mt-2'>ADIDAS</h1>
          </span>
          <span className='collection-parent flex flex-wrap justify-center w-full h-full px-4 py-5 bg-[#e0e0e0] lg:w-1/2 lg:h-full items-center' ref={collection}>
            <h1 className='text-3xl font-bold text-black lg:w-full text-center lg:text-5xl lg:relative lg:top-[150px] mb-3'>FLY WITH AT - 693 SERIES</h1>
            <div className='relative h-fit py-3 px-6 group border border-black lg:relative lg:bottom-[125px]'>
              <button className='text-lg font-bold text-white relative z-10 group-hover:text-black transition-all duration-500 ease-in-out'>SEE COLLECTION</button>
              <span className='absolute bg-black left-[50%] top-0 w-full h-full transform translate-x-[-50%] group-hover:w-0 transition-all duration-300 ease-in-out'></span>
            </div>
          </span>
        </div>
      </div>
      {/*  */}
      <div className='follow w-full h-[400px] relative overflow-hidden mb-10 bg-gray-500 lg:h-[100vh]'>
        <img src={Background} alt="background" ref={followUs} className='opacity-70 lg:w-full lg:relative lg:bottom-[300px]' />
        <div className='absolute left-7 lg:left-[100px] lg:mb-16' ref={followUsObject}>
          <h1 className='text-lg font-bold text-white mb-2 lg:text-xl'>MAKE IT ELEGANT AND DIFFERENT</h1>
          <h2 className='text-3xl font-bold text-white lg:text-5xl'>KICK BACK TO SCHOOL</h2>
          <span className='lg:flex lg:gap-7 lg:mt-4'>
            <button className='text-sm font-bold text-black bg-white px-6 py-3 w-[126px] mt-3'>SHOP NOW</button>
            <button className='block text-sm font-bold text-white px-6 py-3 mt-3 border border-white-1 w-[126px]'>SHOP ALL</button>
          </span>
          <p className='text-xl font-semibold mt-3 ml-2 lg:font-bold'>FOLLOW US</p>
        </div>
      </div>
      {/*  */}
      <div className='lg:flex lg:justify-center'>
        <div className='collection-shoes w-full flex flex-wrap gap-5 lg:w-[90%] lg:gap-0'>
          <span className='display relative w-full group lg:w-[25%]' ref={shoesDisplay1}>
            <h1 className='text-sm text-white bg-black py-2 px-4 font-bold w-fit'>SALE</h1>
            <img src={Shoes1} alt="Shoes" className='group-hover:opacity-0' />
            <img src={Shoes1s} alt="Shoes" className='absolute left-0 top-0 hidden group-hover:block' />
            <h1 className='font-bold text-base px-2'>TIMELESS LOW BLACK WHITE STZ</h1>
            <div className='flex gap-3 px-2'>
              <p>Rp 235.000,00</p>
              <p className='text-slate-500 line-through'>Rp 345.000,00</p>
            </div>
          </span>
          <span className='display relative w-full group lg:w-[25%]' ref={shoesDisplay2}>
            <h1 className='text-sm text-white bg-black py-2 px-4 font-bold w-fit'>SALE</h1>
            <img src={Shoes2} alt="Shoes" className='group-hover:opacity-0' />
            <img src={Shoes2s} alt="Shoes" className='absolute left-0 top-0 hidden group-hover:block' />
            <h1 className='font-bold text-base px-2'>TIMELESS LOW BLACK GUM STZ</h1>
            <div className='flex gap-3 px-2'>
              <p>Rp 235.000,00</p>
              <p className='text-slate-500 line-through'>Rp 345.000,00</p>
            </div>
          </span>
          <span className='display relative w-full group lg:w-[25%]' ref={sandalDisplay1}>
            <h1 className='text-sm text-white bg-black py-2 px-4 font-bold w-fit'>SALE</h1>
            <img src={Sandal1} alt="Shoes" className='group-hover:opacity-0' />
            <img src={Sandal1s} alt="Shoes" className='absolute left-0 top-0 hidden group-hover:block' />
            <h1 className='font-bold text-base px-2'>CLASSIC SOLID GREY BLACK 2</h1>
            <div className='flex gap-3 px-2'>
              <p>Rp 50.000,00</p>
              <p className='text-slate-500 line-through'>Rp 125.000,00</p>
            </div>
          </span>
          <span className='display relative w-full group lg:w-[25%]' ref={sandalDisplay2}>
            <h1 className='text-sm text-white bg-black py-2 px-4 font-bold w-fit'>SALE</h1>
            <img src={Sandal2} alt="Shoes" className='group-hover:opacity-0' />
            <img src={Sandal2s} alt="Shoes" className='absolute left-0 top-0 hidden group-hover:block' />
            <h1 className='font-bold text-base px-2'>CLASSIC SOLID BLACK ORANGE 2</h1>
            <div className='flex gap-3 px-2'>
              <p>Rp 50.000,00</p>
              <p className='text-slate-500 line-through'>Rp 125.000,00</p>
            </div>
          </span>
        </div>
      </div>
      {/*  */}
      <div className='w-full flex justify-center mt-20 lg:w-full'>
        <div className='w-[90%px] overflow-hidden relative h-[500px] flex flex-col justify-end lg:h-[100vh] transition-all duration-500 ease-in-out' ref={shoesWidth}>
          <img src={Poto1} alt="Shoes" className='w-full h-full object-cover absolute' ref={shoesZoom} />
          <span className='flex items-center gap-2 text-white font-semibold justify-center text-lg relative z-10 mb-8 lg:mb-[100px] lg:text-lg lg:text-black'>
            <a href="https://www.instagram.com/wybnsa/" target="_blank">
              <i className="fa-brands fa-instagram text-slate-500 cursor-pointer hover:text-slate-200 transition duration-300 ease-out lg:text-black"></i>
            </a>
            <h1 className='lg:text-xl'>FOLLOW US</h1>
          </span>
          <div className='w-full text-center border border-slate-200 bg-gray-200 mb-20 justify-center px-4 py-4 lg:block lg:absolute lg:w-fit lg:left-[450px] lg:bottom-[70px] hidden'>
            <h1 className='text-4xl font-bold text-black w-[70%] mb-3 lg:w-full lg:text-5xl'>BRING YOUR PAGE TO LIFE</h1>
            <button className='relative group border border-black'>
              <h1 className='text-base text-white font-bold px-8 py-3 relative z-10 group-hover:text-black transition-all duration-500 ease-in-out'>SHOP NOW</h1>
              <span className='life absolute left-[50%] translate-x-[-50%] bg-black top-0 h-full group-hover:w-0'></span>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full text-center border border-slate-200 bg-gray-200 mb-20 justify-center px-4 py-4 flex flex-wrap lg:hidden'>
        <h1 className='text-4xl font-bold text-black w-[70%] mb-3 lg:w-full lg:text-5xl'>BRING YOUR PAGE TO LIFE</h1>
        <button className='relative group border border-black'>
          <h1 className='text-base text-white font-bold px-8 py-3 relative z-10 group-hover:text-black transition-all duration-500 ease-in-out'>SHOP NOW</h1>
          <span className='life absolute left-[50%] translate-x-[-50%] bg-black top-0 h-full group-hover:w-0'></span>
        </button>
      </div>
      {/*  */}
      <div className='w-full text-center relative mb-20 bg-[#e0e0e0] lg:mt-16 lg:pt-8'>
        <div className='w-full text-center relative'>
          <h1 className='text-xl font-semibold text-black lg:text-3xl'>GAVIN STANCE WHITE GUM</h1>
          <h2 className='text-3xl font-bold text-black lg:text-6xl'>GAVIN STANCE WHITE GUM</h2>
          <h1 className='absolute left-0 top-20 px-3 py-1 text-black text-sm font-semibold bg-slate-200 cursor-pointer lg:hidden'>SOLD OUT</h1>
          <div className='lg:flex lg:justify-center lg:w-full'>
            <div className='relative lg:mt-10'>
              <img src={Shoes1} alt="Shoes" />
              <h1 className='hidden lg:block absolute left-0 top-0 bg-gray-200 text-base font-bold'>SOLD OUT</h1>
            </div>
            <div className='lg:mt-10'>
              <h1 className='text-3xl font-bold text-black leading-relaxed text-left px-4'>GAVIN STANCE WHITE GUM</h1>
              <div className='flex gap-2 px-4'>
                <p className='text-lg text-black font-bold'>RP 399.00,00</p>
                <p className='text-lg text-slate-500 line-through'>Rp 600.000,00</p>
              </div >
              <h3 className='text-sm text-black text-left font-bold px-4 mt-2 mb-2'>SIZE</h3>
              <div className='flex gap-2 px-4 mt-1 items-center'>
                <div className='relative' onClick={() => { setActiveQuantity(38) }}>
                  <span className={`size ${activeQuantity === 38 ? "active" : ""} px-4 py-[10px] border border-slate-400 text-sm font-semibold cursor-pointer select-none`}>38</span>
                </div>
                <div className='relative' onClick={() => { setActiveQuantity(39) }}>
                  <span className={`size ${activeQuantity === 39 ? "active" : ""} px-4 py-[10px] border border-slate-400 text-sm font-semibold cursor-pointer select-none`}>39</span>
                </div>
                <div className='relative' onClick={() => { setActiveQuantity(40) }}>
                  <span className={`size ${activeQuantity === 40 ? "active" : ""} px-4 py-[10px] border border-slate-400 text-sm font-semibold cursor-pointer select-none`}>40</span>
                </div>
                <div className='relative' onClick={() => { setActiveQuantity(41) }}>
                  <span className={`size ${activeQuantity === 41 ? "active" : ""} px-4 py-[10px] border border-slate-400 text-sm font-semibold cursor-pointer select-none`}>41</span>
                </div>
                <div className='relative' onClick={() => { setActiveQuantity(42) }}>
                  <span className={`size ${activeQuantity === 42 ? "active" : ""} px-4 py-[10px] border border-slate-400 text-sm font-semibold cursor-pointer select-none`}>42</span>
                </div>
                <div className='relative' onClick={() => { setActiveQuantity(43) }}>
                  <span className={`size ${activeQuantity === 43 ? "active" : ""} px-4 py-[10px] border border-slate-400 text-sm font-semibold cursor-pointer select-none`}>43</span>
                </div>
                <div className='relative' onClick={() => { setActiveQuantity(44) }}>
                  <span className={`size ${activeQuantity === 44 ? "active" : ""} px-4 py-[10px] border border-slate-400 text-sm font-semibold cursor-pointer`}>44</span>
                </div>
              </div>
              <h1 className='text-left px-4 mt-4 font-bold'>QUANTITY</h1>
              <div className='flex border border-black w-fit items-center mx-4 mt-2'>
                <i className="fa-solid fa-minus text-xl font-semibold p-2 px-4 cursor-pointer" onClick={handleQuantityMinus}></i>
                <span className='text-lg font-semibold text-center w-[80px] select-none'>{quantity}</span>
                <i className="fa-solid fa-plus text-xl font-semibold p-2 px-4 cursor-pointer" onClick={handleQuantityPlus}></i>
              </div>
              <div className='flex flex-wrap justify-center'>
                <button className='w-[93%] py-3 font-semibold text-sm border border-black mt-4 px-4'>SOLD OUT</button>
                <div className='w-[93%] py-3 border border-black mt-2 relative group flex justify-center'>
                  <button className='font-semibold text-sm text-white relative z-10 group-hover:text-slate-500 transition-all duration-500 ease-in-out'>BUY IT NOW</button>
                  <span className='w-full h-full absolute bg-slate-500 left-[50%] top-0 translate-x-[-50%] group-hover:w-0 transition-all duration-300 ease-in-out'></span>
                </div>
              </div>
              <p className='text-left text-sm px-4 font-bold mt-1 underline cursor-pointer hover:no-underline'>VIEW PRODUCT DETAILS</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}