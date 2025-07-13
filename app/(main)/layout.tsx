"use client";
import AppProvider from "@/context/AppProvider";
import React from "react";
import { Navbar, Footer } from "@/components/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppProvider>
        <QueryClientProvider client={new QueryClient()}>
          <div className=" relative">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </QueryClientProvider>
      </AppProvider>
    </div>
  );
}

export default MainLayout;
