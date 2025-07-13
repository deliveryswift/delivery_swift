"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/ReactQueryClient";
import { useRouter } from "next/navigation";

function AddOrder() {
  const router = useRouter();
  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    receivingCountry: "",
    amount: 0.0,
    paymentMethod: "",
    packageWeight: 0.0,
    sendingCountry: "",
    locations: { place: "", time: new Date() },
  });
  function clearForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      receivingCountry: "",
      amount: 0.0,
      paymentMethod: "",
      packageWeight: 0.0,
      sendingCountry: "",
      locations: { place: "", time: new Date() },
    });
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }

  async function PostData() {
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: { "Content-Type": "application.json" },
      });
      const data = await res.json();
      if (data.success) {
        clearForm();
      }
      return data;
    } catch (ex) {
      if (ex instanceof Error) {
        setFormState({ error: ex.message, isLoading: false });
      }
      console.log(ex);
      setFormState({ isLoading: false, error: "Error Adding Orders" });
    }
  }
  const { isPending, mutate } = useMutation({
    mutationFn: PostData,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      router.push("/admin/order");
    },
  });
  async function handleSumbit(event: FormEvent) {
    event.preventDefault();
    mutate();
  }
  return (
    <div className="min-h-screen my-4 grid mt-12 ">
      <form
        onSubmit={handleSumbit}
        className="border border-gray-300 rounded h-130 shadow-sm p-4 text-sm min-w-sm mx-auto"
      >
        <h1 className="text-center text-xl lg:text-2xl font-bold mb-4 mt-2">
          Create Order
        </h1>
        <div className="flex gap-2 mb-4">
          <div className="w-45">
            <label htmlFor="name" className="text-neutral-600 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={50}
              placeholder="Myrima Tabs"
              className="border px-4 py-2 w-full rounded border-gray-300"
            />
          </div>
          <div className="w-45">
            <label htmlFor="name" className="text-neutral-600 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={50}
              placeholder="myrimatabs@email.com"
              className="border w-full px-4 py-2 rounded border-gray-300"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="w-45">
            <label htmlFor="phone" className="text-neutral-600 block">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength={50}
              placeholder="+1 323 4422 2323"
              className="border w-full px-4 py-2 rounded border-gray-300"
            />
          </div>
          <div className="w-45">
            <label htmlFor="address" className="text-neutral-600 block">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
              maxLength={50}
              placeholder="122 Rd Texas"
              className="border w-full px-4 py-2 rounded border-gray-300"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="w-45">
            <label htmlFor="country" className="text-neutral-600 block">
              Recieving Country
            </label>
            <input
              type="text"
              id="receivingCountry"
              value={formData.receivingCountry}
              onChange={handleChange}
              required
              maxLength={50}
              placeholder="Canada"
              className="border w-full px-4 py-2 rounded border-gray-300"
            />
          </div>
          <div className="w-45">
            <label htmlFor="paymentMethod" className="text-neutral-600 block">
              Payment Method
            </label>
            <input
              type="text"
              id="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              maxLength={50}
              placeholder="Visa"
              className="border w-full px-4 py-2 rounded border-gray-300"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="w-45">
            <label htmlFor="amount" className="text-neutral-600 block">
              Amount ($)
            </label>
            <input
              type="number"
              id="amount"
              required
              maxLength={50}
              value={formData.amount}
              onChange={handleChange}
              placeholder="$40.00"
              className="border w-full px-4 py-2 rounded border-gray-300"
            />
          </div>
          <div className="w-45">
            <label htmlFor="weight" className="text-neutral-600 block">
              Parkage Weight (kg)
            </label>
            <input
              type="number"
              id="packageWeight"
              required
              maxLength={50}
              value={formData.packageWeight}
              onChange={handleChange}
              placeholder="23.0kg"
              className="border w-full px-4 py-2 rounded border-gray-300"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="w-45">
            <label htmlFor="sendingCountry" className="text-neutral-600 block">
              Sending Country
            </label>
            <input
              type="text"
              required
              maxLength={50}
              id="sendingCountry"
              value={formData.sendingCountry}
              onChange={handleChange}
              placeholder="US"
              className="border w-full px-4 py-2 rounded border-gray-300"
            />
          </div>
          <div className="w-45">
            <label htmlFor="sendingCountry" className="text-neutral-600 block">
              Current parkage location
            </label>
            <input
              type="text"
              required
              maxLength={50}
              id="locations"
              value={formData.locations.place}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  locations: { ...formData.locations, place: e.target.value },
                })
              }
              placeholder="Atlanta airport"
              className="border w-full px-4 py-2 rounded border-gray-300"
            />
          </div>
        </div>

        <button
          disabled={isPending}
          className="bg-black disabled:bg-black/80 text-yellow-300 px-4 cursor-pointer hover:bg-black/70 py-2.5 rounded  w-full font-semibold"
        >
          {isPending ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            "Add Order"
          )}
        </button>
        <p className="text-red-500 h-4 text-center mt-1">{formState.error}</p>
      </form>
    </div>
  );
}

export default AddOrder;
