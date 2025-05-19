import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#bb3b07] bg-opacity-95 shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 overflow-hidden flex items-center justify-center">
            <img
              src="/images/logo-with-border.png"
              alt="Biryani Bong Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="ml-3 text-[#ff9800] text-xl font-bold md:block font-['Playfair_Display']">
            Biryani Bong
          </h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-[#ff9800] hover:text-[#fdf0e2] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#ff9800] hover:text-[#fdf0e2] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#trivia"
                className="text-[#ff9800] hover:text-[#fdf0e2] transition-colors"
              >
                Trivia
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="text-[#ff9800] hover:text-[#fdf0e2] transition-colors"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#ff9800] hover:text-[#fdf0e2] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#ff9800] focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${mobileMenuOpen ? "block" : "hidden"} bg-[#fdf0e2] py-4 px-4 md:hidden`}
      >
        <ul className="space-y-3">
          <li>
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="block text-[#ff9800] hover:text-[#bb3b07] transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="block text-[#ff9800] hover:text-[#bb3b07] transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#trivia"
              onClick={closeMobileMenu}
              className="block text-[#ff9800] hover:text-[#bb3b07] transition-colors"
            >
              Trivia
            </a>
          </li>
          <li>
            <a
              href="#menu"
              onClick={closeMobileMenu}
              className="block text-[#ff9800] hover:text-[#bb3b07] transition-colors"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="block text-[#ff9800] hover:text-[#bb3b07] transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
