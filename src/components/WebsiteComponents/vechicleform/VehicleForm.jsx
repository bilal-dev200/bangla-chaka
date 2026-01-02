"use client";

import React, { useState, useEffect } from "react";
import {
  LuCar,
  LuPlus,
  LuPencil,
  LuTrash2,
  LuView,
  LuTag,
  LuSearch,
  LuRefreshCw,
  LuChevronRight,
  LuChevronLeft
} from "react-icons/lu";
import { vehicalsApi } from "@/lib/api/vehical";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import AddVehicleForm from "./AddVehicleForm";
import Saleform from "./Saleform";
import ViewSaleModal from "./ViewSaleModal";
import { Image_URL } from "@/config/constants";
import { toast } from "react-toastify";

export default function VehicleForm() {
  const getImage = (media) => {
    if (!media?.[0]?.url) return null;
    const url = media[0].url;
    if (url.startsWith('http')) return url;
    return `${Image_URL}${url}`;
  };
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSaleModalOpen, setIsSaleModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await vehicalsApi.dealerVechical();
      setVehicles(response.data || []);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const filteredVehicles = vehicles.filter(v =>
    v.vehicleModel?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.vin?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.plateNumber?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenSaleModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsSaleModalOpen(true);
  };

  const handleOpenEditModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsEditModalOpen(true);
  };


  const handleOpenViewModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsViewModalOpen(true);
  };

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this vehicle?")) {
  //     try {
  //       await vehicalsApi.deleteVechical(id);
  //       toast.success("Vehicle deleted successfully!");
  //       fetchVehicles();
  //     } catch (error) {
  //       console.error("Error deleting vehicle:", error);
  //     }
  //   }
  // };

const handleDelete = async (id) => {
  try {
    await vehicalsApi.deleteVechical(id);
    toast.success("Vehicle deleted successfully");
    fetchVehicles();
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    toast.error("Failed to delete vehicle ❌");
  }
};





  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
              <span className="bg-[#EB0102] text-white p-2 rounded-xl">
                <LuCar className="w-8 h-8" />
              </span>
              Inventory Manager
            </h1>
            <p className="text-slate-500 font-medium mt-1">Professional Dealer Inventory & Listing Control</p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 bg-[#EB0102] text-white px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(235,1,2,0.3)] hover:bg-[#d00102] transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <LuPlus className="w-5 h-5" /> Add New Vehicle
          </button>
        </div>

        {/* Dashboard Stats / Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="md:col-span-2 relative">
            <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by Model, VIN or Plate..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#EB0102]/5 focus:border-[#EB0102] transition-all font-medium text-slate-700 shadow-sm"
            />
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Stock</span>
            <span className="text-2xl font-black text-[#EB0102]">{vehicles.length}</span>
          </div>
          <button
            onClick={fetchVehicles}
            className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <LuRefreshCw className={`w-5 h-5 text-slate-400 ${loading ? 'animate-spin' : ''}`} />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Refresh Data</span>
          </button>
        </div>

        {/* Inventory Table Card */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Vehicle Details</th>
                  <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">VIN / Plate</th>
                  <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Status</th>
                  {/* <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Mileage</th> */}
                  <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-[#EB0102]/20 border-t-[#EB0102] rounded-full animate-spin"></div>
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Accessing Database...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredVehicles.length > 0 ? (
                  filteredVehicles.map((v) => (
                    <tr key={v.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-[#EB0102]/10 transition-colors overflow-hidden border border-slate-100 group-hover:border-[#EB0102]/20">
                            {getImage(v.vehicleMedia) ? (
                              <img
                                src={getImage(v.vehicleMedia)}
                                alt={v.vehicleModel?.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <LuCar className="w-6 h-6 text-slate-400 group-hover:text-[#EB0102] transition-colors" />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-black text-slate-900 uppercase tracking-tight">
                              {v.vehicleModel?.name}
                            </div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              {v.trim?.name} • {v.trim?.year}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-xs font-bold text-slate-700">{v.vin}</div>
                        <div className="text-[10px] font-black text-[#EB0102] uppercase tracking-[0.1em] mt-1">{v.plateNumber}</div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${v.condition === 'NEW' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                          }`}>
                          {v.condition}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          {/* <button
                            onClick={() => handleOpenViewModal(v)}
                            className="p-2.5 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                            title="View Details"
                          >
                            <LuView className="w-4 h-4" />
                          </button> */}
                          <button
                            onClick={() => handleOpenEditModal(v)}
                            className="p-2.5 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                            title="Edit Vehicle"
                          >
                            <LuPencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(v.id)}
                            className="p-2.5 bg-slate-100 text-[#EB0102] rounded-xl hover:bg-[#EB0102] hover:text-white transition-all shadow-sm"
                            title="Delete Vehicle"
                          >
                            <LuTrash2 className="w-4 h-4" />
                          </button>

                          {/* Only show Add to Sale if not already listed */}
                          {!v.vehicleSales.length > 0 && (
                            <button
                              onClick={() => handleOpenSaleModal(v)}
                              className="flex items-center gap-2 px-4 py-2.5 bg-[#EB0102]/5 text-[#EB0102] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#EB0102] hover:text-white transition-all border border-[#EB0102]/20 ml-2"
                            >
                              <LuTag className="w-3.5 h-3.5" /> Add to Sell
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <LuCar className="w-12 h-12 text-slate-200" />
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">No Vehicles Found</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Custom Pagination Placeholder */}
          <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing {filteredVehicles.length} vehicles</span>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 disabled:opacity-50"><LuChevronLeft /></button>
              <button className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 disabled:opacity-50"><LuChevronRight /></button>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <AddVehicleForm
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={fetchVehicles}
      />

      {selectedVehicle && (
        <AddVehicleForm
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedVehicle(null);
          }}
          vehicle={selectedVehicle}
          onSuccess={fetchVehicles}
        />
      )}

      {/* {selectedVehicle && (
        <Saleform
          isOpen={isSaleModalOpen}
          onClose={() => {
            setIsSaleModalOpen(false);
            setSelectedVehicle(null);
          }}
          vehicle={selectedVehicle}
        />
      )} */}
      {selectedVehicle && (
        <Saleform
          isOpen={isSaleModalOpen}
          onClose={() => {
            setIsSaleModalOpen(false);
            setSelectedVehicle(null);
          }}
          vehicle={selectedVehicle}
          onSuccess={() => {
            setIsSaleModalOpen(false);
            setSelectedVehicle(null);
            fetchVehicles(); // 🔥 IMPORTANT
          }}
        />
      )}


      {selectedVehicle && (
        <ViewSaleModal
          isOpen={isViewModalOpen}
          onClose={() => {
            setIsViewModalOpen(false);
            setSelectedVehicle(null);
          }}
          vehicleId={selectedVehicle.id}
        />
      )}
    </div>
  );
}
