"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { LuUser, LuLogOut } from "react-icons/lu";
import GoogleTranslate from "./GoogleTranslate";
import { useAuthStore } from "@/lib/store/authStore";
const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const cleanedPath = pathname?.replace(/\/+$/, "").toLowerCase();
  const isHomePage = cleanedPath === "";
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();

  return (
    <header className="w-full z-50 relative ">
      {/* 🔝 Top Bar */}
      <div
        className={`w-full text-[11px] sm:text-xs md:text-sm  ${isHomePage
          ? "absolute bg-transparent text-white"
          : "relative bg-white text-black border-b border-gray-200"
          }`}
      >

        <div className="relative mx-8">
          {/* Fading bottom line */}
          <div className="absolute bottom-0 right-20 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-0" />

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-end divide-x divide-gray-300 text-xs sm:text-sm relative z-10">
            {/* <Link
              href="/car-xray"
              className="hover:underline hidden sm:inline px-3 py-2"
            >
              Car X-ray
            </Link>
            <Link
              href="/car-comparison"
              className="hover:underline hidden sm:inline px-3 py-2"
            >
              Car Comparison
            </Link> */}
            {user ? (
              <Link
                href=""
                className="hover:underline hidden sm:inline px-3 py-2 font-semibold text-[#EB0102]"
              >
                {user.dealershipName || user.name || (user.firstName ? `${user.firstName} ${user.lastName || ""}` : "Account")}
              </Link>
            ) : (
              <Link
                href="/register"
                className="hover:underline hidden sm:inline px-3 py-2"
              >
                Become a Dealer
              </Link>
            )}
            <Link
              href="/VehicleForm"
              className="hidden sm:inline px-3 py-2 font-medium text-white bg-[#EB0102] border-r border-b"
            >
              Your Garage
            </Link>
          </div>
        </div>
      </div>

      {/* 🔽 Main Navigation */}
      <div
        className={`w-full ${isHomePage
          ? "absolute top-[30px] md:top-[40px] left-0 bg-transparent text-white"
          : "relative bg-white text-black"
          }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <div className="flex items-center">
            {/* <Image
              src={isHomePage ? "/Images/CarNKeyLogo.png" : "/Images/CarNKeyLogoBlack.png"}
              width={140}
              height={40}
              alt="CarNKeyLogo"
              className="object-contain max-w-[140px] w-full"
            /> */}
            <Image
              src={
                isHomePage
                  ? "/Images/bangla.png"
                  : "/Images/bangla.png"
              }
              width={180}
              height={140}
              alt="CarNKeyLogo"
              className="object-contain"
              priority
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <GoogleTranslate isHomePage={isHomePage} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`font-inter hidden md:flex flex-wrap items-center space-x-5 lg:space-x-7 text-[16px] ${isHomePage ? "text-white" : "text-black"
              }`}
          >
            <Link href="/" className="relative">
              Home
              {/* {isHomePage && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#EB0102] rounded-full"></span>
              )} */}
            </Link>
            <Link href="/cars-for-sale">Cars for Sale</Link>
            {/* <Link href="/new-cars">New Cars</Link> */}

            {/* <div className="relative group">
              <Link href="#" className="flex items-center">
                Services <span className="ml-1">▼</span>
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40 text-black z-50">
                <Link
                  href="/services/service1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  href="/services/service2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            </div>  */}
            <Link href="/cars-for-sale">New Cars</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/trade-in">Trade In</Link>
             {/* <Link href="/financing">Financing</Link> */}
            {/* <Link href="/financing">Financing</Link> */}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <GoogleTranslate isHomePage={isHomePage} />

            {/* <Link
              href="/sign-in"
              className={`flex items-center gap-2 px-4 py-2 border rounded ${
                isHomePage
                  ? "text-white border-white"
                  : "text-black border-gray-400"
              }`}
            >
              <LuUser 
              size={18}
                className={isHomePage ? "text-white" : "text-black"}
              />
              Sign in/register
            </Link> */}
            {user ? (
              <button
                onClick={() => {
                  logout();
                  router.push("/"); // logout ke baad redirect
                }}
                className={`flex items-center gap-2 px-4 py-2 border rounded ${isHomePage
                  ? "text-white border-white"
                  : "text-black border-gray-400"
                  }`}
              >
                <LuUser
                  size={18}
                  className={isHomePage ? "text-white" : "text-black"}
                />
                Logout
              </button>
            ) : (
              <Link
                href="/sign-in"
                className={`flex items-center gap-2 px-4 py-2 border rounded-xl ${isHomePage
                  ? "text-white border-white"
                  : "text-black border-gray-400"
                  }`}
              >
                <LuUser
                  size={18}
                  className={isHomePage ? "text-white" : "text-black"}
                />
                Sign in / Register
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white text-black px-4 pt-3 pb-6 space-y-3 shadow-md z-[60] overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <FiX />
            </button>
          </div>

          <Link href="/" className="block">Home</Link>
          <Link href="/cars-for-sale" className="block">Cars for Sale</Link>
          <Link href="/new-cars" className="block">New Cars</Link>

          <div>
            <span className="block font-medium">Services</span>
            <div className="ml-4 space-y-2">
              <Link href="/services/service1" className="block">Service 1</Link>
              <Link href="/services/service2" className="block">Service 2</Link>
            </div>
          </div>

          <Link href="/blog" className="block">Blog</Link>
          <Link href="/trade-in" className="block">Trade In</Link>
          <Link href="/financing" className="block">Financing</Link>
          {user ? (
            <>
              <Link href="/account" className="block font-semibold text-[#EB0102]" onClick={() => setMenuOpen(false)}>
                {user.dealershipName || user.name || (user.firstName ? `${user.firstName} ${user.lastName || ""}` : "Account")}
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                  router.push("/");
                }}
                className="flex items-center gap-2 w-full text-left font-medium text-gray-700"
              >
                <LuLogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/register" className="block" onClick={() => setMenuOpen(false)}>Become a Dealer</Link>
              <Link href="/sign-in" className="block" onClick={() => setMenuOpen(false)}>Sign in / Register</Link>
            </>
          )}
        </div>
      )}

    </header>
  );
};

export default Navbar;
