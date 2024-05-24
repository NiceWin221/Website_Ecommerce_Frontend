import Shoes1 from './images/shoes1.png'
import Shoes1s from './images/shoes1s.png'
import Shoes2 from './images/shoes2.png'
import Shoes2s from './images/shoes2s.png'
import Shoes3 from './images/shoes3.png'
import Shoes3s from './images/shoes3s.png'
import Shoes4 from './images/shoes4.png'
import Shoes4s from './images/shoes4s.png'
import Shoes5 from './images/shoes5.png'
import Shoes5s from './images/shoes5s.png'
import Hoodie1 from './images/hoodie1.png'
import Hoodie1s from './images/hoodie1s.png'
import Hoodie2 from './images/hoodie2.png'
import Hoodie2s from './images/hoodie2s.png'
import Hoodie3 from './images/hoodie3.png'
import Hoodie3s from './images/hoodie3s.png'
import Hoodie4 from './images/hoodie4.png'
import Hoodie4s from './images/hoodie4s.png'
import Sandal1 from './images/sandal1.png'
import Sandal1s from './images/sandal1s.png'
import Sandal2 from './images/sandal2.png'
import Sandal2s from './images/sandal2s.png'
import "./product.css"
import useDraggable from './dragable.jsx'
import { useState } from 'react'

