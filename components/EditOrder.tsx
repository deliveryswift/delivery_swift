"use client";
import React, { FormEvent, useContext, useState } from "react";
import { close } from "@/assets/photo";
import Image from "next/image";
import { AppContext } from "@/context/AppProvider";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/ReactQueryClient";
import { toast } from "react-toastify";

function EditOrder({ orderId }: { orderId: string }) {
  const { setEditOrder, showEditOrder } = useContext(AppContext)!;
  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [formData, setFormData] = useState({ location: "", time: new Date() });

  async function addTransit() {
    const res = await fetch(`/api/edit-order?trackingNumber=${orderId}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return res.json();
  }
  const { isPending, mutate } = useMutation({
    mutationFn: addTransit,
    onError: (error: Error) => {
      setFormState({ error: error.message, isLoading: false });
    },
    onSuccess: (data) => {
      setFormData({ location: "", time: new Date() });
      queryClient.invalidateQueries({ queryKey: [`order-${orderId}`] });
      toast.success(data.message);
      setEditOrder(false);
    },
  });

  async function handleSumbit(event: FormEvent) {
    event.preventDefault();
    mutate();
  }
  return (
    <div
      className={`${
        showEditOrder ? "fixed" : "hidden"
      } inset-0 bg-black/80 grid place-items-center `}
    >
      <form
        onSubmit={handleSumbit}
        className="border border-gray-300 rounded py-4 px-8 bg-white w-sm relative"
      >
        <button
          type="button"
          onClick={() => setEditOrder(false)}
          className="absolute top-4 right-4 cursor-pointer hover:bg-gray-200 p-1"
        >
          <Image src={close} alt="./placeholder.png" width={25} />
        </button>
        <h1 className="text-lg font-semibold lg:text-2xl text-center mb-4">
          Add Transit
        </h1>
        <div className="mb-4">
          <label htmlFor="location" className="block">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 rounded w-full"
            placeholder="Atlanta airport custom"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={formData.time.toISOString().substring(11, 16)}
            onChange={(e) =>
              setFormData({ ...formData, time: new Date(`1970-01-01T${e.target.value}:00`) })
            }
            className="border border-gray-300 px-4 py-2 rounded w-full"
            placeholder="Atlanta airport custom"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-black px-4 py-2.5 disabled:bg-black/60 rounded text-yellow-300 w-full cursor-pointer hover:bg-black/80"
        >
          {formState.isLoading ? (
            <span className="animate-pulse">Adding....</span>
          ) : (
            "Add Transit"
          )}
        </button>
        <p className="h-4  text-red-500 text-center my-1">{formState.error}</p>
      </form>
    </div>
  );
}

export default EditOrder;
