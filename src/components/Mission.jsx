export default function Mission() {
  return (
    <section
      id="mission"
      className="py-14 px-4 md:px-10 lg:px-20 bg-white rounded-xl  border-gray-200"
    >
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
        Our Mission
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        At IncrediFund, we make small business funding simple, fast, and human.
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <img
            src="/OurMissionPNG.png" // Arpad Benedek
            alt="Shops Picture"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 text-gray-700 text-lg space-y-4">
          <p>
            We know firsthand how overwhelming it can be to navigate banks,
            paperwork, and rigid requirements — especially when you’re focused
            on running your business.
          </p>
          <p>
            That’s why we built a better way. Our team specializes in helping
            everyday business owners access flexible funding without the red
            tape. Whether you need working capital, equipment, or room to grow,
            we’re here to support you with real options, clear terms, and no
            runaround.
          </p>
          <p>
            We don’t just lend — we listen, we guide, and we work with you like
            a true partner.
          </p>
          <button
            onClick={() => {
              const section = document.getElementById("contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block mt-4 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
