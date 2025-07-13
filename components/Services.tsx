'use client'
import { redirect } from 'next/navigation'
import { Box, LucideProps, Package, Package2, Truck } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
  type Feature = string[]
  interface ServicesType {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
    features: Feature
  }

const Services = () => {


const services = [
    {
      icon: Truck,
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
      icon: Package,
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
      icon: Box,
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
      icon: Package2,
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
    <section id="services" className="py-20 bg-gradient-to-b from-yellow-50 to-yellow-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-yellow-300 bg-black p-2 rounded">Services</span>
          </h2>
          <p className=" text-[18px] text-xl text-neutral-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions designed to meet all your shipping
            and delivery needs around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service: ServicesType, index) => (
            <article
              key={index}
              className="border border-gray-200 shadow-md rounded p-4 bg-white/50 shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-background"
            >
              <div className="text-center pb-4">
                <div className="size-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="size-10 text-yellow-300" />
                </div>
                <div className="text-xl font-bold ">{service.title}</div>
              </div>
              <div className="space-y-4">
                <div className="text-base text-gray-900 text-center">
                  {service.description}
                </div>
                <ul className="space-y-2 flex flex-col  justify-center items-center">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-logistics-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                onClick={() => redirect('/services')}
                className="px-4 py-2 rounded cursor-pointer hover:scale-x-110 mt-4 border border-gray-300 mx-auto flex">
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
