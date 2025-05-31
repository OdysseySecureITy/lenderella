export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            Have questions or need assistance? Our dedicated support team is
            here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form action="https://formspree.io/f/yourFormId" method="POST" className="bg-white p-8 shadow-md rounded-lg space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message..."
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info + Business Hours */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                IncrediFund
              </h3>
              <p className="text-gray-600 mb-4">
                West Palm Beach, Florida 33409, United States
              </p>
              <p className="text-sm font-semibold text-gray-700">Phone:</p>
              <a
                href="tel:15612955316"
                className="text-indigo-600 hover:underline"
              >
                (561) 295-5316
              </a>

              <p className="mt-4 text-sm font-semibold text-gray-700">Email:</p>
              <a
                href="mailto:info@incredifund.com"
                className="text-emerald-600 hover:underline"
              >
                info@incredifund.com
              </a>

              <div className="mt-6">
                <a
                  href="https://wa.me/15612955316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Business Hours
              </h3>
              <ul className="grid grid-cols-2 text-gray-600 gap-y-1 text-sm">
                <li>Monday:</li>
                <li>09:00 am – 05:00 pm</li>
                <li>Tuesday:</li>
                <li>09:00 am – 05:00 pm</li>
                <li>Wednesday:</li>
                <li>09:00 am – 05:00 pm</li>
                <li>Thursday:</li>
                <li>09:00 am – 05:00 pm</li>
                <li>Friday:</li>
                <li>09:00 am – 05:00 pm</li>
                <li>Saturday:</li>
                <li className="text-gray-400">Closed</li>
                <li>Sunday:</li>
                <li className="text-gray-400">Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
