"use client";
import { AppContext } from "@/context/AppProvider";
import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/ReactQueryClient";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function OrderDetailsCTA({
  orderId,
  status,
}: {
  orderId: string;
  status: string;
}) {
  const { setEditOrder, setEditRefund } = useContext(AppContext)!;
  const router = useRouter()

  async function handleRefundOrder() {
    console.log("Refunding order:", orderId);
    const response = await fetch(
      `/api/activate-refund?trackingNumber=${orderId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    return await response.json();
  }
  async function handleDeleteOrder() {
    const response = await fetch(
      `/api/remove-order?trackingNumber=${orderId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();
    return data;
  }
  const { isPending: isDeleting, mutate: deleteOrder } = useMutation({
    mutationFn: handleDeleteOrder,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [`order`] });
      toast.success(data.message);
      router.push("/admin/order");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { isPending: isRefunding, mutate: refundOrder } = useMutation({
    mutationFn: handleRefundOrder,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [`order-${orderId}`] });
      toast.success(data.message);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  if (isRefunding || isDeleting) {
    return (
      <div className=" grid place-items-center mt-12 p-4 rounded bg-green-100">
        <p className="animate-pulse text-lg lg:text-xl text-green-800 font-bold">
          Processing order...
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 mt-12">
      <button
        onClick={() => setEditOrder(true)}
        className="px-4 py-2 rounded text-sm  cursor-pointer border border-green-300 text-green-800 bg-green-100 hover:bg-green-200"
      >
        Edit Order
      </button>
      <button
        onClick={() => refundOrder()}
        className="px-4 py-2 rounded text-sm  cursor-pointer border border-gray-300 text-gray-800 bg-gray-100 hover:bg-gray-200"
      >
        {status === "Refunding" ? "Cancel Refund" : "Refund Order"}
      </button>
      <button
        onClick={() => setEditRefund(true)}
        className="px-4 py-2 rounded text-sm  cursor-pointer border bg-black text-yellow-300  hover:bg-black/60"
      >
        Edit Refund
      </button>
      <button
        onClick={() => deleteOrder()}
        className="px-4 py-2 rounded text-sm  cursor-pointer border border-red-300 text-red-500 bg-red-100 hover:bg-red-200"
      >
        Delete Order
      </button>
    </div>
  );
}

export default OrderDetailsCTA;
