export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for darkening if needed */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
          Small business loans online without the hoops
        </h1>
        <ul className="text-lg md:text-xl mt-4 space-y-1">
          <li>Pre-qualification in minutes</li>
          <li>Funding in less than 24 hours</li>
          <li>Funding range from $5K to $600K</li>
        </ul>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition">
            Get Started
          </button>
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full font-medium transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}