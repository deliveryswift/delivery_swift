import { Truck } from "lucide-react";
import { myMetaData } from "@/assets/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 rounded-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-logistics-accent p-2 rounded-lg">
                <Truck className="h-15 w-14 text-yellow-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Delivery
                  <span className="text-yellow-300 bg-black p-1">Swift</span>
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  Logistics & Delivery
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm text-neutral-400">
              Most trusted logistics partner, delivering excellence across all
              50 states since 2019.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-yellow-300">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70 text-neutral-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-logistics-accent transition-colors"
                >
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-logistics-accent transition-colors"
                >
                  Standard Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-logistics-accent transition-colors"
                >
                  Freight Services
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className="hover:text-logistics-accent transition-colors"
                >
                  E-commerce Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-yellow-300">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70 text-neutral-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-logistics-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="hover:text-logistics-accent transition-colors"
                >
                  Track Package
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-logistics-accent transition-colors"
                >
                  Coverage Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-logistics-accent transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-yellow-300">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70 text-neutral-400">
              <li className="cursor-pointer">{myMetaData.phone}</li>
              <li>
                <a href={`mailto:${myMetaData.email}`}>{myMetaData.email}</a>
              </li>
              <li>{myMetaData.address}</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} {myMetaData.title}. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/70">
              <Link
                href="/privacy-policy"
                className="hover:text-logistics-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-logistics-accent transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-logistics-accent transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
