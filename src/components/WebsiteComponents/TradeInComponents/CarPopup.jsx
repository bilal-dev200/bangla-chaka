// import React, { useState } from "react";

// export default function CarPopup({ onClose, onLookup  }) {
//   const [activeTab, setActiveTab] = useState("license");
//   const [state, setState] = useState("GA");
//   const [licensePlate, setLicensePlate] = useState("");

//   const tabClasses = (tab) =>
//     `px-4 py-4 font-bold text-large text-sm cursor-pointer w-32 ${
//       activeTab === tab
//         ? "bg-[#EB0102] text-white text-center rounded-[10px]"
//         : "text-gray-700 border-b-4 border-gray-300 text-left"
//     }`;

//   const licenseFields = [
//     {
//       type: "input",
//       placeholder: "License plate",
//       value: licensePlate,
//       onChange: (e) => setLicensePlate(e.target.value),
//     },
//     {
//       type: "select",
//       label: "State",
//       value: state,
//       onChange: (e) => setState(e.target.value),
//       options: ["GA", "NY", "CA", "TX", "FL"],
//       small: true,
//     },
//   ];

//   const vinFields = [
//     {
//       type: "input",
//       placeholder: "Enter VIN",
//     },
//   ];

//   const makeFields = [
//     {
//       type: "select",
//       placeholder: "Select Make",
//       options: ["BMW", "Audi", "Mercedes"],
//     },
//     {
//       type: "select",
//       placeholder: "Select Model",
//       options: ["M3", "M4"],
//     },
//     {
//       type: "select",
//       placeholder: "Select Year",
//       options: ["2022", "2023"],
//     },
//     {
//       type: "select",
//       placeholder: "Select Style",
//       options: ["Coupe", "Sedan"],
//     },
//   ];

//   const renderField = (field, idx) => {
//     if (field.type === "input") {
//       return (
//         <input
//           key={idx}
//           type="text"
//           placeholder={field.placeholder}
//           value={field.value}
//           onChange={field.onChange}
//           className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
//         />
//       );
//     } else if (field.type === "select") {
//       const selectWidth = field.small ? "w-[100px]" : "w-full";
//       return (
//         <div key={idx} className="flex items-center gap-1">
//           {field.label && (
//             <label className="font-medium text-gray-700 min-w-[60px]">
//               {field.label}
//             </label>
//           )}
//           <select
//             value={field.value}
//             onChange={field.onChange}
//             className={`${selectWidth} border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800`}
//           >
//             {field.placeholder && (
//               <option value="">{field.placeholder}</option>
//             )}
//             {field.options.map((opt, i) => (
//               <option key={i} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>
//       );
//     }
//   };

//   return (
//     <>
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//         onClick={onClose}
//       />
//       <div className="fixed inset-0 flex justify-center items-center z-50">
//         <div
//           className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 md:mx-0 overflow-hidden flex flex-col md:flex-row"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="md:w-1/2 w-full h-64 md:h-auto">
//             <img
//               src="./Images/carpopup.png"
//               alt="Car"
//               className="w-full h-[440px]  object-cover"
//               loading="lazy"
//             />
//           </div>

//           <div className="md:w-1/2 w-full p-6 flex flex-col space-y-4 relative">
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//             >
//               <span className="material-icons">close</span>
//             </button>

//             <div className="flex flex-col space-y-2">
//               <div>
//                 <button
//                   className={tabClasses("license")}
//                   onClick={() => setActiveTab("license")}
//                 >
//                   License Plate
//                 </button>
//                 {activeTab === "license" && (
//                   <div className="mt-2 space-y-2 rounded-[10px]">
//                     {licenseFields.map(renderField)}
//                     <button className="w-full bg-[#EB0102] text-white py-2 rounded-md font-semibold hover:bg-purple-800"
//                     onClick={onLookup}>
//                       LOOK UP CAR

//                     </button>
//                     <hr className="border-b-2 border-gray-300 w-32" />
//                   </div>
//                 )}
//               </div>

