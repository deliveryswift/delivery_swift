
import { Truck, Package, Clock, Shield } from "lucide-react";
import Link from "next/link";


const About = () => {

  const stats = [
    { number: "50+", label: "Cities Covered", icon: Truck },
    { number: "100K+", label: "Packages Delivered", icon: Package },
    { number: "5 Years", label: "Experience", icon: Clock },
    { number: "99.8%", label: "Success Rate", icon: Shield },
  ];

  return (
    <section id="about" className="py-20 lg:px-14 bg-background bg-gradient-to-b from-yellow-50 to-yellow-50/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                 Most Trusted
                <span className="block text-yellow-300 bg-black p-2 rounded">
                  Logistics Partner
                </span>
              </h2>
              <p className="text-[16px] lg:text-lg text-muted-foreground leading-relaxed text-gray-600">
                Since 2019, DeliverySwift has been revolutionizing the logistics
                industry in the USA. We understand the unique challenges of
                package delivery across our diverse terrain and have built a
                network that ensures your packages reach every corner of the
                country.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-black p-2 rounded-lg flex-shrink-0">
                  <Shield className="size-8 text-yellow-300 " />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Secure & Insured
                  </h3>
                  <p className="text-gray-600">
                    Every package is fully insured and tracked from pickup to
                    delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black p-2 rounded-lg flex-shrink-0">
                  <Clock className="size-8 text-yellow-300 " />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    On-Time Delivery
                  </h3>
                  <p className="text-gray-600">
                    We pride ourselves on meeting delivery commitments with
                    99.8% success rate.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black  p-2 rounded-lg flex-shrink-0">
                  <Truck className="size-8 text-yellow-300 " />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Nationwide Coverage
                  </h3>
                  <p className="text-gray-600">
                    From MN to TX, our network covers all major states
                    and towns.
                  </p>
                </div>
              </div>
            </div>

            <Link href={'/about'} className="cursor-pointer border  py-2 px-4 rounded hover:bg-black/10 hover:border-none">Learn More About Us</Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border-0 shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-logistics-light"
              >
                <div className="p-6 text-center">
                  <div className="bg-black size-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="size-10 text-yellow-300 " />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
