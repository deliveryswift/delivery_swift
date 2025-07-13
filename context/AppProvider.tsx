"use client";
import React, { createContext, useEffect, useState } from "react";

type UserType = {
  name: string;
  email: string;
  password?: string;
};
interface ContextType {
  showSidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  adminSidebar: boolean;
  setAdminSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showEditOrder: boolean;
  setEditOrder: React.Dispatch<React.SetStateAction<boolean>>;
  showEditRefund: boolean;
  setEditRefund: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}

export const AppContext = createContext<ContextType | null>(null);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [showSidebar, setSidebar] = useState(false);
  const [adminSidebar, setAdminSidebar] = useState(false);
  const [showEditOrder, setEditOrder] = useState(false);
  const [showEditRefund, setEditRefund] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    function seedUser() {
      const userString = localStorage.getItem("user");
      const storedUser = userString ? JSON.parse(userString) : null;
      if (storedUser) {
        setUser(storedUser);
      }
    }

    seedUser();
    return () => {};
  }, []);

  const values = {
    showSidebar,
    setSidebar,
    adminSidebar,
    setAdminSidebar,
    showEditOrder,
    setEditOrder,
    user,
    setUser,
    showEditRefund,
    setEditRefund,
  };
  return <AppContext value={values}>{children}</AppContext>;
}

export default AppProvider;