//               {/* VIN Tab */}
//               <div>
//                 <button
//                   className={tabClasses("vin")}
//                   onClick={() => setActiveTab("vin")}
//                 >
//                   VIN
//                 </button>
//                 {activeTab === "vin" && (
//                   <div className="mt-2 space-y-3">
//                     {vinFields.map((field, idx) => (
//                       <input
//                         key={idx}
//                         type="text"
//                         placeholder={field.placeholder}
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
//                       />
//                     ))}
//                     <button className="w-full bg-[#EB0102] text-white py-2 rounded-md font-semibold hover:bg-purple-800
//                     "
//                     onClick={onLookup}>
//                       LOOK UP CAR
//                     </button>
//                     <hr className="border-b-2 border-gray-300 w-32" />
//                   </div>
//                 )}
//               </div>

//               {/* Make Tab */}
//               <div>
//                 <button
//                   className={tabClasses("make")}
//                   onClick={() => setActiveTab("make")}
//                 >
//                   Make
//                 </button>
//                 {activeTab === "make" && (
//                   <div className="mt-2 space-y-3">
//                     {makeFields.map((field, idx) => (
//                       <select
//                         key={idx}
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
//                       >
//                         <option value="">{field.placeholder}</option>
//                         {field.options.map((opt, i) => (
//                           <option key={i} value={opt}>
//                             {opt}
//                           </option>
//                         ))}
//                       </select>
//                     ))}
//                     <button className="w-full bg-[#EB0102] text-white py-2 rounded-md font-semibold hover:bg-purple-800"
//                     onClick={onLookup}>
//                       LOOK UP CAR
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <link
//         href="https://fonts.googleapis.com/icon?family=Material+Icons"
//         rel="stylesheet"
//       />
//     </>
//   );
// }


