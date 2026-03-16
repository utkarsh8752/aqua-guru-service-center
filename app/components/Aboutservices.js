import React from 'react'
import Image from "next/image";

function Aboutservices() {
  return (
    <div>
         {/* ABOUT SECTION */}
              <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        
                  {/* Left Text */}
                  <div>
                    <p className="text-blue-600 text-xl font-bold mb-2">
                      About Aqua Guru Service Center
                    </p>
        
                    <h2 className="text-3xl font-bold mb-6">
                      All-Brand RO Water Purifier Services at Your Doorstep
                    </h2>
        
                    <p className="text-gray-600 mb-4">
                      Aqua Smart RO Services is a trusted name for professional RO
                      water purifier repair and service across Mumbai, Navi Mumbai,
                      Thane, Mira Bhayandar,Virar.
                    </p>
        
                    <p className="text-gray-600">
                      We provide all kinds of RO water purifier services for all
                      brands including Kent, Aquaguard, Pureit, Livpure, Blue Star,
                      AO Smith, LG, Whirlpool, Panasonic and more.
                    </p>
        
                    <p className="mt-5 text-gray-600">
                      Our services include RO repair, servicing, filter and membrane
                      replacement, pump repair, installation, reinstallation and AMC.
                    </p>
                  </div>
        
                  {/* Right Image */}
                  <div className="flex justify-center">
                    <Image
                      src="/about.png"
                      alt="RO Service"
                      width={450}
                      height={450}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
        
                </div>
              </section>
    </div>
  )
}


export default Aboutservices;