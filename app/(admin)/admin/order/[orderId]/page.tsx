"use client";
import React from "react";
import { EditOrder, EditRefund, OrderDetailsCTA } from "@/components/index";
import useOrderQuery from "@/hooks/useQuery";

function OrderDetails({ params }: { params: Promise<{ orderId: string }> }) {
  const orderParams = React.use(params);
  const { orderId } = orderParams;

  const { data, isLoading, isError } = useOrderQuery(orderId);


  if (isLoading)
    return (
      <div className="h-screen grid place-items-center">
        <p className="animate-pulse text-3xl text-yellow-800 font-bold">
          Loading...
        </p>
      </div>
    );
  if (isError)
    return (
      <div className="text-red-600 h-screen grid place-items-center">
        Error loading orders
      </div>
    );

  if (!data || !data.data || data.data.length === 0) {
    return (
      <div className="h-screen grid place-items-center">
        <p className="text-3xl text-red-600 font-bold">
          No Order Found with this ID
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-[75dvh] bg-gradient-to-b max-w-3xl mx-auto from-yellow-50 to-gray-50 p-4">
      <h1 className=" text-xl lg:text-3xl font-bold text-center p-2">
        Order <span className="text-yellow-500">Details</span>
      </h1>
      <section className="border border-gray-300 p-4 rounded">
        <p className="text-lg pb-4">
          Order Ref:{" "}
          <span className="underline">{data?.data[0].trackingNumber}</span>
        </p>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Name:</p>
          <p>{data?.data[0].name}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Email:</p>
          <p>{data?.data[0].email}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">phone:</p>
          <p>{data?.data[0].phone}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Address:</p>
          <p>{data?.data[0].address}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Country:</p>
          <p>{data?.data[0].receivingCountry.toUpperCase()}</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Payment Method:</p>
          <p>{data?.data[0].paymentMethod}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Weight:</p>
          <p>{data?.data[0].packageWeight}Kg</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Amount:</p>
          <p>${data?.data[0].amount.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Sending Country:</p>
          <p>{data?.data[0].sendingCountry.toUpperCase()}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Status:</p>
          <p className={`${data?.data[0].status === "Refunding" ? "text-red-500" : "text-green-600"}`}>{data?.data[0].status}</p>
        </div>
        <div className=" bg-green-50 p-4 rounded border border-green-200 mt-4">
          <p className="text-green-600 mb-3">Order location:</p>
           <div>
            <div className="text-green-800">
              {
              data?.data[0].locations &&  data?.data[0]?.locations.map((location, index) => (
                  <div key={index}>
                    <p>{location.place}</p>
                    <p className="text-xs">{new Date(location.time).toLocaleTimeString()}</p>
                    <div className="min-h-6 border w-1 bg-gray-700 rounded"></div>
            
                  </div>
                ))
                 
              }
            </div>
           </div>
        </div>
        <OrderDetailsCTA orderId={orderId} status={data?.data[0].status} />

        <EditOrder orderId={orderId} />
        <EditRefund orderId={orderId} />
      </section>
    </div>
  );
}

export default OrderDetails;
