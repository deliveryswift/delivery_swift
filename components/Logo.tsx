import React from "react";

import { Truck } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-black px-1 rounded">
        <Truck className="size-8 lg:size-14 text-yellow-300 " />
      </div>
      <div>
        <p className="font-bold text-[16px] lg:text-lg">
          Delivery
          <span className="text-yellow-300 p-1 rounded bg-black">Swift</span>
        </p>
        <p className="text-xs lg:text-sm text-neutral-600 ">
          Logistics & Delivery
        </p>
      </div>
    </div>
  );
}

export default Logo;
