import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all ${
        scrolled
          ? "bg-white shadow-md text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <a href="#" className="flex items-center space-x-2 cursor-pointer">
          <img
            src={
              scrolled
                ? "/transparent-logo-lenderella-black.svg"
                : "/transparent-logo-lenderella-white.svg"
            }
            alt="Lenderella Logo"
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold">Lenderella</span>
        </a>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:block">
          <a
            href="#services"
            className={`hover:text-indigo-500 transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className={`hover:text-indigo-500 transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className={`hover:text-indigo-500 transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Testimonials
          </a>
          <a
            href="#cta"
            className={`hover:text-indigo-500 transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}

// import { useEffect, useState } from "react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-30 transition-all ${
//         scrolled
//           ? "bg-white shadow-md text-gray-900"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
//         {/* Logo + Brand */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={scrolled ? "/transparent-logo-lenderella-black.svg" : "/transparent-logo-lenderella-white.svg"}
//             alt="Lenderella Logo"
//             className="h-8 w-8"
//           />
//           <span className="text-2xl font-bold">Lenderella</span>
//         </div>

//         {/* Navigation */}
//         <nav className="space-x-6 hidden md:block">
//           <a
//             href="#services"
//             className={`hover:text-indigo-500 transition ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             Services
//           </a>
//           <a
//             href="#how-it-works"
//             className={`hover:text-indigo-500 transition ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             How It Works
//           </a>
//           <a
//             href="#testimonials"
//             className={`hover:text-indigo-500 transition ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             Testimonials
//           </a>
//           <a
//             href="#cta"
//             className={`hover:text-indigo-500 transition ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             Get Started
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// import { useEffect, useState } from "react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-30 transition-all ${
//         scrolled
//           ? "bg-white shadow-md text-gray-900"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold">Lenderella</div>
//         <nav className="space-x-6 hidden md:block">
//           <a href="#services" className="text-white hover:text-indigo-300">
//             Services
//           </a>
//           <a href="#how-it-works" className="text-white hover:text-indigo-300">
//             How It Works
//           </a>
//           <a href="#testimonials" className="text-white hover:text-indigo-300">
//             Testimonials
//           </a>
//           <a href="#cta" className="text-white hover:text-indigo-300">
//             Get Started
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }
