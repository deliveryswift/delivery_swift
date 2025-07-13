import { ContactCard, ContactForm } from "./index";
import { Truck, Package, Box } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-logistics-light bg-gradient-to-b from-yellow-50 to-yellow-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get Started{" "}
            <span className="bg-black text-yellow-300 p-1 rounded">Today</span>
          </h2>
          <p className="text-[16px] text-gray-600 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the most reliable logistics service? Get a quote
            or contact us now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />

          <div className="space-y-8">
            <div className="border-0 shadow-elegant bg-background">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-black p-3 rounded-lg">
                    <Truck className="size-10 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Express Delivery
                    </h3>
                    <p className="text-gray-600">
                      Same day & next day delivery
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Perfect for urgent packages and time-sensitive deliveries
                  across major cities.
                </p>
              </div>
            </div>

            <div className="border-0 shadow-elegant bg-background">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-black p-3 rounded-lg">
                    <Package className="size-10 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Standard Shipping
                    </h3>
                    <p className="text-gray-600">Nationwide coverage</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reliable and affordable shipping solutions for businesses and
                  individuals.
                </p>
              </div>
            </div>

            <div className="border-0 shadow-elegant bg-background">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-black p-3 rounded-lg">
                    <Box className="size-10 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Freight Services
                    </h3>
                    <p className="text-muted-foreground text-gray-600">
                      Heavy cargo solutions
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Specialized handling and transportation for bulk shipments and
                  heavy cargo.
                </p>
              </div>
            </div>

            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
