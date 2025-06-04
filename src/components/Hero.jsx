export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      {/* Overlay for darkening */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold max-w-5xl">
          IncredIbly Fast, Flexible, Funding
        </h1>
        <h3 className=" italic text-4xl md:text-5xl font-bold max-w-3xl">
          Business Lending Done Right
        </h3>
        <ul className="text-lg md:text-xl mt-4 space-y-1">
          <li>Pre-qualification in minutes</li>
          <li>Funding in less than 24 hours</li>
          <li>Funding range from $10K to $2M</li>
        </ul>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection("apply")}
            className="bg-emerald-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full font-medium transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
