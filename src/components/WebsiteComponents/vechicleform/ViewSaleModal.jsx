"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { vehicalsApi } from "@/lib/api/vehical";
import { toast } from "react-toastify";

import {
    LuX,
    LuTag,
    LuMapPin,
    LuShieldCheck,
    LuFileText,
    LuMap,
    LuCar,
    LuCalendar,
    LuPercent
} from "react-icons/lu";
import { Image_URL } from "@/config/constants";

export default function ViewSaleModal({ isOpen, onClose, vehicleId }) {
    const [loading, setLoading] = useState(true);
    const [saleData, setSaleData] = useState(null);
    const [error, setError] = useState(null);

    const getImage = (media) => {
        if (!media?.[0]?.url) return null;
        const url = media[0].url;
        if (url.startsWith('http')) return url;
        return `${Image_URL}${url}`;
    };

    useEffect(() => {
        const fetchSaleDetails = async () => {
            if (!vehicleId || !isOpen) return;

            setLoading(true);
            setError(null);
            try {
                // The API expects the vehicle ID to fetch related sales data
                const response = await vehicalsApi.getSaleDetail(vehicleId);
                setSaleData(response.data);
            } catch (err) {
                console.error("Error fetching sale details:", err);
                setError("Failed to load sale details.");
            } finally {
                setLoading(false);
            }
        };

        fetchSaleDetails();
    }, [vehicleId, isOpen]);

    const vehicle = saleData?.vehicle; // Assuming structure based on API usage

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-[100] overflow-y-auto" onClose={onClose}>
                <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity" />
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-[2rem] text-left overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-white/10 relative z-50">

                            {/* Modal Header */}
                            <div className="bg-[#0F172A] p-6 sm:p-8 text-white relative overflow-hidden border-b-4 border-[#EB0102]">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-[#EB0102] rounded-lg transition-all hover:rotate-90 duration-500 z-20 group"
                                >
                                    <LuX className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </button>

                                <div className="flex items-center gap-5 relative z-10">
                                    <div className="w-14 h-14 bg-[#EB0102] rounded-xl flex items-center justify-center shadow-[0_15px_40px_rgba(235,1,2,0.4)] relative overflow-hidden group">
                                        <LuCar className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                    </div>
                                    <div>
                                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#EB0102] mb-1.5 block">Listing Details</span>
                                        <h2 className="text-2xl font-black tracking-tight leading-none uppercase">Vehicle Snapshot</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50/50 max-h-[70vh] overflow-y-auto custom-scrollbar p-6 sm:p-8">
                                {loading ? (
                                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                                        <div className="w-10 h-10 border-4 border-slate-200 border-t-[#EB0102] rounded-full animate-spin mb-4"></div>
                                        <span className="text-xs font-bold uppercase tracking-widest">Loading Details...</span>
                                    </div>
                                ) : error ? (
                                    <div className="text-center py-20">
                                        <p className="text-red-500 font-bold mb-2">{error}</p>
                                        <button onClick={onClose} className="text-slate-500 text-sm hover:underline">Close</button>
                                    </div>
                                ) : !saleData ? (
                                    <div className="text-center py-20 text-slate-400">
                                        <span className="text-xs font-bold uppercase tracking-widest">No details available</span>
                                    </div>
                                ) : (
                                    <div className="space-y-8">
                                        {/* Vehicle Info Card */}
                                        <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-5">
                                            <div className="w-24 h-24 bg-slate-50 rounded-xl shrink-0 overflow-hidden border border-slate-100">
                                                {getImage(vehicle?.vehicleMedia) ? (
                                                    <img src={getImage(vehicle?.vehicleMedia)} alt={vehicle?.vehicleModel?.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center"><LuCar className="text-slate-300 w-8 h-8" /></div>
                                                )}
                                            </div>
                                            <div className="flex-1 text-center sm:text-left">
                                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{vehicle?.vehicleModel?.name}</h3>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 mb-3">{vehicle?.trim?.name} • {vehicle?.trim?.year}</p>
                                                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold uppercase tracking-wide">VIN: {vehicle?.vin}</span>
                                                    <span className="px-2 py-1 bg-[#EB0102]/10 text-[#EB0102] rounded text-[10px] font-bold uppercase tracking-wide">Plate: {vehicle?.plateNumber}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sale Details Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-white rounded-xl border border-slate-100">
                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2 flex items-center gap-2">
                                                    <LuTag className="text-[#EB0102]" /> Sale Price
                                                </label>
                                                <div className="text-lg font-black text-slate-800">BDT {saleData.price?.toLocaleString() || "N/A"}</div>
                                            </div>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100">
                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2 flex items-center gap-2">
                                                    <LuCalendar className="text-[#EB0102]" /> Manufacture Year
                                                </label>
                                                <div className="text-lg font-black text-slate-800">{saleData.manufactureYear || "N/A"}</div>
                                            </div>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100">
                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2 flex items-center gap-2">
                                                    <LuShieldCheck className="text-[#EB0102]" /> Warranty
                                                </label>
                                                <div className="text-sm font-bold text-slate-700">{saleData.warranty || "N/A"}</div>
                                            </div>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100">
                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2 flex items-center gap-2">
                                                    <LuMapPin className="text-[#EB0102]" /> Zip Code
                                                </label>
                                                <div className="text-sm font-bold text-slate-700">{saleData.zipCode || "N/A"}</div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="p-4 bg-white rounded-xl border border-slate-100">
                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2 flex items-center gap-2">
                                                    <LuFileText className="text-[#EB0102]" /> Marketplace Description
                                                </label>
                                                <p className="text-sm text-slate-600 leading-relaxed">{saleData.description || "No description provided."}</p>
                                            </div>

                                            <div className="p-4 bg-white rounded-xl border border-slate-100">
                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2 flex items-center gap-2">
                                                    <LuMap className="text-[#EB0102]" /> Showroom Address
                                                </label>
                                                <p className="text-sm text-slate-600 leading-relaxed">{saleData.address || "No address provided."}</p>
                                            </div>

                                            {saleData.sellerNote && (
                                                <div className="p-4 bg-slate-100 rounded-xl border border-slate-200">
                                                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Internal Notes</label>
                                                    <p className="text-xs text-slate-500 font-medium font-mono">{saleData.sellerNote}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
