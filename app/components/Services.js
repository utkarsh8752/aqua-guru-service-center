import React from "react";
import Image from "next/image";

function Services() {
  return (
    <div>
      {/* services section */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-3xl font-bold mb-4">
            Our Reliable RO Water Purifier Service Offerings
          </h2>

          <p className="text-center text-gray-600 mb-12">
            We offer complete RO water purifier services including repair,
            servicing, installation, AMC and filter replacement.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/repair.png"
                alt="RO Repair"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  RO Water Purifier Repair
                </h3>

                <p className="text-gray-600 text-sm">
                  Professional RO repair services for all brands including
                  leakage, bad taste and low water flow issues.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/install.png"
                alt="Installation"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  RO Installation & Uninstallation
                </h3>

                <p className="text-gray-600 text-sm">
                  Safe and professional RO installation and reinstallation
                  service by trained technicians.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/service.png"
                alt="Service"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  RO Servicing & Maintenance
                </h3>

                <p className="text-gray-600 text-sm">
                  Complete RO servicing to improve water quality and extend
                  purifier life.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/filter.png"
                alt="Filter"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  RO Filter Replacement
                </h3>

                <p className="text-gray-600 text-sm">
                  Replace RO filters and membranes with genuine parts for
                  better purification.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/amc.png"
                alt="AMC"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  RO AMC Contract
                </h3>

                <p className="text-gray-600 text-sm">
                  Annual maintenance plans including servicing and filter
                  replacement.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/commercial-image.png"
                alt="Commercial RO"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  Commercial RO System Service
                </h3>

                <p className="text-gray-600 text-sm">
                  Maintenance and repair of commercial and industrial RO
                  water purification systems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;