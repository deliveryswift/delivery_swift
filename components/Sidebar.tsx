"use client";

import React from "react";
import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { close } from "@/assets/photo";
import { SocialLinks } from "./index";

interface NavlinksTypes {
  label: string;
  icon: StaticImageData;
  href: string;
}
function Sidebar({
  isSidebarOpen,
  setSidebar,
  navlinks,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>,
  navlinks: NavlinksTypes[],
  isSidebarOpen: boolean,
}) {
  return (
    <aside
      className={` ${
        isSidebarOpen ? "fixed" : "hidden"
      } lg:hidden  right-0 left-0 top-0 min-h-105 z-50 bg-yellow-50 border border-gray-300 `}
    >
      <button
        onClick={() => setSidebar(false)}
        className="absolute top-8 right-8 cursor-pointer"
      >
        <Image src={close} alt="./placeholder.png" width={30} />
      </button>
      <ul className="p-4 ">
        {navlinks?.map((item) => (
          <li
            onClick={() => setSidebar(false)}
            key={item.label}
            className="my-2 py-2 px-4 rounded  w-2/5 hover:bg-gray-100"
          >
            <Link href={item.href} className="flex gap-4 items-center">
              <Image src={item.icon} alt="./placeholder.png" width={30} />
              <p className="text-neutral-700">{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
      <SocialLinks />
    </aside>
  );
}

export default Sidebar;
