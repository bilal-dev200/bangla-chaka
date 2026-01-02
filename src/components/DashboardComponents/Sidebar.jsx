
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dashboardRoutes from "./routes";
import Image from "next/image";
import { FaTh } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#1D3FAA] h-screen flex flex-col text-white">
      {/* Top section with logo */}
      <div className="p-4 flex flex-col items-center">
        <Image className='object-contain' src="/Images/Carnkey-dashboard-logo.png"  width={200} height={60} />
        <p className="text-xs mt-1 text-center opacity-80">unlock the Drive You Deserve.</p>
      </div>

      {/* User section */}
      <div className="px-4 py-2 flex items-center border-t border-b border-white/20">
        <Image
          src="/user.jpg" // Replace with your image path
          alt="User"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="ml-2 text-sm font-medium">Janet</span>
        <div className="ml-auto flex gap-2 text-xs font-bold">
          <span>5</span>
          <span>A</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-4 gap-1 px-2">
        {dashboardRoutes.map((route) => {
          const isActive = pathname === route.path;
          return (
            <Link
              key={route.path}
              href={route.path}
              className={`flex items-center px-4 py-2 rounded-full gap-3 transition-all duration-150 ${
                isActive
                  ? "bg-white text-[#1D3FAA] font-semibold"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span className="text-lg">{route.icon || <FaTh />}</span>
              <span className="text-sm">{route.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
