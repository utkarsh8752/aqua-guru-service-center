import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            About Aqua Guru service center!
          </h2>

          <p className="text-sm leading-6">
            Aqua Smart RO Services is a trusted name for professional RO water
            purifier repair and service across Mumbai, Navi Mumbai, Thane,
            Mira Bhayandar,virar.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">

            <a href="https://facebook.com" target="_blank">
              <FaFacebook className="text-xl hover:text-blue-600 cursor-pointer"/>
            </a>

            <a href="https://instagram.com" target="_blank">
              <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer"/>
            </a>

            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-xl hover:text-blue-500 cursor-pointer"/>
            </a>

            <a href="https://wa.me/917499741546" target="_blank">
              <FaWhatsapp className="text-xl hover:text-green-500 cursor-pointer"/>
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/terms">Terms and Conditions</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>

          <ul className="space-y-2 text-sm">
            <li>Water Purifier Repair</li>
            <li>RO – Water Purifier Servicing</li>
            <li>RO – Water Purifier Installation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>

          <p className="text-sm">
            Phone: 
            <a href="tel:7499741546" className="text-blue-600 ml-1">
              +91 7499741546
            </a>
          </p>

          <p className="text-sm mt-2">
            Email: oyoservices44@gmail.com
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-4 text-center text-sm px-4">
        Copyright © 2026 Aqua Guru service center. 
        <br className="sm:hidden"/>
        All rights reserved. Website & Ads Managed by Aqua Guru service center
      </div>

    </footer>
  );
}