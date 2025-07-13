import { Package } from "lucide-react";
import React from "react";
import Link from "next/link";

function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        href={"/contact"}
        className="text-lg flex gap-2 cursor-pointer justify-center  hover:bg-yellow-300 items-center border rounded px-4 py-2 border-black/50 hover:border-yellow-300"
      >
        <Package className="h-5 w-5" />
        Ship Now
      </Link>
      <Link
        href={"/track-order"}
        className="text-lg cursor-pointer hover:bg-black/80 bg-black text-yellow-300 text-center ronded px-4 py-2 rounded shadow-md"
      >
        Track Order
      </Link>
    </div>
  );
}

export default HeroCTA;
