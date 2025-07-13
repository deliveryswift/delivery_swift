"use client";
import React, { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/AppProvider";

function Login() {
  const { setUser } = useContext(AppContext)!
  const router = useRouter()
  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [formData, setFormData] = useState({ email: "", password: "" });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormState({ isLoading: true, error: "" });
    try {
      const res = await fetch("/api/sign-in", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("user", JSON.stringify(data.data));
        localStorage.setItem("token", data.token);
        setUser(data.data)
        setFormState({ error: '', isLoading: false });
         setFormData({ email: "", password: "" })
         router.push('/admin/order')
      }
      setFormState({ error: data.error, isLoading: false });
    } catch (ex: unknown) {
      if (ex instanceof Error) {
        setFormState({ isLoading: false, error: ex.message });
      }
      setFormState({ isLoading: false, error: "Error occured logging in." });
    } 
  }

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-gray-50 min-h-screen grid place-items-cente">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 min-w-[350px] px-4 py-8 h-100 mt-24 mx-auto rounded shadow"
      >
        <h1 className="text-xl lg:text-2xl text-center mb-8 font-bold">
          Login
        </h1>
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
            "Login"
          )}
        </button>
        <p className="text-center  text-red-500 h-4 mt-1">{formState.error}</p>
      </form>
    </div>
  );
}

export default Login;
