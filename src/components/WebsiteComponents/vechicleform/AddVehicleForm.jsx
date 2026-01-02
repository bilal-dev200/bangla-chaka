"use client";

import { useEffect, useState, Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authApi } from "@/lib/api/auth";
import { dropDownApi } from "@/lib/api/dropdown";
import { vehicalsApi } from "@/lib/api/vehical";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { Image_URL } from "@/config/constants";
import {
    LuCar,
    LuFingerprint,
    LuHash,
    LuLayers,
    LuShieldCheck,
    LuDna,
    LuPalette,
    LuImagePlus,
    LuPlus,
    LuX,
    LuView,
    LuInfo,
    LuChevronRight,
    LuGauge,
    LuZap,
    LuCpu,
    LuCompass,
    LuSettings,
    LuCalendar,
    LuTag
} from "react-icons/lu";

// ✅ Validation Schema
const schema = yup.object().shape({
    slug: yup.string().required("Slug is required"),
    vin: yup.string().required("VIN is required"),
    plateNumber: yup.string().required("Plate Number is required"),
    bodyTypeId: yup.string().required("Body Type is required"),
    condition: yup.string().required("Condition is required"),
    vehicleModelId: yup.string().required("Vehicle Model is required"),
    trimId: yup.string().required("Trim is required"),
    exteriorColorId: yup.string().required("Exterior Color is required"),
    interiorColorId: yup.string().required("Interior Color is required"),
    brandId: yup.string().required("Brand is required"),
    price: yup.number().required("Price is required").typeError("Price must be a number"),
    fuelType: yup.string().required("Fuel Type is required"),
    transmissionId: yup.string().required("Transmission is required"),
    cc: yup.number().required("Engine Capacity is required").typeError("CC must be a number"),
    mileage: yup.number().required("Mileage is required").typeError("Mileage must be a number"),
    year: yup.number().required("Year is required").typeError("Year must be a number"),
    // quantity: yup.number().required("Quantity is required").typeError("Quantity must be a number"),
});

