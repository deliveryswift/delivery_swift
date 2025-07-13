import { Package, Truck, Clock } from "lucide-react";
import { heroImage } from "@/assets/photo";
import Image from "next/image";
import { HeroCTA } from "@/components/index";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-yellow-50 to-yellow-50/50 lg:px-8"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Fast & <span className="text-yellow-400">Reliable</span>
                <span className="block">Delivery Services</span>
              </h1>
              <p className="text-md lg:text-xl text-neutral-700 max-w-lg ">
                Your trusted logistics partner for seamless delivery solutions.
                Anywhere around the world, we ensure your packages reach their
                destination safely and on time.
              </p>
            </div>

            <HeroCTA />

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center ">
                <div className="bg-black size-16 shadow-md rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="size-10 text-yellow-300" />
                </div>
                <p className="font-semibold text-gray-900 text-2xl">1000+</p>
                <p className="text-sm text-gray-600">Daily Deliveries</p>
              </div>
              <div className="text-center">
                <div className="bg-black size-16 shadow-md rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="h-6 w-6 text-yellow-300" />
                </div>
                <p className="font-semibold text-2xl text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Cities Covered</p>
              </div>
              <div className="text-center">
                <div className="bg-black size-16 shadow-md rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-yellow-300" />
                </div>
                <p className="font-semibold text-gray-900 text-2xl">24/7</p>
                <p className="text-sm text-gray-600">Support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src={heroImage}
                alt="./placeholder.png"
                width={50}
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-300 p-6 rounded-xl shadow-elegant">
                <p className="text-2xl font-bold">99.8%</p>
                <p className="text-sm">On-time Delivery</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 w-72 h-72 bg-logistics-accent/5 rounded-full -z-10"></div>
            <div className="absolute bottom-4 right-4 w-48 h-48 bg-logistics-primary/5 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
