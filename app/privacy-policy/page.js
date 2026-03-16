import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function Page() {
  return (
    <div>
    <main className="bg-slate-50 min-h-screen pb-16">
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
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Policy body */}
      <section className="w-full px-8 md:px-16 pt-12 space-y-8 text-slate-800 text-left">
        <p className="leading-relaxed">
          At <span className="font-semibold">Aqua Smart RO Services</span>, we value your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your data when you use our services or visit our website.</p>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
          <p className="leading-relaxed">
            We may collect personal details such as your name, phone number, address, and service-related information when you contact us, book a service, or submit an inquiry.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide RO repair and servicing solutions</li>
            <li>Schedule appointments and customer support</li>
            <li>Improve service quality and customer experience</li>
            <li>Communicate service updates, offers, or support details</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Data Protection</h2>
        <p className="leading-relaxed">
          We follow strict security measures to protect your personal information from unauthorized access, misuse, or disclosure. Your data is handled responsibly and confidentially.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">Information Sharing </h2>
        <p className="leading-relaxed">
          We do not sell, trade, or share your personal information with third parties, except when required to deliver our services or comply with legal obligations.

        </p>

        <h2 className="text-2xl font-bold text-slate-900">Consent</h2>
        <p className="leading-relaxed">
          By using our services, you agree to the collection and use of information as outlined in this policy.


        </p>

        <h2 className="text-2xl font-bold text-slate-900">Policy Updates</h2>
        <p className="leading-relaxed">
          Aqua Smart RO Services may update this Privacy Policy from time to time. Any changes will be reflected on this page.

        </p>



      </section>
      
    </main>
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
