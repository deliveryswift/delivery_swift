"use client";
import React, { FormEvent, useContext, useState } from "react";
import { close } from "@/assets/photo";
import Image from "next/image";
import { AppContext } from "@/context/AppProvider";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/ReactQueryClient";
import { toast } from "react-toastify";

function EditRefund({ orderId }: { orderId: string }) {
  const { setEditRefund, showEditRefund } = useContext(AppContext)!;
  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [amount, setAmount] = useState(0);

  async function changeRefund() {
    const res = await fetch(`/api/edit-refund?trackingNumber=${orderId}`, {
      method: "PUT",
      body: JSON.stringify(amount),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return res.json();
  }
  const { isPending, mutate } = useMutation({
    mutationFn: changeRefund,
    onError: (error: Error) => {
      setFormState({ error: error.message, isLoading: false });
    },
    onSuccess: (data) => {
      setAmount(0);
      queryClient.invalidateQueries({ queryKey: [`order-${orderId}`] });
      toast.success(data.message);
      setEditRefund(false);
    },
  });

  async function handleSumbit(event: FormEvent) {
    event.preventDefault();
    mutate();
  }
  return (
    <div
      className={`${
        showEditRefund ? "fixed" : "hidden"
      } inset-0 bg-black/80 grid place-items-center `}
    >
      <form
        onSubmit={handleSumbit}
        className="border border-gray-300 rounded py-4 px-8 bg-white w-sm  relative"
      >
        <button
          type="button"
          onClick={() => setEditRefund(false)}
          className="absolute top-4 right-4 cursor-pointer hover:bg-gray-200 p-1"
        >
          <Image src={close} alt="./placeholder.png" width={25} />
        </button>
        <h1 className="text-lg font-semibold lg:text-2xl text-center mb-4">
          Change Price
        </h1>
        <div className="mb-4">
          <label htmlFor="amount" className="block">
            New price
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number.parseInt(e.target.value))}
            className="border border-gray-300 px-4 py-2 rounded w-full"
            placeholder="$300"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-black px-4 py-2.5 mt-8 disabled:bg-black/60 rounded text-yellow-300 w-full cursor-pointer hover:bg-black/80"
        >
          {formState.isLoading ? (
            <span className="animate-pulse">Adding....</span>
          ) : (
            "Change amount"
          )}
        </button>
        <p className="h-4  text-red-500 text-center my-1">{formState.error}</p>
      </form>
    </div>
  );
}

export default EditRefund;
