import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-6 px-6 md:px-12 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-white text-4xl font-bold">AK.</div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-8 text-xl">
        <a href="#" className="text-blue-400 hover:text-blue-500 transition">About</a>
        <a href="https://drive.usercontent.google.com/u/0/uc?id=1cqSGMZLeF3vXVng75z2hbFQBoKf2XfCv&export=download" className="text-blue-400 hover:text-blue-500 transition">Resume</a>
        <a href="#" className="text-blue-400 hover:text-blue-500 transition">Contact Me</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-white text-3xl z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-6 transition-all duration-300 sm:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl" onClick={() => setIsOpen(false)}>About</a>
        <a href="https://drive.usercontent.google.com/u/0/uc?id=1cqSGMZLeF3vXVng75z2hbFQBoKf2XfCv&export=download" className="text-blue-400 hover:text-blue-500 text-2xl" onClick={() => setIsOpen(false)}>Resume</a>
        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl" onClick={() => setIsOpen(false)}>Contact Me</a>
      </div>
    </nav>
  );
}
