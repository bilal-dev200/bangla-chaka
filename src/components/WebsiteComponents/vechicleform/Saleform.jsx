"use client";

import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
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
    LuSend,
    LuCar,
    LuPencil
} from "react-icons/lu";

export default function Saleform({ isOpen, onClose, vehicle, onSuccess }) {
    const sale = vehicle?.vehicleSale || vehicle?.vehicle_sale || vehicle?.sale;
    const isEdit = !!sale;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    // Reset form when modal opens or vehicle/sale changes
    useEffect(() => {
        if (isOpen) {
            if (isEdit) {
             reset({
  zipCode: sale?.zipCode || "",
  warranty: sale?.warranty || "",
  message: sale?.description || "",
  address: sale?.address || "",
  sellerNote: sale?.sellerNote || "",
  price: sale?.price || "",
  manufactureYear: sale?.manufactureYear || ""
});

            } else {
                reset({
                    zipCode: "",
                    warranty: "",
                    message: "",
                    address: "",
                    sellerNote: ""
                });
            }
        }
    }, [isOpen, sale, isEdit, reset]);

    const onSubmit = async (data) => {
        if (!vehicle) return;

        // const payload = {
        //     vehicleId: vehicle.id,
        //     mileage: vehicle.mileage || 0,
        //     zipCode: data.zipCode,
        //     price: vehicle.price || 0,
        //     description: data.message,
        //     sellerNote: data.sellerNote,
        //     warranty: data.warranty,
        //     address: data.address
        // };
        const payload = {
            vehicleId: vehicle.id,
            mileage: vehicle.mileage || 0,
            zipCode: data.zipCode,
            price: Number(data.price),
            description: data.message,
            sellerNote: data.sellerNote,
            warranty: data.warranty,
            address: data.address,
            manufactureYear: Number(data.manufactureYear),
        };

        try {
            if (isEdit) {
                await vehicalsApi.updateSale(sale.id, payload);
                toast.success("sell details updated successfully!");
            } else {
                // await vehicalsApi.submitSale(payload);
                // toast.success("Application for sale submitted successfully!");
                await vehicalsApi.submitSale(payload);
toast.success("Application for sell submitted successfully!");

if (onSuccess) onSuccess(); // ✅ notify parent
onClose();
            }
            if (onSuccess) onSuccess();
            onClose();
        } catch (err) {
            console.error(`Error ${isEdit ? 'updating' : 'submitting'} sale:`, err);
            alert(`Failed to ${isEdit ? 'update' : 'submit'} application. Please try again.`);
        }
    };

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
                                        {isEdit ? <LuPencil className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" /> : <LuTag className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />}
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                    </div>
                                    <div>
                                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#EB0102] mb-1.5 block">{isEdit ? 'Live Listing Update' : 'New Marketplace Listing'}</span>
                                        <h2 className="text-2xl font-black tracking-tight leading-none uppercase">Marketplace Ready</h2>
                                        <p className="text-slate-400 text-[10px] font-bold mt-1.5 uppercase tracking-widest flex items-center gap-2">
                                            Dealer Portal <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span> Listing Manager
                                        </p>
                                    </div>
                                </div>

                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-[#EB0102]/10 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800/20 rounded-full -ml-32 -mb-32 blur-2xl"></div>
                            </div>

                            <div className="bg-slate-50/50 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                <div className="p-6 sm:p-8">
                                    {/* Vehicle Summary Card */}
                                    <div className="mb-6 p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm flex items-center gap-5 relative overflow-hidden group">
                                        <div className="w-20 h-14 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-[#EB0102] transition-colors overflow-hidden">
                                            <LuCar className="w-6 h-6 text-slate-200 group-hover:text-[#EB0102] transition-colors" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[7px] font-black uppercase tracking-wider rounded-md">Selected Fleet</span>
                                                <span className="text-[7px] font-black text-[#EB0102] uppercase tracking-widest">Active</span>
                                            </div>
                                            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{vehicle?.vehicleModel?.name}</h3>
                                            <div className="flex items-center gap-2.5 mt-0.5">
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Trim: {vehicle?.trim?.name}</span>
                                                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-[#EB0102]">BDT {vehicle?.price?.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                        {/* Section 1: Logistics */}
                                        <div className="space-y-5">
                                            <div className="flex items-center gap-3">
                                                <div className="h-px flex-1 bg-slate-200"></div>
                                                <h3 className="text-[8px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-2 shrink-0">
                                                    <LuMapPin className="text-[#EB0102] w-3 h-3" /> Marketplace Logistics
                                                </h3>
                                                <div className="h-px flex-1 bg-slate-200"></div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-[8px] font-black text-slate-800 uppercase tracking-[0.2em] ml-2">Area Zip Code</label>
                                                    <div className="relative group/field">
                                                        <LuMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-[#EB0102] transition-colors w-4 h-4" />
                                                        <input
                                                            type="text"
                                                            {...register("zipCode", { required: "Zip Code is required" })}
                                                            className={`w-full pl-11 pr-3 py-2.5 bg-white border-[2px] rounded-xl focus:outline-none transition-all duration-300 font-bold text-slate-700 placeholder:text-slate-200 shadow-sm text-xs
                                                                ${errors.zipCode ? 'border-red-100 focus:border-[#EB0102]' : 'border-slate-50 focus:border-[#EB0102] group-hover/field:border-slate-100'}`}
                                                            placeholder="e.g. 10001"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-[8px] font-black text-slate-800 uppercase tracking-[0.2em] ml-2">Warranty Plan</label>
                                                    <div className="relative group/field">
                                                        <LuShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-[#EB0102] transition-colors w-4 h-4" />
                                                        <input
                                                            type="text"
                                                            {...register("warranty", { required: "Warranty is required" })}
                                                            className={`w-full pl-11 pr-3 py-2.5 bg-white border-[2px] rounded-xl focus:outline-none transition-all duration-300 font-bold text-slate-700 placeholder:text-slate-200 shadow-sm text-xs
                                                                ${errors.warranty ? 'border-red-100 focus:border-[#EB0102]' : 'border-slate-50 focus:border-[#EB0102] group-hover/field:border-slate-100'}`}
                                                            placeholder="e.g. 1 Year Premium"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Section 2: Story & Location */}
                                        <div className="space-y-5">
                                            <div className="flex items-center gap-3">
                                                <div className="h-px flex-1 bg-slate-200"></div>
                                                <h3 className="text-[8px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-2 shrink-0">
                                                    <LuFileText className="text-[#EB0102] w-3 h-3" /> Story & Location
                                                </h3>
                                                <div className="h-px flex-1 bg-slate-200"></div>
                                            </div>

                                            <div className="space-y-5">
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-[8px] font-black text-slate-800 uppercase tracking-[0.2em] ml-2">Marketplace Description</label>
                                                    <div className="relative group/field">
                                                        <LuFileText className="absolute left-4 top-4 text-slate-300 group-focus-within/field:text-[#EB0102] transition-colors w-4 h-4" />
                                                        <textarea
                                                            {...register("message", { required: "Description is required" })}
                                                            className={`w-full pl-11 pr-4 py-3 bg-white border-[2px] rounded-xl focus:outline-none transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-200 shadow-sm min-h-[80px] text-xs
                                                                ${errors.message ? 'border-red-100 focus:border-[#EB0102]' : 'border-slate-50 focus:border-[#EB0102] group-hover/field:border-slate-100'}`}
                                                            placeholder="Highlight the best features of this vehicle..."
                                                        ></textarea>
                                                        {/* HIDDEN FIELDS – UI CHANGE NAHI HOGI */}
                                                        {/* <input
                                                            type="hidden"
                                                            {...register("price")}
                                                            value={vehicle?.price || ""}
                                                        />

                                                        <input
                                                            type="hidden"
                                                            {...register("manufactureYear")}
                                                            value={vehicle?.year || ""}
                                                        /> */}
                                                        <div className="flex flex-col gap-1.5">
  <label className="text-[8px] font-black text-slate-800 uppercase tracking-[0.2em] ml-2">
    Sell Price
  </label>
  <div className="relative group/field">
    <LuTag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-[#EB0102] w-4 h-4" />
    <input
      type="number"
      {...register("price", { required: "Price is required" })}
      className={`w-full pl-11 pr-3 py-2.5 bg-white border-[2px] rounded-xl text-xs font-bold
        ${errors.price ? "border-red-100 focus:border-[#EB0102]" : "border-slate-50 focus:border-[#EB0102]"}`}
      placeholder="e.g. 200000"
    />
  </div>
</div>
<div className="flex flex-col gap-1.5">
  <label className="text-[8px] font-black text-slate-800 uppercase tracking-[0.2em] ml-2">
    Manufacture Year
  </label>
  <div className="relative group/field">
    <LuCar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-[#EB0102] w-4 h-4" />
    <input
      type="number"
      {...register("manufactureYear", { required: "Year is required" })}
      className={`w-full pl-11 pr-3 py-2.5 bg-white border-[2px] rounded-xl text-xs font-bold
        ${errors.manufactureYear ? "border-red-100 focus:border-[#EB0102]" : "border-slate-50 focus:border-[#EB0102]"}`}
      placeholder="e.g. 2021"
    />
  </div>
</div>


                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-[8px] font-black text-slate-800 uppercase tracking-[0.2em] ml-2">Showroom / Store Address</label>
                                                    <div className="relative group/field">
                                                        <LuMap className="absolute left-4 top-4 text-slate-300 group-focus-within/field:text-[#EB0102] transition-colors w-4 h-4" />
                                                        <textarea
                                                            {...register("address", { required: "Address is required" })}
                                                            className={`w-full pl-11 pr-4 py-3 bg-white border-[2px] rounded-xl focus:outline-none transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-200 shadow-sm min-h-[60px] text-xs
                                                                ${errors.address ? 'border-red-100 focus:border-[#EB0102]' : 'border-slate-50 focus:border-[#EB0102] group-hover/field:border-slate-100'}`}
                                                            placeholder="Full address for buyers to visit..."
                                                        ></textarea>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-[7px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Internal Dealer Notes (Private)</label>
                                                    <textarea
                                                        {...register("sellerNote")}
                                                        className="w-full px-4 py-2.5 bg-slate-100 border-[2px] border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-slate-200 transition-all font-medium min-h-[50px] text-slate-500 text-[10px]"
                                                        placeholder="Add private notes for your staff..."
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Footer Buttons */}
                            <div className="p-6 bg-white border-t-2 border-slate-50">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="px-8 py-3.5 bg-slate-100 text-slate-500 rounded-xl font-black uppercase tracking-[0.3em] hover:bg-slate-200 transition-all text-xs"
                                        >
                                            Discard
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-1 flex justify-center items-center gap-2.5 py-3.5 px-8 rounded-xl bg-[#EB0102] text-white text-sm font-black uppercase tracking-[0.3em] shadow-[0_15px_40px_rgba(235,1,2,0.3)] hover:shadow-[0_15px_40px_rgba(235,1,2,0.1)] hover:bg-[#d00102] transition-all disabled:opacity-50 relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">{isSubmitting ? "Syncing..." : (isEdit ? 'Update Listing' : 'Push to Marketplace')}</span>
                                            {!isSubmitting && (isEdit ? <LuPencil className="w-4 h-4 relative z-10" /> : <LuSend className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform duration-500" />)}
                                            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
