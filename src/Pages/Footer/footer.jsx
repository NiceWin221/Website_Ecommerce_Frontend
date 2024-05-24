export default function Footer() {
  return (
    <section id="footer" className="footer relative px-6 cursor-pointer">
      <h1 className="text-2xl font-bold">Warung WiYan</h1>
      <span className="text-lg">
        <h1 className="mt-10 font-bold">SHOP</h1>
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
        <h1 className="font-bold">CONTACT US</h1>
        <p className="text-base mt-4 mb-8">Whatsapp</p>
      </span>
      <span className="absolute flex items-center gap-1 text-sm mt-8">
        <i className="fa-regular fa-copyright mb-10"></i>
        <p className="mb-10">2024, Geoffmax Powered by Shopify</p>
      </span>
    </section>
  )
}