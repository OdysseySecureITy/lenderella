import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "IncrediFund made the loan process straightforward and fast. Their team was always available to answer my questions.",
    author: "— Sarah K., Owner of GreenLeaf Bakery",
  },
  {
    text: "Thanks to IncrediFund, we secured funding to launch our new product line without any stress or delays.",
    author: "— David M., CEO of TechNova Solutions",
  },
  {
    text: "The flexible repayment plans really helped us manage cash flow during a slow season. Highly recommend!",
    author: "— Maria L., Founder of Maria’s Boutique",
  },
  {
    text: "Excellent customer service and quick approvals. InrediFund is my go-to for business financing.",
    author: "— James T., Freelance Consultant",
  },
  {
    text: "Professional, transparent, and trustworthy — IncrediFund delivered exactly what they promised.",
    author: "— Olivia R., Marketing Agency Owner",
  },
  {
    text: "After being denied a traditional credit line, Incredifund gave us the breathing room we needed with a simple, flexible solution we could draw from and repay as needed.",
    author: "— Leo B., Restaurant Owner",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // tablet
      } else {
        setItemsPerSlide(3); // desktop
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Run on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + itemsPerSlide) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  {/**Returns array of the same length as itemsPerSlied i.e 1,2 or 3;
    wraps around the testimonials if index + itemsPerSlide exceeds the array length, 
    so which gets the right number of testimonials per slide regradless of screen size
     */}
  const visibleTestimonials = Array.from({ length: itemsPerSlide }).map(
    (_, i) => testimonials[(index + i) % testimonials.length]
  );
  //const visibleTestimonials = testimonials.slice(index, index + itemsPerSlide);

  return (
    <section id="testimonials" className="py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Clients Say
      </h2>
      <div className="flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex space-x-6 min-h-[200px]"
          >
            {visibleTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="w-[350px] h-[180px] bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
              >
                <p className="italic text-gray-700">"{item.text}"</p>
                <p className="text-sm font-semibold text-emerald-600 mt-4">
                  {item.author}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
