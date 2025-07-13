import React from "react";
import { freight, parkage, ecommerce, delivery } from "@/assets/photo";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | DeliverySwift",
  description:
    "Find here our indemand services.",
};

function ServicesPage() {
  const services = [
    {
      icon: delivery,
      title: "Express Delivery",
      description:
        "Same-day and next-day delivery services for urgent packages around the world.",
      features: [
        "Same-day delivery",
        "Real-time tracking",
        "SMS notifications",
        "Insurance coverage",
      ],
    },
    {
      icon: parkage,
      title: "Standard Shipping",
      description:
        "Reliable and affordable shipping solutions for businesses and individuals nationwide.",
      features: [
        "2-5 day delivery",
        "Nationwide coverage",
        "Bulk discounts",
        "Package protection",
      ],
    },
    {
      icon: freight,
      title: "Freight Services",
      description:
        "Heavy cargo and bulk shipments with specialized handling and transportation.",
      features: [
        "Heavy cargo handling",
        "Warehouse storage",
        "Custom clearance",
        "Load tracking",
      ],
    },
    {
      icon: ecommerce,
      title: "E-commerce Solutions",
      description:
        "Tailored logistics solutions for online businesses with integration capabilities.",
      features: [
        "API integration",
        "Return management",
        "Cash on delivery",
        "Inventory sync",
      ],
    },
  ];
  return (
    <div className="min-h-[70dvh] bg-gradient-to-b from-yellow-50 to-yellow-50/50 px-4">
      <h1 className="font-bold text-2xl lg:text-3xl text-center pt-4  text-yellow-500">
        Services
      </h1>
      <p className=" text-[18px] text-xl text-neutral-600 max-w-2xl mx-auto text-center mt-1">
        Comprehensive logistics solutions designed to meet all your shipping and
        delivery needs around the world.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
        {services.map((service, index) => (
          <article
            key={index}
            className="border border-gray-200 w-sm lg:w-[300px] 2xl:w-[400px] mx-auto shadow-md rounded p-4 bg-white/50 shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-2 "
          >
            <div className="text-center pb-4">
              <div className="size-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <service.icon className="size-10 text-yellow-300" /> */}
                <Image src={service.icon} width={40} alt="./placeholder.png" />
              </div>
              <div className="text-xl font-bold ">{service.title}</div>
            </div>
            <div className="space-y-4">
              <div className="text-base text-gray-900 text-center">
                {service.description}
              </div>
              <ul className="space-y-2 flex flex-col  justify-center items-center">
                {service.features.map(
                  (feature: string, featureIndex: number) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-logistics-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
