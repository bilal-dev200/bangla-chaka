"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/WebsiteComponents/Navbar";
import Footer from "@/components/WebsiteComponents/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isSigninRoute = pathname.startsWith("/sign-in")
  const isRegisterRoute = pathname.startsWith("/register")
  const isUserRegister  = pathname.startsWith("/user-signup")
  const isforgetpassowrd = pathname.startsWith("/forget-password")

  return (
    <>
      {!isRegisterRoute && !isSigninRoute && !isDashboardRoute && !isUserRegister && !isforgetpassowrd &&<Navbar />}
      <main>{children}</main>
      {!isRegisterRoute && !isSigninRoute && !isDashboardRoute && !isUserRegister &&  !isforgetpassowrd && <Footer />}
    </>
  );
}
