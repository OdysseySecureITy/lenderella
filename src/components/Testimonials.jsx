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
    text: "Excellent customer service and quick approvals. Lenderella is my go-to for business financing.",
    author: "— James T., Freelance Consultant",
  },
  {
    text: "Professional, transparent, and trustworthy — IncrediFund delivered exactly what they promised.",
    author: "— Olivia R., Marketing Agency Owner",
  },
  {
    text: "Their process was quick and stress-free. I’ll definitely come back again!",
    author: "— Leo B., Restaurant Owner",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3); // md breakpoint
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Run on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + itemsPerSlide) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  const visibleTestimonials = testimonials.slice(index, index + itemsPerSlide);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
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
            className="flex space-x-6"
          >
            {visibleTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="w-[350px] bg-white p-6 rounded-xl shadow-md"
              >
                <p className="italic text-gray-700">"{item.text}"</p>
                <p className="text-sm font-semibold text-indigo-600 mt-4">
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
