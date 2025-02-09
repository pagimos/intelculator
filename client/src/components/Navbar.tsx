import React from "react";
import { Link, useLocation } from "react-router-dom";
import white from "../assets/white.png";

const Navbar: React.FC = () => {
  const location = useLocation();

  // Highlight the active link based on the current path
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-black w-full h-24 flex items-center justify-between px-32  overflow-hidden">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex text-white text-4xl font-bold items-center gap-4 select-none">
          <img src={white} alt="white-logo" className="w-16" />
          <p>
            <span className="text-orange-500">Intel</span>
            Culator
          </p>
        </div>
      </Link>
      {/* Navigation Links */}
      <nav className="flex">
        {[
          { label: "Home", path: "/" },
          { label: "IQ Articles", path: "/iq-articles" },
          { label: "History of IQ", path: "/history-of-iq" },
          { label: "Donations", path: "/donations" },
          { label: "Contact", path: "/contact" },
        ].map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`text-white text-lg font-semibold px-8 py-10 flex items-center ${
              isActive(link.path) ? "bg-orange-500" : "hover:bg-orange-500"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* "Test Now" Button */}
      <Link to="/test">
        <button className="ml-4 bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600">
          Test Now
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
