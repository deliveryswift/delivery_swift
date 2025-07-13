"use client";
import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { OrderType } from "@/models/types";

function Orders() {
  async function fetchOrders(): Promise<{ data: OrderType[] }> {
    const response = await fetch("/api/list-all-orders");
    const data = await response.json();
    return data;
  }
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });
console.log(data);
  if (isLoading)
    return (
      <div className="h-[75dvh] grid place-items-center">
        <p className="animate-pulse text-3xl text-green-800 font-bold">
          Loading...
        </p>
      </div>
    );
  if (isError) return <div>Error loading orders</div>;

  return (
    <div className="min-h-[75dvh] bg-gradient-to-b from-yellow-50 to-gray-50 p-4">
      <h1 className="text-yellow-400 text-xl lg:text-3xl font-bold text-center p-2">
        Orders
      </h1>
      <section className="max-w-4xl mx-auto">
        <Link
          href={"/admin/add-order"}
          className="border px-4 py-2 rounded cursor-pointer bg-black text-yellow-300 border-gray-300 hover:border-black"
        >
          Add order
        </Link>
        <article className="border rounded border-gray-300 p-4 mt-4">
          {data?.data?.length === 0 ? (
            <div className="h-full w-full">
              <h2 className="text-center font-bold text-lg">
                No Order Available
              </h2>
            </div>
          ) : (
            <div>
            {data?.data?.map((item) => (
              <Link
                href={`/admin/order/${item.trackingNumber}`}
                key={item.id}
                className="block"
              >
                <div className="border border-gray-200 px-4 bg-white/50 grid grid-cols-2 gap-8 py-2 cursor-pointer my-1 shadow  hover:bg-gray-800/10 ">
                  <div className="">
                    <p className="text-neutral-500">Name</p>
                    <p>{item.name}</p>
                  </div>

                  <div className="">
                    <p className="text-neutral-500">Country</p>
                    <p>{item.receivingCountry}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          )}
          
        </article>
      </section>
    </div>
  );
}

export default Orders;
