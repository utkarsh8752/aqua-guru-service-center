import React from "react";
import Image from "next/image";
import Aboutservices from "../components/Aboutservices";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";



import Bookservice from "../components/Bookservice";


function Page() {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative h-[250px] flex items-center justify-center">
        <Image
          src="/hero.png"
          alt="About background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative text-white text-5xl font-bold">
          About Us
        </h1>
      </section>

      {/* Mission / Vision Section */}
      <Aboutservices />

      {/* Numbers Speak Section (LAST) */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-4">Numbers Speak</h2>
          <div className="w-16 h-1 bg-gray-300 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 border border-white/30">

            <div className="p-10 border-r border-white/30">
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="mt-4">Years of experience</p>
              <div className="w-10 h-1 bg-gray-300 mx-auto mt-6"></div>
            </div>

            <div className="p-10 border-r border-white/30">
              <h3 className="text-5xl font-bold">5,000+</h3>
              <p className="mt-4">Happy Customers served</p>
              <div className="w-10 h-1 bg-gray-300 mx-auto mt-6"></div>
            </div>

            <div className="p-10 border-r border-white/30">
              <h3 className="text-5xl font-bold">30-</h3>
              <p className="mt-4">Minute fast doorstep service</p>
              <div className="w-10 h-1 bg-gray-300 mx-auto mt-6"></div>
            </div>

            <div className="p-10">
              <h3 className="text-5xl font-bold">24/7</h3>
              <p className="mt-4">Service Support</p>
              <div className="w-10 h-1 bg-gray-300 mx-auto mt-6"></div>
            </div>

          </div>

        </div>
      </section>

      {/* Mission / Vision / Goal / Team / Commitment cards */}

<section className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

    {/* Card 1 */}
    <div className="bg-white p-8 rounded-2xl border text-center">
      <div className="w-14 h-14 bg-blue-700 text-white flex items-center justify-center mx-auto mb-6">
        🎯
      </div>
      <h3 className="text-xl font-bold mb-4">Our Mission</h3>
      <p className="text-gray-600 text-sm">
        Our mission is to deliver reliable, affordable, and high-quality RO water purifier services
        that ensure safe drinking water. We aim to exceed customer expectations through expert
        service, genuine parts, and prompt doorstep support every time.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-8 rounded-2xl border text-center">
      <div className="w-14 h-14 bg-blue-700 text-white flex items-center justify-center mx-auto mb-6">
        👁️
      </div>
      <h3 className="text-xl font-bold mb-4">Our Vision</h3>
      <p className="text-gray-600 text-sm">
        Our vision is to become the most trusted RO water purifier service provider by setting
        high standards in quality, reliability, and customer satisfaction.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-8 rounded-2xl border text-center">
      <div className="w-14 h-14 bg-blue-700 text-white flex items-center justify-center mx-auto mb-6">
        ⭐
      </div>
      <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
      <p className="text-gray-600 text-sm">
        Our core values focus on honesty, quality service, customer satisfaction,
        and reliability with transparent pricing and timely service.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-8 rounded-2xl border text-center">
      <div className="w-14 h-14 bg-blue-700 text-white flex items-center justify-center mx-auto mb-6">
        🎯
      </div>
      <h3 className="text-xl font-bold mb-4">Our Goal</h3>
      <p className="text-gray-600 text-sm">
        Our goal is to provide fast, affordable, and dependable RO water purifier services
        ensuring every customer receives pure and safe drinking water.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-white p-8 rounded-2xl border text-center">
      <div className="w-14 h-14 bg-blue-700 text-white flex items-center justify-center mx-auto mb-6">
        👨‍🔧
      </div>
      <h3 className="text-xl font-bold mb-4">Our Team</h3>
      <p className="text-gray-600 text-sm">
        Our team consists of skilled and experienced RO technicians dedicated
        to delivering reliable repair and servicing solutions.
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-white p-8 rounded-2xl border text-center">
      <div className="w-14 h-14 bg-blue-700 text-white flex items-center justify-center mx-auto mb-6">
        🤝
      </div>
      <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
      <p className="text-gray-600 text-sm">
        Our commitment is to deliver honest, high-quality RO water purifier services
        with genuine parts and prompt doorstep support.
      </p>
    </div>

  </div>
</section>
<Bookservice/>


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
  );
}

export default Page;