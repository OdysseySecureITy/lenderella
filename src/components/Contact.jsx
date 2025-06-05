import { useState } from "react";
import { Send } from "lucide-react";
import { useEffect } from "react";
export default function Contact() {
  const [showToast, setShowToast] = useState(false); //toast message upon successful sending of the message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); //errors
  const [status, setStatus] = useState(""); // status

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("Validation Errors:", validationErrors); // log
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } else {
        setStatus("Failed to send message. Please Try again");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred while sending your message.");
    }
  };
  
 // # For Debugging Purposes
  // useEffect(() => {
  //  console.log("Errors state updated:", errors);
  // }, [errors]);

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
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 shadow-md rounded-lg space-y-6 w-full"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                placeholder="Your Name"
                //required
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                placeholder="you@example.com"
                //required
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                placeholder="Your message..."
                //required
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-emerald-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition w-full md:w-auto"
            >
              Send Message
            </button>
          </form>

          {/* Toast message */}
          {showToast && (
            <div
              className="fixed top-20 right-6 flex items-center fade-in w-full max-w-xs p-4 space-x-4 bg-white divide-x divide-gray-200 rounded-lg shadow-sm text-gray-700 z-50"
              role="alert"
            >
              <Send className="w-5 h-5 text-emerald-600 rotate-45" />
              <div className="ps-4 text-sm font-medium">
                Message sent successfully.
              </div>
            </div>
          )}

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
