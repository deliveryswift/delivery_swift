import { myMetaData } from "@/assets/data";
import React from "react";

function AdminFooter() {
  return (
    <footer className="p-8 bg-black text-white rounded">
      <div className="flex items-center gap-4 justify-around">
        <p>
          {new Date().getFullYear()} <span> </span>
          {myMetaData.title}
        </p>
        <p>@ All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default AdminFooter;
