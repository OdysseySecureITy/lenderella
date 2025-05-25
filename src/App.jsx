import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="font-sans">
        <Header/>
        {/* Hero Section */}
        <Hero/>

        {/* Services Section */}
        <section id="services" className="section">
          <h2 className="heading text-center">Our Services</h2>
          <p className="subheading text-center">
            Flexible funding options tailored for your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Business Loans", "Equipment Financing", "Working Capital"].map(
              (service, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-sm text-gray-600">
                    Get competitive rates and terms designed for growth.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="section bg-gray-50">
          <h2 className="heading text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Apply Online", "Get Approved", "Receive Funds"].map(
              (step, idx) => (
                <div key={idx} className="text-center p-6">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-semibold mb-1">{step}</h4>
                  <p className="text-sm text-gray-600">
                    It’s quick, easy, and fully online.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section">
          <h2 className="heading text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Amazing experience. Funds in 24hrs!",
              "Customer support was super helpful.",
            ].map((quote, idx) => (
              <div key={idx} className="bg-indigo-50 p-6 rounded-xl">
                <p className="text-gray-700 italic">"{quote}"</p>
                <p className="text-sm mt-2 font-semibold text-indigo-700">
                  - Business Owner
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="section text-center bg-indigo-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Apply now and get funded in as little as 24 hours.
          </p>
          <button className="btn-primary">Apply Today</button>
        </section>
        {/*Contact Section */}

        <Contact/>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 text-center py-6">
          <p>&copy; 2025 Lenderella. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

export default App;
