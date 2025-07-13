"use client";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

function Signup() {
  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormState({ isLoading: true, error: "" });
    try {
      const res = await fetch("/api/sign-up", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("user", data.data);
        localStorage.setItem("token", data.token);
         setFormState({ isLoading: false, error: "" })
        return setFormData({ name: "", email: "", password: "" });
      }
      setFormState({ error: data.error, isLoading: false });
    } catch (ex: unknown) {
      if (ex instanceof Error) {
        setFormState({ isLoading: false, error: ex.message });
      }
      setFormState({ isLoading: false, error: "Error occured signing up." });
    }
  }

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-gray-50 min-h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 w-sm px-4 py-8  rounded shadow"
      >
        <h1 className="text-xl lg:text-2xl text-center mb-8 font-bold">
          Sign up
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            autoComplete="name"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="John Smith"
            required
            maxLength={20}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            autoComplete="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="your@email.com"
            required
            maxLength={30}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            autoComplete="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            id="password"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Your password"
            required
            maxLength={20}
          />
        </div>
        <button
          disabled={formState.isLoading}
          className="py-2.5 w-full bg-black disabled:bg-black/50 font-semibold text-yellow-300 cursor-pointer hover:bg-black/80 rounded shadow mt-4"
        >
          {formState.isLoading ? (
            <span className="animate-pulse">Loading....</span>
          ) : (
            "Sign up"
          )}
        </button>
        <p className="text-center  text-red-500 h-4 mt-1">{formState.error}</p>
      </form>
    </div>
  );
}

export default Signup;
