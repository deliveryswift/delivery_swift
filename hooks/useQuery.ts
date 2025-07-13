'use client';
import { OrderType } from "@/models/types";
import { useQuery } from "@tanstack/react-query";

function useOrderQuery(orderId: string) {
  async function fetchOrders(): Promise<{ data: OrderType[] }> {
    const response = await fetch(`/api/list-single-order?orderId=${orderId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    return data;
  }

  return useQuery({
    queryKey: [`order-${orderId}`],
    queryFn: fetchOrders,
  });
}

export default useOrderQuery;