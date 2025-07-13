import { Box, Package, Package2, Truck } from 'lucide-react';
import { services, contact, about, home, refund } from './photo';
import {socialMediaPhotos} from './photo'
export const myMetaData = {
  title: "Delivery Swift",
  email: 'infodeliveryswift@gmail.com',
  phone: '+1 (423) 281 8396',
  description: "Your one-stop solution for all delivery needs.",
  keywords: ["delivery", "logistics", "shipping"],
  author: "Your Company Name",
  viewport: "width=device-width, initial-scale=1",
  address: '471W Hill Rd, Lebanon, New Jersey, USA',
}
export const testimonials = [
  {
    name: "Elton Grace.",
    title: "Small Business Owner",
    text: "Since using this logistics company, my packages arrive faster and my customers are happier. Their service is reliable and professional.",
  },
  {
    name: "Joyce Mop.",
    title: "Online Retailer",
    text: "What I love most is the transparency. I can track every delivery, and their support is top-notch. Highly recommend them for any delivery needs.",
  },
  {
    name: "Kings Apman.",
    title: "Warehouse Manager",
    text: "We've reduced our delivery issues by over 60% since partnering with this company. They’re punctual, efficient, and easy to work with.",
  },
  {
    name: "Collins Smith.",
    title: "eCommerce Seller",
    text: "Handling deliveries used to be a nightmare. Now it's stress-free. These folks know logistics, and it shows in their results.",
  },
  {
    name: "Mohamed Ali.",
    title: "Importer",
    text: "From ports to my warehouse, they handle everything with care and professionalism. I’m impressed with their consistent service.",
  },
];
export const footerLinks = [
  { name: "facebook", href: "https://facebook.com", icon: socialMediaPhotos.facebook },
  { name: "twitter", href: "https://twitter.com", icon: socialMediaPhotos.twitter },
  { name: "youtube", href: "https://youtube.com", icon: socialMediaPhotos.youtube },
  { name: "instagram", href: "https://instagram.com", icon: socialMediaPhotos.instagram },
];
export  const navlinks = [
    { label: 'Home', href: '/', icon: home},
    { label: 'Services', href: '/services', icon: services},
    { label: 'About', href: '/about', icon: about},
    { label: 'Contact', href: '/contact', icon: contact},
    { label: 'Refund', href: '/refund', icon: refund},
  ]
export const adminNavlinks = [
    { label: 'Home', href: '/admin', icon: home},
    { label: 'Orders', href: '/admin/order', icon: services},
  ]
  export const Service = [
    {
      icon: Truck,
      title: "Express Delivery",
      description:
        "Same-day and next-day delivery services for urgent packages across major Nigerian cities.",
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