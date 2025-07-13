import { Newsletters } from "@/components/index";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | DeliverySwift",
  description: "Find here our recent jobs.",
};
function CareersPage() {
  return (
    <div className="min-h-[70dvh] ">
      <h1 className="text-3xl text-center font-bold">Careers</h1>
      <div className=" grid place-items-center mt-24">
        <p className="text-lg font-bold">No Jobs Available </p>
        <p className="text-gray-900">
          Subscribe to out newsletter to be informed of latest openings
        </p>
      </div>
      <Newsletters />
    </div>
  );
}

export default CareersPage;
