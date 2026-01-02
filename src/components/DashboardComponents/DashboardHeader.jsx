import {
  FaCog,
  FaBell,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <header className="bg-white w-full flex items-center justify-between px-6 py-4 shadow-sm">
      <h1 className="text-xl font-semibold text-[#333]">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#DADADA] rounded-md px-4 py-1 text-sm w-60"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0]" />
        </div>
        <FaCog className="text-gray-600 cursor-pointer" />
        <FaBell className="text-gray-600 cursor-pointer" />
        <Image
          src="/avatar.jpg"
          alt="User"
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
      </div>
    </header>
  );
}
