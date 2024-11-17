// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faParking, faEnvelope, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="text-center py-3 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg relative top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center">
          <Link to="/">
            <span className="text-5xl font-extrabold text-white tracking-wide transition-transform transform hover:scale-110">
              LAB-Parking
            </span>
          </Link>
        </div>

        <nav className="flex-grow flex justify-center space-x-8">
          <Link to="/" className="text-gray-200 font-semibold text-lg hover:text-white transition duration-300 transform hover:translate-y-1">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </Link>
          <Link to="/about" className="text-gray-200 font-semibold text-lg hover:text-white transition duration-300 transform hover:translate-y-1">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About Us
          </Link>
          <Link to="/services" className="text-gray-200 font-semibold text-lg hover:text-white transition duration-300 transform hover:translate-y-1">
            <FontAwesomeIcon icon={faParking} className="mr-2" /> Services
          </Link>
          <Link to="/contact" className="text-gray-200 font-semibold text-lg hover:text-white transition duration-300 transform hover:translate-y-1">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
          </Link>
          <Link to="/login" className="text-gray-200 font-semibold text-lg hover:text-white transition duration-300 transform hover:translate-y-1">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
          </Link>
        </nav>

        <div>
          <Link to="/reserve-spot">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Reserve a Spot
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
