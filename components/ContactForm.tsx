"use client";
import { Package } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const router = useRouter();
  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickUpLocation: "",
    deliveryLocation: "",
    weight: "",
    value: "",
    description: "",
  });
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormState({ error: "", isLoading: true });
    toast.success("Form submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      pickUpLocation: "",
      deliveryLocation: "",
      weight: "",
      value: "",
      description: "",
    });
    setFormState({ error: "", isLoading: false });
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }
  return (
    <div className="border-0 shadow-elegant bg-white/50">
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded border-gray-300 shadow-sm   max-w-lg"
      >
        <h2 className="text-2xl text-center font-bold my-4">Contact Form</h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Your Name"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border rounded py-2 px-4 border-gray-300 shadow"
            />
            <input
              placeholder="Phone Number"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded py-2 px-4 border-gray-300 shadow"
            />
          </div>
          <input
            placeholder="Email Address"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full rounded py-2 px-4 border-gray-300 shadow"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Pickup Location"
              id="pickUpLocation"
              value={formData.pickUpLocation}
              onChange={handleChange}
              className="border rounded py-2 px-4 border-gray-300 shadow"
            />
            <input
              placeholder="Delivery Location"
              id="deliveryLocation"
              value={formData.deliveryLocation}
              onChange={handleChange}
              className="border rounded py-2 px-4 border-gray-300 shadow"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Package Weight (kg)"
              id="weight"
              value={formData.weight}
              onChange={handleChange}
              className="border rounded py-2 px-4 border-gray-300 shadow"
            />
            <input
              placeholder="Package Value ($)"
              id="value"
              value={formData.value}
              onChange={handleChange}
              className="border rounded py-2 px-4 border-gray-300 shadow"
            />
          </div>
          <textarea
            placeholder="Additional Details"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded w-full py-2 px-4 border-gray-300 shadow"
          />
          <button className="w-full flex bg-black text-yellow-300 gap-2 cursor-pointer rounded py-3 px-4 justify-center items-center">
            <Package className="h-5 w-5" />
            Send
          </button>
          <p className="text-red-500 text-center">{formState.error}</p>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
