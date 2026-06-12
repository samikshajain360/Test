import React from "react";

const Navbar = () => {
  return (
    // OUTER NAV → full width + border
    <nav className="w-full h-16 border-b bg-white">
      
      {/* INNER CONTAINER → max width + centered */}
      <div className="max-w-3xl mx-auto h-full flex items-center justify-between">
        
        {/* Left */}
        <div className="text-xl font-bold">
          Bhumi Mittal
        </div>

        {/* Center */}
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#work" className="hover:text-blue-600">Work</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
