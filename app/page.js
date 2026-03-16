import { FaStar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Bookservice from "./components/Bookservice";
import Aboutservices from "./components/Aboutservices";
import Services from "./components/Services";
import CallbackForm from "./components/CallbackForm";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-[80vh] md:min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 w-full items-center">

          {/* Left Content */}
          <div className="text-white flex flex-col justify-center text-center md:text-left">
            <p className="text-lg mb-4 font-semibold">
              Keeping Your RO Pure and Powerful
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Aqua Guru Ro <br /> Services
            </h1>

            <p className="mb-6">
              Doorstep assistance in 30 minutes, inspections and repairs at
              just ₹199.
            </p>

            <a href="tel:7499741546" className="mx-auto md:mx-0">
              <button className="bg-blue-600 px-6 py-3 rounded text-white hover:bg-blue-700">
                📞 7499741546
              </button>
            </a>
          </div>

          {/* WhatsApp Form */}
          <div className="flex justify-center md:justify-end">
            <CallbackForm />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <Aboutservices />

      {/* SERVICES */}
      <Services />

      {/* PRICING */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-3xl font-bold mb-2">
            Our Pricing
          </h2>

          <p className="text-center mb-12">
            Affordable Pricing, Unmatched Service Quality
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card */}
            {[
              {
                title: "RO Purifier General Service",
                price: "₹299",
                points: [
                  "Filter Deep Cleaning",
                  "Improves Water Taste",
                  "Ensures System Hygiene",
                ],
              },
              {
                title: "RO Filter Change",
                price: "₹499",
                points: [
                  "Enhances Purification Efficiency",
                  "Improves Water Quality",
                  "Prevents Health Risks",
                ],
              },
              {
                title: "RO Repair & Inspection",
                price: "₹199",
                points: [
                  "Detects Hidden Issues",
                  "Restores Optimal Performance",
                  "Prevents Future Breakdowns",
                ],
              },
              {
                title: "RO Installation",
                price: "₹450",
                points: [
                  "Proper System Setup",
                  "Leak-Free Fittings",
                  "Ensures Safe Operation",
                ],
              },
              {
                title: "RO Uninstallation",
                price: "₹299",
                points: [
                  "Safe System Removal",
                  "No Damage Guarantee",
                  "Quick Disconnection Process",
                ],
              },
              {
                title: "Complete AMC Plan",
                price: "₹1999",
                points: [
                  "Scheduled Preventive Service",
                  "Extended System Life",
                  "Priority Customer Support",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>

                <p className="text-gray-500 mb-4">
                  RO/UV/UF Water Purifier
                </p>

                <p className="text-3xl font-bold mb-4">{item.price}</p>

                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  {item.points.map((p, idx) => (
                    <li key={idx}>✔ {p}</li>
                  ))}
                </ul>

                <a href="tel:7499741546">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded">
                    📞 Book Now
                  </button>
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-3xl font-bold mb-12">
            What Clients Say About Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Rating */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <h3 className="text-5xl font-bold">4.9</h3>

              <div className="flex justify-center text-blue-600 mt-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-500 mt-2">(50+ Reviews)</p>

              <p className="mt-6 font-semibold">
                Trusted By Our Clients
              </p>
            </div>

            {/* Testimonial */}
            {[
              { name: "Rashmi D", city: "Mumbai" },
              { name: "Dinesh Singh", city: "Navi Mumbai" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center text-blue-600 mb-3">
                    <span className="font-bold mr-2">4.9</span>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-gray-600">
                    Excellent doorstep service. The technician was
                    knowledgeable and made sure my RO is running
                    perfectly. Highly recommend!
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <Image
                    src="/hero.png"
                    alt="client"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />

                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.city}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative min-h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-4xl px-6 text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Book Your RO Servicing Today
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Schedule expert repair, filter replacement, or maintenance for all RO
            brands.
          </p>

          <a
            href="tel:7499741546"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold"
          >
            <FaPhoneAlt />
            7499741546
          </a>
        </div>
      </section>

      <Bookservice />

      

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
    </>
  );
}
