"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { Logo, Navlinks, Hamburger, Sidebar } from "@/components/index";
import { AppContext } from "@/context/AppProvider";
import { navlinks } from "@/assets/data";

function Navbar() {
  const { showSidebar, setSidebar } = useContext(AppContext)!;
  return (
    <header className=" p-4  rounded bg-gradient-to-t from-yellow-50 to-gray-50  sticky top-0 z-50">
      <nav className="flex justify-between md:justify-around">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="bg-background ">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between gap-28">
              <Navlinks navlinks={navlinks} />

              <Link
                href={"/track-order"}
                className=" hidden md:flex items-center space-x-4"
              >
                <button className="bg-black text-yellow-300 px-4 py-2 cursor-pointer rounded hover:bg-black/80">
                  Track Package
                </button>
              </Link>
              <Hamburger isSidebarOpen={showSidebar} setSidebar={setSidebar} />
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Sidebar
          isSidebarOpen={showSidebar}
          setSidebar={setSidebar}
          navlinks={navlinks}
        />
      </div>
    </header>
  );
}

export default Navbar;
