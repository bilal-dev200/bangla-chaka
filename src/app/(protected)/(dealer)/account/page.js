"use client";
import React from "react";
import { useAuthStore } from "@/lib/store/authStore";
import {
    LuUser,
    LuMail,
    LuPhone,
    LuMapPin,
    LuLogOut,
    LuSettings,
    LuShieldCheck,
    LuLayoutDashboard,
    LuCar,
    LuChevronRight,
    LuTrophy,
    LuStore
} from "react-icons/lu";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AccountPage = () => {
    const { user, logout } = useAuthStore();
    const router = useRouter();

    if (!user) {
        if (typeof window !== "undefined") {
            router.push("/sign-in");
        }
        return null;
    }

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Upper Hero Section */}
                <div className="relative mb-12">
                    <div className="h-48 sm:h-64 bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl shadow-slate-200">
                        {/* Animated Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#EB0102] via-slate-900 to-slate-950 opacity-90"></div>

                        {/* Abstract Decor */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EB0102]/20 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-[#EB0102]/30"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800/50 rounded-full blur-[80px] -ml-32 -mb-32"></div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="flex items-center gap-6 sm:gap-8">
                                    <div className="w-24 min-w-24 h-24 sm:w-32 sm:min-w-32 sm:h-32 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center p-1 relative group">
                                        <div className="w-full h-full bg-slate-50 rounded-[1.8rem] flex items-center justify-center text-[#EB0102] overflow-hidden">
                                            <LuStore size={56} className="sm:hidden" />
                                            <LuStore size={80} className="hidden sm:block" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-xl shadow-lg border-4 border-white">
                                            <LuShieldCheck size={20} />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none drop-shadow-md">
                                            {user.dealershipName || user.name || "Dealer Dashboard"}
                                        </h1>
                                        <div className="flex items-center gap-3 mt-4">
                                            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-black text-white uppercase tracking-[0.2em] border border-white/10">
                                                Verified Partner
                                            </span>
                                            <span className="px-4 py-1.5 bg-[#EB0102] rounded-full text-[10px] sm:text-xs font-black text-white uppercase tracking-[0.2em] shadow-lg shadow-red-500/20">
                                                Active Account
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-black rounded-2xl border border-white/20 hover:bg-[#EB0102] hover:border-transparent transition-all duration-500 uppercase tracking-widest text-xs group"
                                >
                                    <LuLogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                                    Secure Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Left Column: Navigation & Quick Actions */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Primary Action Button */}
                        <Link
                            href="/vehicle-form"
                            className="group flex items-center justify-between p-8 bg-[#111827] text-white rounded-[2.5rem] shadow-2xl shadow-slate-200 hover:shadow-red-200 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#EB0102] to-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            <div className="z-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EB0102] mb-2 block">Control Center</span>
                                <h3 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-500 flex items-center gap-3">
                                    Manage <br /> Inventory
                                </h3>
                                <p className="text-slate-500 text-xs mt-3 font-medium group-hover:text-slate-400 transition-colors">List cars, edit sales, view auctions.</p>
                            </div>
                            <div className="w-16 h-16 bg-[#EB0102] rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-10 shrink-0">
                                <LuLayoutDashboard size={28} className="text-white" />
                            </div>
                        </Link>

                        {/* Quick Stats Grid */}
                        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-2 mb-4">Account Overview</h3>

                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform">
                                            <LuCar size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-800 uppercase tracking-tighter">Live Stock</p>
                                            <p className="text-[10px] text-slate-400 font-bold">24 Active Units</p>
                                        </div>
                                    </div>
                                    <LuChevronRight className="text-slate-300 group-hover:text-[#EB0102] transition-colors" />
                                </div>

                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-500 shadow-sm group-hover:scale-110 transition-transform">
                                            <LuTrophy size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-800 uppercase tracking-tighter">Dealer Score</p>
                                            <p className="text-[10px] text-slate-400 font-bold">Top 5% Premium</p>
                                        </div>
                                    </div>
                                    <LuChevronRight className="text-slate-300 group-hover:text-[#EB0102] transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="bg-gradient-to-br from-white to-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-sm text-center">
                            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400">
                                <LuSettings size={28} />
                            </div>
                            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Need Help?</h3>
                            <p className="text-slate-500 text-xs mt-2 font-medium">Connect with your dedicated regional account manager instantly.</p>
                            <button className="w-full mt-6 py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-[#EB0102] transition-all shadow-lg hover:shadow-red-200">
                                Contact Support
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Detailed Info */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-white rounded-[3rem] p-10 sm:p-14 border border-slate-100 shadow-xl shadow-slate-100 relative overflow-hidden group">

                            {/* Decor Icon */}
                            <LuUser className="absolute -right-12 -top-12 text-[15rem] text-slate-50 opacity-50 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-1000 -z-10" />

                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-[#EB0102]/5 rounded-2xl flex items-center justify-center text-[#EB0102]">
                                    <LuUser size={24} />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Business Profile</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-2 group/field">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Legal Entity Name</label>
                                    <div className="bg-slate-50 p-6 rounded-3xl border-2 border-transparent group-focus-within/field:border-[#EB0102]/20 transition-all group-focus-within/field:bg-white">
                                        <p className="text-lg font-black text-slate-800">
                                            {user.dealershipName || (user.firstName ? `${user.firstName} ${user.lastName}` : user.name) || "Not Set"}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2 group/field">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Corporate Email</label>
                                    <div className="bg-slate-50 p-6 rounded-3xl border-2 border-transparent group-focus-within/field:border-[#EB0102]/20 transition-all group-focus-within/field:bg-white flex items-center gap-4">
                                        <LuMail className="text-slate-400" />
                                        <p className="text-lg font-black text-slate-800 truncate">{user.email}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 group/field">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Verified Contact</label>
                                    <div className="bg-slate-50 p-6 rounded-3xl border-2 border-transparent group-focus-within/field:border-[#EB0102]/20 transition-all group-focus-within/field:bg-white flex items-center gap-4">
                                        <LuPhone className="text-slate-400" />
                                        <p className="text-lg font-black text-slate-800">{user.phone || "No primary phone"}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 group/field sm:col-span-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Headquarters Location</label>
                                    <div className="bg-slate-50 p-6 rounded-3xl border-2 border-transparent group-focus-within/field:border-[#EB0102]/20 transition-all group-focus-within/field:bg-white flex items-start gap-4">
                                        <LuMapPin className="text-slate-400 mt-1 shrink-0" />
                                        <p className="text-lg font-black text-slate-800 leading-tight">
                                            {user.businessAddress || user.billing_address || user.address || "No verified address on record"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-slate-100 flex items-center justify-between">
                                <button className="px-10 py-5 bg-[#EB0102] text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-red-100 hover:shadow-slate-200 group flex items-center gap-3">
                                    <LuSettings className="group-hover:rotate-180 transition-transform duration-700" />
                                    Edit Account Data
                                </button>

                                <p className="hidden sm:block text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                                    Last Updated: {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        {/* Secondary Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                    <LuShieldCheck size={32} />
                                </div>
                                <h4 className="text-lg font-black text-slate-900 uppercase">Trust & Safety</h4>
                                <p className="text-slate-500 text-xs mt-3 font-medium">Your dealer identity is fully verified. Compliance score: 98%.</p>
                            </div>

                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                    <LuTrophy size={32} />
                                </div>
                                <h4 className="text-lg font-black text-slate-900 uppercase">Partner Status</h4>
                                <p className="text-slate-500 text-xs mt-3 font-medium">You are currently ranked as a <strong>Silver Merchant</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
