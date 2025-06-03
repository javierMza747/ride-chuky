import { useState } from "react";

export default function Navbar() {


  return (
    <nav className="w-full border-y-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10 items-center">
          {/* Logo */}
          {/* <a href="/" className="text-xl font-bold text-gray-700">
            RIDE CHUCKY
          </a> */}

          {/* Menú desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#clases" className="text-gray-700 hover:text-green-700">
              Clases
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-green-700">
              Nosotros
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
