// import { useEffect } from "react";

// export default function ApplyForm() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.jotformEmbedHandler) {
//         window.jotformEmbedHandler(
//           "iframe[id='JotFormIFrame-251514732871053']",
//           "https://form.jotform.com/"
//         );
//       }
//     };
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <section id="apply" className="py-14 bg-gray-50 px-4">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-5 text-gray-800">
//           Apply for Funding
//         </h2>
//         <div className="rounded-xl overflow-hidden shadow-md">
//           <iframe
//             id="JotFormIFrame-251514732871053"
//             allowTransparency={true}
//             allow="geolocation; microphone; camera; fullscreen; payment"
//             src="https://form.jotform.com/251514732871053"
//             frameBorder="0"
//             scrolling="no"
//             style={{
//               minWidth: "100%",
//               maxWidth: "100%",
//               height: "800px", // Increased height for full form
//               border: "none",
//               marginTop: 0,
//               paddingTop: 0
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";

export default function ApplyForm() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
      script.async = true;
      script.onload = () => {
        if (window.jotformEmbedHandler) {
          window.jotformEmbedHandler(
            "iframe[id='JotFormIFrame-251514732871053']",
            "https://form.jotform.com/"
          );
        }
      };
      document.body.appendChild(script);
    }
  }, [showForm]);

  const handleShowForm = () => {
    setShowForm(true);
    // Smooth scroll to form
    setTimeout(() => {
      const formEl = document.getElementById("jotform-wrapper");
      formEl?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="apply" className="py-14 bg-gray-50 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Apply for Funding
        </h2>

        {!showForm && (
          <button
            onClick={handleShowForm}
            className="bg-emerald-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Launch Application Form
          </button>
        )}

        {showForm && (
          <div
            id="jotform-wrapper"
            className="mt-10 rounded-xl overflow-hidden shadow-md"
          >
            <iframe
              id="JotFormIFrame-251514732871053"
              title="IncrediFund_Business_Loan_Application"
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/251514732871053"
              frameBorder="0"
              scrolling="no"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: "800px",
                border: "none",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
