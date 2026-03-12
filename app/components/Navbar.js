"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">

      {/* Top Bar */}
      <div className="bg-blue-700 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

          <p className="font-bold">Working Hours: 8 AM - 8 PM</p>

          <p className="hidden md:block font-bold">
            Call us to book service! 7499741546
          </p>

          <div className="flex gap-3 text-lg">
            <FaFacebook className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-12 h-12" />

            <div>
              <h1 className="font-bold text-blue-700 text-lg">
                AQUA Guru Service Center
              </h1>

              <p className="text-xs tracking-widest text-gray-600">
                RO - Water Purifier
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Phone Button */}
          <div className="hidden lg:block">
            <a
              href="tel:7499741546"
              className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
            >
              📞 Book Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">

              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/contact">Contact</Link></li>

              <a
                href="tel:7499741546"
                className="bg-blue-700 text-white text-center py-2 rounded-lg"
              >
                📞 Book Call
              </a>

            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}