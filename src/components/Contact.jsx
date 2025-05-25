export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Have questions or need assistance? Our dedicated support team is here
          to help.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold mb-1">Lenderella Funding</h3>
              <p>West Palm Beach, Florida 33409, United States</p>
            </div>

            <div>
              <p className="font-medium text-gray-700">Phone:</p>
              <a
                href="tel:15612955316"
                className="text-indigo-600 hover:underline"
              >
                (561) 295-5316
              </a>
            </div>

            <div>
              <p className="font-medium text-gray-700">Email:</p>
              <a
                href="mailto:info@lenderella.com"
                className="text-indigo-600 hover:underline"
              >
                info@lenderella.com
              </a>
            </div>

            <a
              href="https://wa.me/15612955316"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            >
              Message us on WhatsApp
            </a>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-sm text-gray-800">
              <div>Monday</div>
              <div>09:00 am – 05:00 pm</div>

              <div>Tuesday</div>
              <div>09:00 am – 05:00 pm</div>

              <div>Wednesday</div>
              <div>09:00 am – 05:00 pm</div>

              <div>Thursday</div>
              <div>09:00 am – 05:00 pm</div>

              <div>Friday</div>
              <div>09:00 am – 05:00 pm</div>

              <div>Saturday</div>
              <div className="text-gray-400">Closed</div>

              <div>Sunday</div>
              <div className="text-gray-400">Closed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
