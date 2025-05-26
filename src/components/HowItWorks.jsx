import React from "react";
import { ChevronsDown, ChevronsRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Apply Online",
    description: "Complete our quick prequalification form in just minutes.",
  },
  {
    number: 2,
    title: "Get Matched",
    description: "We connect you with lenders suited to your business profile.",
  },
  {
    number: 3,
    title: "Receive Funds",
    description:
      "Once approved, access your capital and start growing your business.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          A simple and fast funding process built for your business success.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step card */}
              <div className="flex flex-col items-center text-center px-6 mt-10 mb-10 lg:mb-0">
                <div className="text-indigo-600 text-4xl font-extrabold mb-2">
                  {step.number}
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Chevron between cards */}
              {index < steps.length - 1 && (
                <>
                  {/* Mobile/Tablet: vertical chevron centered */}
                  <div className="flex justify-center w-full lg:hidden my-2">
                    <ChevronsDown className="text-indigo-400 w-6 h-6" />
                  </div>

                  {/* Desktop: horizontal chevron between cards */}
                  <div className="hidden lg:flex justify-center items-center">
                    <ChevronsRight className="text-indigo-400 w-6 h-6" />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
