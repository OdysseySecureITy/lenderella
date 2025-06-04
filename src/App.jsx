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
import ApplyForm from "./components/ApplyForm";
import TawkMessenger from "./components/TawkMessenger";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="font-sans">

        <TawkMessenger/>

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

        {/* Apply Form */}
       
       <ApplyForm/>

        {/*Contact Section */}

        <Contact/>
        
        {/* Footer */}
        <Footer/>
      </main>
    </>
  );
}

export default App;
