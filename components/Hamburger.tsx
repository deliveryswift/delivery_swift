"use client";
import React from "react";
import Image from "next/image";
import { menu_open } from "@/assets/photo";

function Hamburger({
  setSidebar,
}: {
  isSidebarOpen: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setSidebar(true)}
        className="md:hidden cursor-pointer "
      >
        <Image src={menu_open} width={30} alt="./placeholder.png" />
      </button>
    </div>
  );
}

export default Hamburger;
