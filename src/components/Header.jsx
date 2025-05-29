import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

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
        <a href="#" className="flex items-center cursor-pointer">
          <img
            src={scrolled ? "/logo-black.svg" : "/logo-white.svg"}
            alt="Incredifund Logo"
            className="h-9 w-8 mr-[-10px] relative top-[-6px]"
          />
          <span className="text-2xl font-bold">ncrediFund</span>
        </a>

        {/* Desktop Navigation */}
        {/* md:flex */}
        <nav className="hidden lg:flex space-x-6 items-center ml-auto">
          {[
            "mission",
            "solutions",
            "howItWorks",
            "testimonials",
            "contact",
          ].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={handleLinkClick}
              className={`hover:text-emerald-600 transition ${
                scrolled ? "text-gray-800" : "text-white"
              } capitalize`}
            >
              {
                section === "mission"
                ? "Our mission"
                : section === "howItWorks"
                ? "How it Works"
                : section === "contact"
                ? "Contact"
                : section === "solutions"
                ? "Funding Solutions"
                
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            href="#apply"
            onClick={handleLinkClick}
            className={`ml-4 px-4 py-2 rounded-full bg-emerald-600 hover:bg-green-700 text-white font-semibold transition`}
          >
            APPLY NOW
          </a>
        </nav>

        {/* Mobile Burger Menu Button */}
        {/* md:hidden */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X color={scrolled ? "black" : "white"} size={32} />
          ) : (
            <Menu color={scrolled ? "black" : "white"} size={32} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* md:hidden */}
      {menuOpen && (
        <nav className="lg:hidden bg-white text-gray-900 shadow-md absolute top-full left-0 w-full z-40">
          <ul className="flex flex-col space-y-4 p-4">
            {[
              "mission",
              "solutions",
              "howItWorks",
              "testimonials",
              "contact",
            ].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 rounded hover:bg-indigo-100 transition capitalize"
                >
                  {section === "howItWorks"
                    ? "How it Works"
                    : section === "contact"
                    ? "Contact"
                    : section === "solutions"
                    ? "Funding Solutions"
                    : section === "mission"
                    ? "Our mission"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#apply"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 rounded bg-emerald-600 text-white font-semibold hover:bg-green-700 transition"
              >
                APPLY NOW
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
