import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsShrunk(false);
      } else if (currentScrollY > lastScrollY) {
        setIsShrunk(true);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="flex-col">
      <div
        className={`fixed left-0 right-0 bg-[#fcfcfc] shadow-md z-50 transition-all duration-500 ${
          isShrunk ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">The AG Market</div>

          {/* Search (only when not shrunk and on medium screens) */}
          {!isShrunk && (
            <div className="hidden md:block mx-5">
              <input
                type="search"
                placeholder="Search..."
                className="w-60 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
          )}

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 flex flex-col space-y-2 bg-white shadow-md">
            <a href="#" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
