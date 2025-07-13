"use client";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

function Newsletter() {
  const [email, setEmail] = useState("");
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    toast.success("Subscribed successfully");
    setEmail("");
  }
  return (
    <div className="border border-gray-300 rounded p-4 w-sm mx-auto my-8 bg-white shadow">
      <form onSubmit={handleSubmit} className=" fle items-center gap-4">
        <h1 className="">Subscribe to our Newsletter</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 px-4 rounded border-gray-300 ml-4"
          placeholder="example@email.com"
        />
        <button className="bg-black mt-4  text-yellow-300 py-2 px-4 text-sm rounded shadow">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
