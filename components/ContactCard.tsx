import React from "react";
import Image from "next/image";
import { myMetaData } from "@/assets/data";
import { phone, email, address } from "@/assets/photo";

function ContactCard() {
  return (
    <div className="bg-white/50 border border-gray-300 shadow-md p-8 rounded-xl">
      <h3 className="text-xl font-bold mb-4">Need Urgent Help?</h3>
      <p className="mb-6 text-neutral-600">
        Our customer support team is available 24/7 to assist you with all your
        logistics needs.
      </p>
      <div className="space-y-2 text-sm  ">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded">
          <Image src={phone} alt="./placeholder.png" width={20} />
          <p> {myMetaData.phone}</p>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded">
          <Image src={email} alt="./placeholder.png" width={20} />
          <a href={`mailto:${myMetaData.email}`}> {myMetaData.email}</a>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded">
          <Image src={address} alt="./placeholder.png" width={20} />
          <p> {myMetaData.address}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
