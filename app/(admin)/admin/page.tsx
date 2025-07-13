import React from "react";
import { User } from "@/components/index";

function AdminHome() {
  return (
    <main className="min-h-[100dvh] bg-gradient-to-b from-yellow-50 pt-[20dvh] to-yellow-50/50 py-12 px-8 place-items-center">
      <div>
        <h1 className="text-2xl font-bold lg:text-5xl text-center">
          Delivery <span className="text-yellow-500">Swift</span>
        </h1>
        <h2 className="text-lg lg:text-2xl text-center text-neutral-600">
          Admin Dashboard
        </h2>
        <div className=" grid place-items-center mt-4">
          {" "}
          <User />
        </div>
      </div>
    </main>
  );
}

export default AdminHome;
