"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function User() {
  const router = useRouter();
  const { user, setUser } = useContext(AppContext)!;

  async function logout() {
    try {
      const res = await fetch("/api/sign-out", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        router.push("/admin/sign-in");
        return toast.success(data.message);
      }
      toast.warn("Error logging out");
    } catch (ex: unknown) {
      if (ex instanceof Error) {
        toast.error(ex.message);
      }
      toast.error("Error logging out");
    }
  }
  return (
    <div>
      {user ? (
        <button
          onClick={() => {
            localStorage.clear();
            setUser(null);
            logout();
          }}
          className="border border-gray-400 rounded px-4 py-2 cursor-pointer hover:bg-gray-100 trans"
        >
          Log out
        </button>
      ) : (
        <Link
          href={"/admin/sign-in"}
          className={`${
            !user && "hidden"
          } bg-black text-yellow-300 py-2 px-4 rounded cursor-pointer hover:scale-x-105`}
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default User;
