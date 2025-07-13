"use client";
import React, { FormEvent, useState } from "react";

function FormRefund() {
  const [formState, setFormState] = useState({ isLoading: false, error: "" });
  const [tracking, setTracking] = useState("");

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState({ error: "", isLoading: true });
    console.log(tracking);
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className=" border rounded border-gray-300 w-sm mx-auto p-4 mt-8"
    >
      <div>
        <label htmlFor="trackingNumber" className="block">
          Tracking number
        </label>
        <input
          type="text"
          placeholder="DS-322395034"
          required
          value={tracking}
          maxLength={20}
          onChange={(e) => setTracking(e.target.value)}
          className="px-4 py-2 rounded border-gray-300 border shadow"
        />
        <button
          disabled={formState.isLoading}
          className="bg-black text-yellow-300 disabled:bg-black/50 text-sm px-4 py-2 rounded shadow ml-4 hover:bg-black/80 cursor-pointer"
        >
          {formState.isLoading ? <span className="animate-pulse">Tracking..</span> : "Track"}
        </button>
      </div>
      <p className="text-red-500 text-sm text-center  h-4">{formState.error}</p>
    </form>
  );
}

export default FormRefund;
