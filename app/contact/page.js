
"use client"
import { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";



export default function Page() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
New RO Service Booking

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Date: ${form.date}
Service: ${form.service}
Issue: ${form.message}
`;

    const whatsappURL = `https://wa.me/917499741546?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10">

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Book RO Service
          </h2>
          <p className="text-slate-500 mt-2">
            Fill the form and our technician will contact you shortly
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Service */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              Service Needed
            </label>
            <select
              name="service"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option>General Service</option>
              <option>Repair</option>
              <option>Filter Change</option>
              <option>New Installation</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              Describe Issue
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Example: Water leakage or bad taste"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-xl shadow-md"
            >
              Book a Visit on WhatsApp
            </button>
          </div>

        </form>

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

    </main>
  );
}