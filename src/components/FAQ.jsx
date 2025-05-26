import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    question: "What types of businesses can apply for Incredifund loans?",
    answer:
      "Incredifund welcomes applications from a wide range of small businesses, including startups that have been in business for six months and established companies, as long as they meet our eligibility criteria based on creditworthiness or revenue.",
  },
  {
    question: "How quickly can I receive funds from Incredifund?",
    answer:
      "Once approved, funds for Revenue-Based Financing are disbursed within 48 hours, while Term Loans and Lines of Credit are processed as quickly as possible based on your application details.",
  },
  {
    question: "Do I need a personal credit check for all Incredifund products?",
    answer:
      "Revenue-Based Financing approvals are based on your business revenue, not personal credit. However, Term Loans and Lines of Credit require an evaluation of your business's creditworthiness.",
  },
  {
    question: "What documentation is required to apply with Incredifund?",
    answer: (
      <>
        We keep paperwork to a minimum. For Lines of Credit, it’s based on
        monthly income with minimal requirements, while other products may
        require basic financial information to assess eligibility:
        <ul className="list-disc list-inside mt-2">
          <li>Bank Statements</li>
          <li>Business checking account</li>
          <li>ID</li>
          <li>SS number or ITIN number</li>
        </ul>
      </>
    ),
  },
];

// Custom component to smoothly animate height to 'auto' with framer-motion
const AnimateHeight = ({ isOpen, children }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={
        isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
      }
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqData.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-lg bg-gray-50 shadow-sm"
              style={{
                // Soft background with subtle shadow instead of border
                // You can tweak colors here if you want lighter or warmer tones
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-header-${index}`}
              >
                {question}
                <span className="ml-2">
                  {isOpen ? <X size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <AnimateHeight isOpen={isOpen} key="content">
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-header-${index}`}
                      className="px-5 pb-6 pt-0 text-gray-700 rounded-b-lg"
                      style={{ backgroundColor: "rgba(243, 244, 246, 0.6)" }}
                    >
                      {answer}
                    </div>
                  </AnimateHeight>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
