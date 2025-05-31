import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Mission from "./components/Mission";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="font-sans">
        <Header/>
        {/* Hero Section */}
        <Hero/>

        {/*Our Missiona Section  */}
        <Mission/>
        
        {/* Services Section */}
        <Solutions />

        {/* How It Works Section */}
        <HowItWorks/>

        {/* Testimonials Section */}
        
        <Testimonials/>
        
        {/* FAQ Section */}
        <FAQ/>

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
        <Footer/>
      </main>
    </>
  );
}

export default App;
