"use client";
import DashboardHeader from "@/components/DashboardComponents/DashboardHeader";
import Sidebar from "@/components/DashboardComponents/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-[#F9F9F9] p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
