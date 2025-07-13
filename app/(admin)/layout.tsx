"use client";
import AppProvider from "@/context/AppProvider";
import React from "react";
import { AdminNavbar, AdminFooter } from "@/components/index";
import { queryClient } from "@/lib/ReactQueryClient";
import {  QueryClientProvider } from "@tanstack/react-query";



function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <div className=" relative bg-gradient-to-b from-yellow-50 to-gray-50">
            <AdminNavbar />
            {children}
            <AdminFooter />
          </div>
        </QueryClientProvider>
      </AppProvider>
    </div>
  );
}

export default AdminLayout;