export default function Product() {
  const [activeProduct, setActiveProduct] = useState('shoes')

  const { bar: shoesBar, ref: shoesRef, handleMouseDown: shoesMouseDown, handleMouseMove: shoesMouseMove, handleMouseUp: shoesMouseUp, handleMouseLeave: shoesMouseLeave } = useDraggable();
  const { bar: hoodiesBar, ref: hoodiesRef, handleMouseDown: hoodiesMouseDown, handleMouseMove: hoodiesMouseMove, handleMouseUp: hoodiesMouseUp, handleMouseLeave: hoodieMouseLeave } = useDraggable();
  const { bar: sandalsBar, ref: sandalsRef, handleMouseDown: sandalsMouseDown, handleMouseMove: sandalsMouseMove, handleMouseUp: sandalsMouseUp, handleMouseLeave: sandalsMouseLeave } = useDraggable();

  return (
    <div className="w-full pt-10 relative">
      <div className="product-name flex text-lg font-semibold gap-5 justify-center cursor-pointer relative lg:text-2xl">
        <h1 onClick={() => setActiveProduct('shoes')} className={`underlines relative ${activeProduct === 'shoes' ? 'animate' : ''}`}>SHOES VULCANIZED</h1>
        <h1 onClick={() => setActiveProduct('hoodie')} className={`underlines relative ${activeProduct === 'hoodie' ? 'animate' : ''}`}>HOODIE</h1>
        <h1 onClick={() => setActiveProduct('sandal')} className={`underlines relative ${activeProduct === 'sandal' ? 'animate' : ''}`}>SANDAL SLIPPER</h1>
      </div>
      <div className='w-full relative lg:w-[90%] lg:ml-20'>
        <div className={`product product-shoes w-full cursor-pointer overflow-hidden ${activeProduct === 'shoes' ? 'active' : ''}`}>
          <div className='w-full flex gap-1 cursor-pointer lg:mt-5' ref={shoesRef} onMouseDown={shoesMouseDown}
            onMouseMove={shoesMouseMove}
            onMouseUp={shoesMouseUp}
            onMouseLeave={shoesMouseLeave}>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 lg:w-[25%] lg:h-[25%]'>
              <div className="img-container relative group">
                <img src={Shoes1} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Shoes1s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>NIKECOURT LEGACY</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 245.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 300.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 lg:w-[25%] lg:h-[25%]'>
              <div className="img-container relative group">
                <img src={Shoes2} alt="shoes" className='w-full h-full mb-4 relative bottom-3 group-hover:opacity-0' draggable="false" />
                <img src={Shoes2s} alt="shoes" className='w-full h-full mb-4 bottom-3 absolute left-0 -top-3 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>NIKE WAFFLE DEBUT</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 200.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 250.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 lg:w-[25%] lg:h-[25%]'>
              <div className="img-container relative group">
                <img src={Shoes3} alt="shoes" className='w-full h-full mb-4 relative bottom-3 group-hover:opacity-0' draggable="false" />
                <img src={Shoes3s} alt="shoes" className='w-full h-full mb-4 bottom-3 absolute left-0 -top-3 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>NIKE AIR JORDAN</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 300.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 400.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 lg:w-[25%] lg:h-[25%]'>
              <div className="img-container relative group">
                <img src={Shoes4} alt="shoes" className='w-full h-full mb-4 relative bottom-3 group-hover:opacity-0' draggable="false" />
                <img src={Shoes4s} alt="shoes" className='w-full h-full mb-4 bottom-3 absolute left-0 -top-3 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>NIKEAIR MAX DAWN</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 250.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 300.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 lg:w-[23%] lg:h-[23%]'>
              <div className="img-container relative group">
                <img src={Shoes5} alt="shoes" className='w-full h-full mb-4 relative bottom-3 group-hover:opacity-0' draggable="false" />
                <img src={Shoes5s} alt="shoes" className='w-full h-full mb-4 bottom-3 absolute left-0 -top-3 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>NIKECOURT VAPOR</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 230.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 330.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 lg:w-[23%] lg:h-[23%]'>
              <div className="img-container relative group">
                <img src={Shoes5} alt="shoes" className='w-full h-full mb-4 relative bottom-3 group-hover:opacity-0' draggable="false" />
                <img src={Shoes5s} alt="shoes" className='w-full h-full mb-4 bottom-3 absolute left-0 -top-3 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>NIKECOURT VAPOR</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 230.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 330.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 lg:w-[23%] lg:h-[23%]'>
              <div className="img-container relative group">
                <img src={Shoes5} alt="shoes" className='w-full h-full mb-4 relative bottom-3 group-hover:opacity-0' draggable="false" />
                <img src={Shoes5s} alt="shoes" className='w-full h-full mb-4 bottom-3 absolute left-0 -top-3 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>NIKECOURT VAPOR</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 230.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 330.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 lg:w-[23%] lg:h-[23%]'>
              <div className="img-container relative group">
                <img src={Shoes5} alt="shoes" className='w-full h-full mb-4 relative bottom-3 group-hover:opacity-0' draggable="false" />
                <img src={Shoes5s} alt="shoes" className='w-full h-full mb-4 bottom-3 absolute left-0 -top-3 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>NIKECOURT VAPOR</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 230.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 330.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 lg:w-[23%] lg:h-[23%]'>
              <div className="img-container relative group">
                <img src={Shoes5} alt="shoes" className='w-full h-full mb-4 relative bottom-3 group-hover:opacity-0' draggable="false" />
                <img src={Shoes5s} alt="shoes" className='w-full h-full mb-4 bottom-3 absolute left-0 -top-3 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>NIKECOURT VAPOR</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 230.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 330.000,00</p>
            </span>
          </div>
          <div className='border border-slate-300 pt-1 mx-8 rounded-full bg-slate-300 relative bottom-14'><span className='shoes-bar absolute bg-black top-0 w-[12.5%] h-full rounded-full' ref={shoesBar}></span>
          </div>
        </div>
        <div className={`product product-hoodie w-full cursor-pointer overflow-hidden absolute left-0 top-0 ${activeProduct === 'hoodie' ? 'active' : ''}`}
          onMouseDown={hoodiesMouseDown}
          onMouseMove={hoodiesMouseMove}
          onMouseUp={hoodiesMouseUp}
          onMouseLeave={hoodieMouseLeave}>
          <div className='w-full flex gap-1' ref={hoodiesRef}>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0'>
              <div className="img-container relative group">
                <img src={Hoodie1} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Hoodie1s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>HOODIE BLACK</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 195.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 340.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0'>
              <div className="img-container relative group">
                <img src={Hoodie2} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Hoodie2s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>HOODIE FORTUNE</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 195.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 340.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0'>
              <div className="img-container relative group">
                <img src={Hoodie3} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Hoodie3s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>HOODIE SMALL MIGHTY</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 175.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 250.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0'>
              <div className="img-container relative group">
                <img src={Hoodie4} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Hoodie4s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>HOODIE SMALL MIGHTY</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 175.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 250.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0'>
              <div className="img-container relative group">
                <img src={Hoodie4} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Hoodie4s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>HOODIE SMALL MIGHTY</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 175.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 250.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0'>
              <div className="img-container relative group">
                <img src={Hoodie4} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Hoodie4s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>HOODIE SMALL MIGHTY</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 175.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 250.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0'>
              <div className="img-container relative group">
                <img src={Hoodie4} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Hoodie4s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>HOODIE SMALL MIGHTY</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 175.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 250.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0'>
              <div className="img-container relative group">
                <img src={Hoodie4} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Hoodie4s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>HOODIE SMALL MIGHTY</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 175.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 250.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0'>
              <div className="img-container relative group">
                <img src={Hoodie4} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Hoodie4s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>HOODIE SMALL MIGHTY</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 175.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 250.000,00</p>
            </span>
          </div>
          <div className='border border-slate-300 pt-1 mx-8 rounded-full bg-slate-300 relative bottom-14'><span className='shoes-bar absolute bg-black top-0 w-[12.5%] h-full rounded-full' ref={hoodiesBar}></span>
          </div>
        </div>
        <div className={`product product-sandal w-full cursor-pointer overflow-hidden absolute left-0 top-0 ${activeProduct === 'sandal' ? 'active' : ''}`}
          onMouseDown={sandalsMouseDown}
          onMouseMove={sandalsMouseMove}
          onMouseUp={sandalsMouseUp}
          onMouseLeave={sandalsMouseLeave}>
          <div className='w-full flex gap-1' ref={sandalsRef}>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 group'>
              <div className="img-container relative group">
                <img src={Sandal1} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Sandal1s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>MASURA SANDAL</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 85.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 100.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 group'>
              <div className="img-container relative group">
                <img src={Sandal2} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Sandal2s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>SANDAL SLIDE</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 140.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 200.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 group'>
              <div className="img-container relative group">
                <img src={Sandal2} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Sandal2s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>SANDAL SLIDE</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 140.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 200.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 group'>
              <div className="img-container relative group">
                <img src={Sandal2} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Sandal2s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>SANDAL SLIDE</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 140.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 200.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 group'>
              <div className="img-container relative group">
                <img src={Sandal2} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Sandal2s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>SANDAL SLIDE</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 140.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 200.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 group'>
              <div className="img-container relative group">
                <img src={Sandal2} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Sandal2s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>SANDAL SLIDE</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 140.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 200.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 group'>
              <div className="img-container relative group">
                <img src={Sandal2} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Sandal2s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>SANDAL SLIDE</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 140.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 200.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 group'>
              <div className="img-container relative group">
                <img src={Sandal2} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Sandal2s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>SANDAL SLIDE</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 140.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 200.000,00</p>
            </span>
            <span className='relative mt-5 mb-20 w-[50%] h-[50%] flex-shrink-0 group'>
              <div className="img-container relative group">
                <img src={Sandal2} alt="shoes" className='w-full h-full mb-4 group-hover:opacity-0' draggable="false" />
                <img src={Sandal2s} alt="Hoodie" className='w-full h-full mb-4 absolute left-0 top-0 hidden group-hover:block' draggable="false" />
              </div>
              <span className='absolute w-full h-[45%] top-0 left-0 -z-10 bg-gradient-to-b from-white to-gray-300'></span>
              <h1 className='absolute left-0 top-0 bg-black text-white text-sm font-semibold py-2 px-4'>SALE</h1>
              <h2 className='text-lg font-semibold px-2'>SANDAL SLIDE</h2>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline'>Rp 140.000,00</p>
              <p className='text-base px-2 text-slate-500 leading-relaxed inline line-through'>Rp 200.000,00</p>
            </span>
          </div>
          <div className='border border-slate-300 pt-1 mx-8 rounded-full bg-slate-300 relative bottom-14'><span className='shoes-bar absolute bg-black top-0 w-[12.5%] h-full rounded-full' ref={sandalsBar}></span>
          </div>
        </div>
      </div>
    </div>
  )
}