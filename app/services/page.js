import React from 'react'
import Services from "../components/Services";

import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";



function page() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center"
          aria-hidden
        ></div>

        <div
          className="absolute inset-0 bg-slate-900/70"
          aria-hidden
        ></div>

        <div className="relative w-full px-4 md:px-10 py-16 md:py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
           Our Services
          </h1>
        </div>
      </section>
      <Services/>

      
      {/* WhatsApp Floating */}
              <a
              href="https://wa.me/917499741546"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition text-3xl z-50 md:flex hidden"
            >
              <FaWhatsapp />
            </a>
      
            {/* Mobile/Tablet - WhatsApp left, Call right, Message in middle */}
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md flex justify-between items-center md:hidden z-50 px-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917499741546"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition text-3xl flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>
      
              {/* Message bubble in middle */}
              <span className="bg-gray-800 text-white px-3 py-2 rounded shadow-lg text-sm whitespace-nowrap">
                Book Your Service, Call Now!
              </span>
      
              {/* Call */}
              <a
                href="tel:+917499741546"
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition text-3xl flex items-center justify-center"
              >
                <FaPhoneAlt />
              </a>
            </div>
    </div>
  )
}

export default page