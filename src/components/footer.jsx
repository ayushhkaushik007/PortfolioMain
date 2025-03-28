import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import qrImage from "../assets/qr.png"; // ✅ Use absolute path for public folder assets

export default function Footer() {
  return (
    <footer className="bg-black text-center py-10 px-4">
      {/* Name */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-200">Ayush Kaushik</h2>
      
      {/* Subheading Links */}
      <div className="mt-2 text-gray-400 text-lg space-x-3">
        <span>socials</span>
        <span className="text-white">·</span>
        <span>contact</span>
        <span className="text-white">·</span>
        <span>portfolio</span>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-6 mt-6">
        <a href="#" className="text-gray-200 hover:text-white transition" aria-label="Instagram">
          <FaInstagram className="text-3xl" />
        </a>
        <a href="#" className="text-gray-200 hover:text-white transition" aria-label="LinkedIn">
          <FaLinkedinIn className="text-3xl" />
        </a>
        <a href="#" className="text-gray-200 hover:text-white transition" aria-label="Email">
          <FaEnvelope className="text-3xl" />
        </a>
      </div>

      {/* QR Code */}
      <div className="mt-10">
        <div className="w-40 h-40 bg-gray-800 rounded-lg mx-auto flex items-center justify-center">
          <img src={qrImage} alt="QR Code" className="w-full h-full object-contain rounded-lg" />
        </div>
      </div>
    </footer>
  );
}