import { dropDownApi } from "@/lib/api/dropdown";
import { useCarStore } from "@/lib/store/carStore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function CarPopup({ onClose, onLookup }) {
  const [activeTab, setActiveTab] = useState("license");
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [styles, setStyles] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const { setCarPopupData } = useCarStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dropDownApi
      .getBrand()
      .then((res) => setBrands(res.data || []))
      .catch((err) => console.error("Error fetching brands", err));

    dropDownApi
      .getBodyTypelist()
      .then((res) => setStyles(res.data || []))
      .catch((err) => console.error("Error fetching styles", err));
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      dropDownApi
        .getFilterBrands(selectedBrand)
        .then((res) => {
          const modelsData = res?.data?.vehicleModels || [];
          setModels(modelsData);
          setYears([]); // reset years when brand changes
          setValue("model", ""); // reset form model field
          setValue("year", "");
        })
        .catch((err) => console.error("Error fetching models", err));
    } else {
      setModels([]);
      setYears([]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      dropDownApi
        .getModelYear(selectedModel)
        .then((res) => {
          setYears(res.data.vehicleModelYears || []);
          setValue("year", "");
        })
        .catch((err) => console.error("Error fetching years", err));
    } else {
      setYears([]);
    }
  }, [selectedModel]);

  const onSubmit = (data) => {
    const filteredData = {};
    if (activeTab === "license") {
      filteredData.licensePlate = data.licensePlate;
      filteredData.state = data.state;
    } else if (activeTab === "vin") {
      filteredData.vin = data.vin;
    } else if (activeTab === "make") {
      filteredData.make = selectedBrand;
      filteredData.model = selectedModel;
      filteredData.year = data.year;
      filteredData.style = data.style;
    }
    setCarPopupData(filteredData);
    onLookup({ activeTab, ...filteredData });
  };

  const tabClasses = (tab) =>
    `px-4 py-4 font-bold text-large text-sm cursor-pointer w-32 ${activeTab === tab
      ? "bg-[#EB0102] text-white text-center rounded-[10px]"
      : "text-gray-700 border-b-4 border-gray-300 text-left"
    }`;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div
          className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 md:mx-0 overflow-hidden flex flex-col md:flex-row relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="md:w-1/2 w-full h-64 md:h-auto">
            <Image
              src="/Images/carpopup.png"
              alt="Car"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2 w-full p-6 flex flex-col space-y-4 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <span className="material-icons">close</span>
            </button>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
            >
              <div>
                <button
                  type="button"
                  className={tabClasses("license")}
                  onClick={() => setActiveTab("license")}
                >
                  License Plate
                </button>
                {activeTab === "license" && (
                  <div className="mt-2 space-y-2 rounded-[10px]">
                    <input
                      type="text"
                      placeholder="License plate"
                      {...register("licensePlate", {
                        required: "License plate is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                    />
                    {errors.licensePlate && (
                      <p className="text-red-500 text-sm">
                        {errors.licensePlate.message}
                      </p>
                    )}

                    <select
                      {...register("state", { required: "State is required" })}
                      className="w-[100px] border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                    >
                      <option value="">State</option>
                      {["GA", "NY", "CA", "TX", "FL"].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="text-red-500 text-sm">
                        {errors.state.message}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#EB0102] text-white py-2 rounded-md font-semibold hover:bg-purple-800"
                    >
                      LOOK UP CAR
                    </button>
                    <hr className="border-b-2 border-gray-300 w-32" />
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  className={tabClasses("vin")}
                  onClick={() => setActiveTab("vin")}
                >
                  VIN
                </button>
                {activeTab === "vin" && (
                  <div className="mt-2 space-y-3">
                    <input
                      type="text"
                      placeholder="Enter VIN"
                      {...register("vin", {
                        required: "VIN is required",
                        minLength: {
                          value: 11,
                          message: "VIN must be at least 11 characters",
                        },
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                    />
                    {errors.vin && (
                      <p className="text-red-500 text-sm">{errors.vin.message}</p>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#EB0102] text-white py-2 rounded-md font-semibold hover:bg-purple-800"
                    >
                      LOOK UP CAR
                    </button>
                    <hr className="border-b-2 border-gray-300 w-32" />
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  className={tabClasses("make")}
                  onClick={() => setActiveTab("make")}
                >
                  Make
                </button>
                {activeTab === "make" && (
                  <div className="mt-2 space-y-3">
                    {/* <select
                      {...register("make", { required: "Make is required" })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                    >
                      <option value="">Select Make</option>
                      {["BMW", "Audi", "Mercedes"].map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select> */}
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                    >
                      <option value="">Select Make</option>
                      {brands.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </select>

                    {errors.make && (
                      <p className="text-red-500 text-sm">{errors.make.message}</p>
                    )}

                    {/* <select
                      {...register("model", { required: "Model is required" })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                    >
                      <option value="">Select Model</option>
                      {["M3", "M4"].map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select> */}
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                      disabled={!models.length}
                    >
                      <option value="">Select Model</option>
                      {models.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                    {errors.model && (
                      <p className="text-red-500 text-sm">{errors.model.message}</p>
                    )}

                    {/* <select
                      {...register("year", { required: "Year is required" })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                    >
                      <option value="">Select Year</option>
                      {["2022", "2023"].map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select> */}
                    <select
                      {...register("year", { required: "Year is required" })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                      disabled={!years.length}
                    >
                      <option value="">Select Year</option>
                      {years.map((y) => (
                        <option key={y.id} value={y}>
                          {y.year}
                        </option>
                      ))}
                    </select>
                    {errors.year && (
                      <p className="text-red-500 text-sm">{errors.year.message}</p>
                    )}

                    {/* <select
                      {...register("style", { required: "Style is required" })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                    >
                      <option value="">Select Style</option>
                      {["Coupe", "Sedan"].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select> */}
                    <select
                      {...register("style", { required: "Style is required" })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-gray-800"
                      disabled={!styles.length}
                    >
                      <option value="">Select Style</option>
                      {styles.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                    {errors.style && (
                      <p className="text-red-500 text-sm">{errors.style.message}</p>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#EB0102] text-white py-2 rounded-md font-semibold hover:bg-purple-800"
                    >
                      LOOK UP CAR
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </>
  );
}
