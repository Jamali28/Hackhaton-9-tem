"use client";


import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6"; // Magnifying Glass Icon
import { PiUserBold } from "react-icons/pi"; // User Icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center gap-20">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Food<span className="text-orange-500">tuck</span>
        </a>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          {/* Navigation Links */}
          <div className="flex space-x-6 ">
            <a href="/" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="/menu" className="hover:text-orange-500 transition">
              Menu
            </a>
            <a href="/blog" className="hover:text-orange-500 transition">
              Blog
            </a>
            <a href="/pages" className="hover:text-orange-500 transition">
              Pages
            </a>
            <a href="/about" className="hover:text-orange-500 transition">
              About
            </a>
            <a href="/signin" className="hover:text-orange-500 transition">
              Sign up
            </a>
            <a href="/checkout" className="hover:text-orange-500 transition">
              CheckOut
            </a>
          </div>

          {/* Icons and Search */}
          <div className="flex items-center ml-8 space-x-4">
            {/* Search Icon */}
            <div className="text-white text-xl hover:text-orange-500 transition">
              <FaMagnifyingGlass />
            </div>

            {/* User Icon */}
            <div className="text-white text-xl hover:text-orange-500 transition">
              <PiUserBold />
            </div>

            {/* Shopping Bag Icon */}
            <div className="text-white text-2xl hover:text-orange-500 transition">
              <PiHandbagBold />
            </div>
            </div>
          </div>
        </div>

        {/* Hamburger Icon (Small Screens) */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "≡"}
        </div>
    

      {/* Collapsible Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-black text-white mt-4 space-y-4 px-6`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#menu" className="hover:text-orange-500 transition">
            Menu
          </a>
          <a href="#blog" className="hover:text -orange-500 transition">
            Blog
          </a>
          <a href="#pages" className="hover:text-orange-500 transition">
            Pages
          </a>
          <a href="/about" className="hover:text-orange-500 transition">
            About  </a>
          <a href="/shop" className="hover:text-orange-500 transition">
            Shop
          </a>
          <a href="/signin" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        {/* Icons and Search (Small Screens) */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <div className="text-white text-2xl hover:text-orange-500 transition">
            <FaMagnifyingGlass />
          </div>

          {/* User Icon */}
          <div className="text-white text-2xl hover:text-orange-500 transition">
            <PiUserBold />
          </div> 
                    {/* Shopping Bag Icon */}
                    <div className="text-white text-2xl hover:text-orange-500 transition">
            <PiHandbagBold />
            <p></p>
          </div>
        </div>
      </div>
    
 </nav> 
  );
}