export default function AddVehicleForm({ isOpen, onClose, onSuccess, vehicle }) {
    const getImage = (url) => {
        if (!url) return null;
        if (url.startsWith('http')) return url;
        return `${Image_URL}${url}`;
    };
    const isEdit = !!vehicle;
    const fileInputRef = useRef(null);
    const [brands, setBrands] = useState([]);
    const [bodyTypes, setBodyTypes] = useState([]);
    const [vehicleModels, setVehicleModels] = useState([]);
    const [trims, setTrims] = useState([]);
    const [exteriorColors, setExteriorColors] = useState([]);
    const [interiorColors, setInteriorColors] = useState([]);
    const [fuelTypes, setFuelTypes] = useState([]);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [transmissions] = useState([
        { id: "1", name: "Automatic" },
        { id: "2", name: "Manual" },
        { id: "3", name: "Tiptronic" },
        { id: "4", name: "CVT" }
    ]);

    const [conditions] = useState([
        { id: "NEW", name: "New" },
        { id: "USED", name: "Used" },
        { id: "DEMO", name: "Demo" },
        { id: "CERTIFIED_PRE_OWNED", name: "Certified Pre-Owned" },
    ]);

    const years = Array.from({ length: 27 }, (_, i) => {
        const year = 2025 - i;
        return { id: year, name: year };
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        context: { vehicleId: vehicle?.id }
    });

    useEffect(() => {
        const fetchDropdowns = async () => {
            try {
                const [brandData, body, models, trim, colors, fuel] = await Promise.all([
                    dropDownApi.getBrandlist(),
                    dropDownApi.getBodyTypelist(),
                    dropDownApi.getVehiclemodel(),
                    dropDownApi.getTrimlist(),
                    dropDownApi.getColorlist(),
                    dropDownApi.getFuelTypelist(),
                ]);
                setBrands(brandData?.data || []);
                setBodyTypes(body?.data || []);
                setVehicleModels(models?.data || []);
                setTrims(trim?.data || []);
                setExteriorColors(colors?.data || []);
                setInteriorColors(colors?.data || []);
                setFuelTypes(fuel?.data || []);
            } catch (err) {
                console.error("❌ Error fetching dropdowns:", err);
            }
        };

        if (isOpen) fetchDropdowns();
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && vehicle) {
            reset({
                slug: vehicle.slug,
                vin: vehicle.vin,
                plateNumber: vehicle.plateNumber,
                bodyTypeId: vehicle.bodyTypeId,
                condition: vehicle.condition,
                vehicleModelId: vehicle.vehicleModelId,
                trimId: vehicle.trimId,
                exteriorColorId: vehicle.exteriorColorId,
                interiorColorId: vehicle.interiorColorId,
                brandId: vehicle.brandId,
                price: vehicle.price,
                fuelType: vehicle.fuelType,
                transmissionId: vehicle.transmissionId,
                cc: vehicle.cc,
                mileage: vehicle.mileage,
                year: vehicle.year,
                // quantity: vehicle.quantity,
            });
        } else if (isOpen) {
            reset({
                slug: "",
                vin: "",
                plateNumber: "",
                bodyTypeId: "",
                condition: "",
                vehicleModelId: "",
                trimId: "",
                exteriorColorId: "",
                interiorColorId: "",
                brandId: "",
                price: "",
                fuelType: "",
                transmissionId: "",
                cc: "",
                mileage: "",
                year: "",
                quantity: "",
            });
        }
    }, [isOpen, vehicle, reset]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data) => {
        console.log("🚀 Form Data:", data);
        try {
            const formData = new FormData();

            // Fields accepted by the backend
            const allowedFields = [
                "slug",
                "vin",
                "plateNumber",
                "bodyTypeId",
                "condition",
                "vehicleModelId",
                "trimId",
                "exteriorColorId",
                "interiorColorId",
                "mileage" // Not rejected in error, so we keep it
            ];

            Object.keys(data).forEach((key) => {
                if (allowedFields.includes(key)) {
                    formData.append(key, data[key]);
                }
            });

            if (image) {
                formData.append("vehicleImages", image);
            }

            if (isEdit) {
                await vehicalsApi.updateVehicle(vehicle.id, formData);
                toast.success("Vehicle updated successfully!");
            } else {
                await vehicalsApi.addVehicle(formData);
                toast.success("Vehicle successfully added to fleet!");
            }

            reset();
            setImage(null);
            setImagePreview(null);
            onSuccess();
            onClose();
        } catch (error) {
            console.error(`❌ Error ${isEdit ? 'updating' : 'adding'} vehicle:`, error);
            // safe extraction of error message
            const serverMessage = error?.response?.data?.message || error.message || "Unknown error";
            toast.error(`Failed to ${isEdit ? 'update' : 'add'} vehicle. Server says: ${serverMessage}`);
        }
    };

    const onErrors = (err) => {
        console.error("❌ Validation Errors:", err);
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
                        <div className="inline-block align-bottom bg-white rounded-[2rem] text-left overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full border border-white/10 relative z-50">

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
                                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#EB0102] mb-1.5 block">{isEdit ? 'Legacy Vehicle Update' : 'New Fleet Acquisition'}</span>
                                        <h2 className="text-2xl font-black tracking-tight leading-none uppercase">Garage Assets</h2>
                                        <p className="text-slate-400 text-[10px] font-bold mt-1.5 uppercase tracking-widest flex items-center gap-2">
                                            Dealer Portal <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span> Fleet Management
                                        </p>
                                    </div>
                                </div>

                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-[#EB0102]/10 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800/20 rounded-full -ml-32 -mb-32 blur-2xl"></div>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit, onErrors)} className="h-full flex flex-col">
                                <div className="bg-slate-50/50 max-h-[70vh] overflow-y-auto custom-scrollbar flex-1">
                                    <div className="p-6 sm:p-8">
                                        <div className="space-y-10">
                                            {/* Section 1: Core Identity */}
                                            <div className="space-y-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                    <h3 className="text-[8px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-2 shrink-0">
                                                        <LuCar className="text-[#EB0102] w-3 h-3" /> Core Identity
                                                    </h3>
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <InputField label="URL Slug" name="slug" icon={<LuFingerprint className="w-4 h-4" />} placeholder="e.g. toyota-camry-2022" register={register} errors={errors} />
                                                    <InputField label="VIN (Vehicle ID)" name="vin" icon={<LuHash className="w-4 h-4" />} placeholder="Enter 17-digit VIN" register={register} errors={errors} />
                                                    <InputField label="Plate Number" name="plateNumber" icon={<LuHash className="w-4 h-4" />} placeholder="e.g. DHAKA-METRO-KA-1234" register={register} errors={errors} />
                                                    <DropdownField label="Body Type" name="bodyTypeId" icon={<LuLayers className="w-4 h-4" />} options={bodyTypes} register={register} errors={errors} />
                                                    <DropdownField label="Brand / Manufacturer" name="brandId" icon={<LuCar className="w-4 h-4" />} options={brands} register={register} errors={errors} />
                                                    <DropdownField label="Vehicle Model" name="vehicleModelId" icon={<LuCar className="w-4 h-4" />} options={vehicleModels} register={register} errors={errors} />
                                                    <DropdownField label="Trim / Grade" name="trimId" icon={<LuCar className="w-4 h-4" />} options={trims} register={register} errors={errors} />
                                                    <InputField label="Asset Value (BDT)" name="price" type="number" icon={<LuTag className="w-4 h-4" />} placeholder="e.g. 2500000" register={register} errors={errors} />
                                                </div>
                                            </div>

                                            {/* Section 2: Technical Specifications */}
                                            <div className="space-y-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                    <h3 className="text-[8px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-2 shrink-0">
                                                        <LuDna className="text-[#EB0102] w-3 h-3" /> Vehicle Specifications
                                                    </h3>
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    <DropdownField label="Fuel Tech" name="fuelType" icon={<LuGauge className="w-4 h-4" />} options={fuelTypes} register={register} errors={errors} />
                                                    <DropdownField label="Transmission" name="transmissionId" icon={<LuZap className="w-4 h-4" />} options={transmissions} register={register} errors={errors} />
                                                    <InputField label="Engine Capacity (cc)" name="cc" type="number" icon={<LuCpu className="w-4 h-4" />} placeholder="e.g. 1500" register={register} errors={errors} />
                                                    <InputField label="Asset Mileage (km)" name="mileage" type="number" icon={<LuCompass className="w-4 h-4" />} placeholder="e.g. 45000" register={register} errors={errors} />
                                                    <DropdownField label="Production Year" name="year" icon={<LuCalendar className="w-4 h-4" />} options={years} register={register} errors={errors} />
                                                    <DropdownField label="Engine State" name="condition" icon={<LuSettings className="w-4 h-4" />} options={conditions} register={register} errors={errors} />
                                                </div>
                                            </div>

                                            {/* Section 3: Aesthetics & State */}
                                            <div className="space-y-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                    <h3 className="text-[8px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-2 shrink-0">
                                                        <LuPalette className="text-[#EB0102] w-3 h-3" /> Aesthetics & Condition
                                                    </h3>
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <DropdownField label="Exterior Color" name="exteriorColorId" icon={<LuPalette className="w-4 h-4" />} options={exteriorColors} register={register} errors={errors} />
                                                    <DropdownField label="Interior Color" name="interiorColorId" icon={<LuPalette className="w-4 h-4" />} options={interiorColors} register={register} errors={errors} />
                                                    <InputField label="In-Stock Quantity" name="quantity" type="number" icon={<LuLayers className="w-4 h-4" />} placeholder="1" register={register} errors={errors} />
                                                </div>
                                            </div>

                                            {/* Section 4: Visual Documentation */}
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                    <h3 className="text-[8px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-2 shrink-0">
                                                        <LuImagePlus className="text-[#EB0102] w-3 h-3" /> Asset Imagery
                                                    </h3>
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                </div>
                                                <div className="max-w-md mx-auto">
                                                    <div className="relative group/img">
                                                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-50 border-3 border-dashed border-slate-200 group-hover/img:border-[#EB0102] transition-all cursor-pointer active:scale-[0.98] duration-300 shadow-inner group">
                                                            {imagePreview ? (
                                                                <div className="relative w-full h-full">
                                                                    <img src={imagePreview} alt="Vehicle layout" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                                                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-75 group-hover/img:scale-100 transition-transform duration-500">
                                                                            <LuImagePlus className="w-6 h-6" />
                                                                        </div>
                                                                        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Change Vehicle Image</span>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-300 group-hover/img:text-[#EB0102] transition-all duration-500">
                                                                    <div className="w-16 h-16 bg-slate-100 rounded-3xl flex items-center justify-center group-hover/img:bg-[#EB0102]/10 transition-colors">
                                                                        <LuImagePlus className="w-8 h-8" />
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <span className="text-[10px] font-black uppercase tracking-widest block mb-1">Upload Vehicle Asset</span>
                                                                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Supports JPG, PNG, WEBP</span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <input type="file" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" accept="image/*" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Buttons */}
                                <div className="p-6 bg-white border-t-2 border-slate-50">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="px-8 py-3.5 bg-slate-100 text-slate-500 rounded-xl font-black uppercase tracking-[0.3em] hover:bg-slate-200 transition-all text-xs"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-1 flex justify-center items-center gap-2.5 py-3.5 px-8 rounded-xl bg-[#EB0102] text-white text-sm font-black uppercase tracking-[0.3em] shadow-[0_15px_40px_rgba(235,1,2,0.3)] hover:shadow-[0_15px_40px_rgba(235,1,2,0.1)] hover:bg-[#d00102] transition-all disabled:opacity-50 relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">{isSubmitting ? "Processing Fleet..." : (isEdit ? 'Update Asset Info' : 'Commit New Asset')}</span>
                                            {!isSubmitting && <LuChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-500" />}
                                            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

const InputField = ({ label, name, icon, register, errors, placeholder, type = "text" }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-[8px] font-black text-slate-800 uppercase tracking-[0.2em] ml-2 flex items-center gap-1">
            {label}
            {errors[name] && <span className="w-1 h-1 bg-[#EB0102] rounded-full animate-pulse"></span>}
        </label>
        <div className="relative group/field">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-[#EB0102] transition-all duration-300 transform group-focus-within/field:scale-110">
                {icon}
            </div>
            <input
                type={type}
                {...register(name)}
                placeholder={placeholder}
                className={`w-full pl-11 pr-4 py-2.5 bg-white border-[2px] rounded-xl focus:outline-none transition-all duration-300 font-bold text-slate-700 placeholder:text-slate-200 shadow-sm text-xs
                    ${errors[name] ? 'border-red-100 focus:border-[#EB0102]' : 'border-slate-50 focus:border-[#EB0102] group-hover/field:border-slate-100'}`}
            />
        </div>
        {errors[name] && <p className="text-[#EB0102] text-[8px] font-black uppercase mt-0.5 ml-2 tracking-widest">{errors[name].message}</p>}
    </div>
);

const DropdownField = ({ label, name, icon, options, register, errors }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-[8px] font-black text-slate-800 uppercase tracking-[0.2em] ml-2 flex items-center gap-1">
            {label}
            {errors[name] && <span className="w-1 h-1 bg-[#EB0102] rounded-full animate-pulse"></span>}
        </label>
        <div className="relative group/field">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-[#EB0102] transition-all duration-300">
                {icon}
            </div>
            <select
                {...register(name)}
                className={`w-full pl-11 pr-4 py-2.5 bg-white border-[2px] rounded-xl focus:outline-none transition-all duration-300 font-bold text-slate-700 appearance-none shadow-sm text-xs
                    ${errors[name] ? 'border-red-100 focus:border-[#EB0102]' : 'border-slate-50 focus:border-[#EB0102] group-hover/field:border-slate-100'}`}
            >
                <option value="">Select {label}</option>
                {options.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.name || opt.label}</option>
                ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300 group-focus-within/field:text-[#EB0102] transition-colors">
                <LuChevronRight className="w-4 h-4 rotate-90" />
            </div>
        </div>
        {errors[name] && <p className="text-[#EB0102] text-[8px] font-black uppercase mt-0.5 ml-2 tracking-widest">{errors[name].message}</p>}
    </div>
);

