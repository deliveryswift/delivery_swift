import React from "react";
import { ContactCard, ContactForm, Newsletters } from "@/components/index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DeliverySwift",
  description: "Contact us to any means.",
};

function ContactPage() {
  return (
    <div className="min-h-[70dvh] bg-gradient-to-b from-yellow-50 to-yellow-50/50">
      <h1 className="text-2xl font-bold text-yellow-400 text-center lg:text-3xl">
        Contact
      </h1>
      <p className="text-center text-neutral-600">
        We are available 24/7, we will reply you instantly
      </p>
      <div className="my-8 flex flex-col lg:flex-row p-4 gap-8 max-w-5xl mx-auto">
        <div className="">
          <ContactForm />
        </div>
        <ContactCard />
      </div>
      <Newsletters />
    </div>
  );
}

export default ContactPage;
