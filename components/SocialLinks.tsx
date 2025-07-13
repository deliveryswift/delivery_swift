"use client";
import React, { useContext } from "react";
import { footerLinks } from "@/assets/data";
import Image from "next/image";
import { AppContext } from "@/context/AppProvider";

function SocialLinks() {
  const { setSidebar } = useContext(AppContext)!;
  return (
    <div className="bg-blac flex ml-8 mt-12 items-center gap-2">
      {footerLinks.map((item) => (
        <a
          onClick={() => setSidebar(false)}
          href={item.href}
          target="blank"
          key={item.name}
          className="border bg-black rounded"
        >
          <Image src={item.icon} width={30} alt="./placeholder.png" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
