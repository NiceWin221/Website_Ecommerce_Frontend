import Logo from "./images/geoff-max-logo.png"

export default function Footer() {
  return (
    <section id="footer" className="footer relative px-6 cursor-pointer lg:flex lg:relative lg:h-[350px] lg:bottom-16">
      <div className="lg:flex lg:justify-between lg:w-full lg:px-10">
        <span className="lg:mt-8">
          <img src={Logo} alt="logo" className="w-[160px] lg:w-[170px]" />
        </span>
        <span className="text-lg">
          <h1 className="mt-8 font-bold">SHOP</h1>
          <p className="text-base mt-4">Sandal Slipper</p>
          <p className="text-base mt-4">Hoodie</p>
          <p className="text-base mt-4">Pants</p>
          <p className="text-base mt-4">Bags</p>
        </span>
        <span className="text-lg">
          <h1 className="font-bold mt-8">FOLLOW US</h1>
          <span className="flex gap-8 text-base mt-8 mb-10">
            <i className="fa-brands fa-facebook-f hover:scale-125 transition-all duration-300 ease-out"></i>
            <i className="fa-brands fa-instagram hover:scale-125 transition-all duration-300 ease-out"></i>
            <i className="fa-brands fa-tiktok hover:scale-125 transition-all duration-300 ease-out"></i>
            <i className="fa-brands fa-youtube hover:scale-125 transition-all duration-300 ease-out"></i>
          </span>
        </span>
        <span className="text-lg">
          <h1 className="font-bold lg:mt-8">CONTACT US</h1>
          <p className="text-base mt-4 mb-8">Whatsapp</p>
        </span>
      </div>
      <span className="absolute flex items-center gap-1 text-sm mt-8 lg:left-16 lg:-bottom-16">
        <i className="fa-regular fa-copyright mb-10"></i>
        <p className="mb-10">2024, Geoffmax Powered by Shopify</p>
      </span>
    </section>
  )
}