"use client";

import { useMutation } from "@tanstack/react-query";

import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

function Refund() {
  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [trackingNumber, setTrackingNumber] = useState("");

  const { data, isPending, isError, mutate } = useMutation({
    mutationFn: async () => {
      const response = await fetch(
        `/api/list-single-order?orderId=${trackingNumber}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.json();
    },
    onSuccess: (data) => {
      if( data.data.success ) {
        toast.success(data.data.message);

      }
      toast.error(data.data.error);
      setTrackingNumber("");
      setFormState({ error: "", isLoading: false });
    },
    onError: (error) => {
      setFormState({ error: error.message, isLoading: false });
      
    },
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    mutate();
  }
  return (
    <div className="min-h-[70dvh] bg-gradient-to-b max-w-3xl mx-auto from-yellow-50 to-gray-50 p-4">
      <h1 className=" text-xl lg:text-3xl font-bold text-center p-2">
        Order <span className="text-yellow-500">Details</span>
      </h1>
      {/* Form */}
      <div className="w-[95%] lg:w-md mt-8 border mx-auto border-gray-300 p-4 rounded">
        <form onSubmit={handleSubmit}>
          <label htmlFor="trackingNumber" className="text-gray-600 block">
            Enter tracking number
          </label>
          <input
            type="text"
            value={trackingNumber}
            required
            maxLength={10}
            onChange={(e) => setTrackingNumber(e.target.value.trim())}
            className="border py-2 px-4 rounded border-gray-300 w-45 lg:w-62"
            placeholder="DS00000000"
          />
          <button
            type="submit"
            disabled={formState.isLoading}
            className=" bg-black text-white px-4 py-2 rounded cursor-pointer hover:black/80 ml-3 disabled:bg-black/50 disabled:cursor-not-allowed"
          >
            {formState.isLoading ? (
              <span className="animate-pulse">Tracking ...</span>
            ) : (
              "Track"
            )}
          </button>
        </form>
      </div>
      ;
      {isPending && (
        <div className="h-[50dvh] grid place-items-center">
          <p className="animate-pulse text-3xl text-yellow-800 font-bold">
            Loading...
          </p>
        </div>
      )}
      {isError && (
        <div className="text-red-600 h-[50dvh] grid place-items-center">
          Error loading orders
        </div>
      )}
      {
      (!data || !data.data || isPending || data.data.length === 0) ? (
        <div className="h-[50dvh] grid place-items-center">
          <p className="text-lg lg:text-2xl text-gray-800-600 font-bold text-center">
            Please enter a valid tracking number
          </p>
        </div>
      ) : (
        <section className=" min-h-[75dvh] ">
          <div className="border border-gray-300 p-4 rounded shadow">
            <p className="text-lg pb-4">
            Order Ref:{" "}
            <span className="underline">{data?.data[0].trackingNumber}</span>
          </p>
         
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Refunding amount:</p>
            <p>${data?.data[0].refundAmount.toFixed(2)}</p>
          </div>
        
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Status:</p>
            <p className="text-red-600">{data?.data[0].status}</p>
          </div>
          </div>
          
         
        </section>
      )}
    </div>
  );
}

export default Refund;
