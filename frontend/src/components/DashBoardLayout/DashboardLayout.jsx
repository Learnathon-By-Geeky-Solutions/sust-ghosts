import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const SIDEBAR_WIDTH = 240;

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-screen bg-[#23272f]">
      <Sidebar />
      <main
        className="flex-1 min-h-screen"
        style={{
          marginLeft: SIDEBAR_WIDTH,
          background: "#23272f",
          color: "#fff",
          padding: 0,
          overflow: "auto",
        }}
      >
        {children}
      </main>
    </div>
  );
}