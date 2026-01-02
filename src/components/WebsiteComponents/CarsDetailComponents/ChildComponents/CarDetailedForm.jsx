// import React from 'react'
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import { dropDownApi } from '@/lib/api/dropdown';


// const CarDetailedForm = () => {
//     const [brands, setBrands] = useState([]);
// const [models, setModels] = useState([]);
// const [colors, setColors] = useState([]);
// const [selectedBrand, setSelectedBrand] = useState("");

// useEffect(() => {
//   dropDownApi.getBrand()
//     .then((res) => setBrands(res.data || []))
//     .catch((err) => console.error("Error fetching brands", err));
// }, []);

// // ✅ Models laane ke liye jab brand select ho
// // useEffect(() => {
// //   if (selectedBrand) {
// //     dropDownApi.getFilterBrands(selectedBrand) // 👈 brandId pass ho raha hai
// //       .then((res) => setModels(res.data || []))
// //       .catch((err) => console.error("Error fetching models", err));
// //   } else {
// //     setModels([]);
// //   }
// // }, [selectedBrand]);
// // useEffect(() => {
// //   if (selectedBrand) {
// //     dropDownApi.getFilterBrands(selectedBrand)
// //       .then((res) => {
// //         // yahan check karo response structure
// //         const modelsData = Array.isArray(res.data) ? res.data : res.data.data;
// //         setModels(modelsData || []);
// //       })
// //       .catch((err) => console.error("Error fetching models", err));
// //   } else {
// //     setModels([]);
// //   }
// // }, [selectedBrand]);
// useEffect(() => {
//   if (selectedBrand) {
//     dropDownApi.getFilterBrands(selectedBrand)
//       .then((res) => {
//         // actual path -> res.data.data.vehicleModels
//         const modelsData = res?.data?.vehicleModels|| [];
//         setModels(modelsData);
//         console.log(modelsData,'ddd')
//       })
//       .catch((err) => console.error("Error fetching models", err));
//   } else {
//     setModels([]);
//   }
// }, [selectedBrand]);



// // ✅ Colors laane ke liye
// useEffect(() => {
//  dropDownApi.getColorlist()
//     .then((res) => setColors(res.data || []))
//     .catch((err) => console.error("Error fetching colors", err));
// }, []);

//      const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//       } = useForm();

//       const onSubmit = (data) => {
//         console.log("Form Submitted:", data);
//       };

//       // Checkbox ka value watch karna
//       const hasTrade = watch("trade");
//   return (
//     <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="border rounded-2xl p-5 mt-4 bg-white space-y-3"
//           >
//             <h3 className="text-sm font-semibold text-black">Contact Dealer</h3>

//             <div className="flex flex-col sm:flex-row gap-2">
//               <input
//                 {...register("firstName", { required: "First name is required" })}
//                 type="text"
//                 placeholder="First name"
//                 className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//               />
//               <input
//                 {...register("lastName", { required: "Last name is required" })}
//                 type="text"
//                 placeholder="Last name"
//                 className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-2">
//               <input
//                 {...register("email", { required: "Email is required" })}
//                 type="email"
//                 placeholder="Email address"
//                 className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//               />
//               <input
//                 {...register("phone", { required: "Phone is required" })}
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-2">
//               {/* Subject Dropdown */}
//               <div className="w-full sm:w-1/2 relative">
//                 <select
//                   {...register("subject", { required: "Subject is required" })}
//                   className="w-full border border-gray-300 text-sm p-2 rounded-md appearance-none pr-8"
//                 >
//                   <option value="">Subject</option>
//                   <option value="Availability">Availability</option>
//                   <option value="Pricing">Pricing</option>
//                 </select>
//                 <div className="absolute right-2 top-2.5 text-gray-500 pointer-events-none">
//                   ▼
//                 </div>
//               </div>

//               <input
//                 {...register("zip", { required: "Zip is required" })}
//                 type="text"
//                 placeholder="Zip code"
//                 className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//               />
//             </div>

//             <textarea
//               {...register("description")}
//               placeholder="Description"
//               className="w-full border border-gray-300 text-sm p-2 rounded-md h-24 resize-none"
//             />

//             <div className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 id="trade"
//                 {...register("trade")}
//                 className="w-4 h-4"
//               />
//               <label htmlFor="trade" className="text-sm text-gray-700">
//                 I have Trade In
//               </label>
//             </div>

//             {/* Conditional Fields agar trade checkbox true hai */}
//             {hasTrade && (
//               <div className="space-y-2">
//                 {/* Row 1 */}
//                 <div className="flex flex-col sm:flex-row gap-2">
//                   {/* <input
//                     {...register("make", { required: true })}
//                     type="text"
//                     placeholder="Choose a make"
//                     className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//                   />
//                   <input
//                     {...register("model", { required: true })}
//                     type="text"
//                     placeholder="Choose a model"
//                     className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//                   /> */}
//                   <select
//   {...register("make", { required: true })}
//   onChange={(e) => setSelectedBrand(e.target.value)}
//   className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
// >
//   <option value="">Choose a make</option>
//   {brands.map((brand) => (
//     <option key={brand.id} value={brand.id}>
//       {brand.name}
//     </option>
//   ))}
// </select>


// <select
//   {...register("model", { required: true })}
//   className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//   disabled={!selectedBrand}
// >
//   <option value="">Choose a model</option>
//   {models.map((model) => (
//     <option key={model.id} value={model.id}>
//       {model.name}
//     </option>
//   ))}
// </select>

//                 </div>

//                 {/* Row 2 */}
//                 <div className="flex flex-col sm:flex-row gap-2">
//                   <input
//                     {...register("year", { required: true })}
//                     type="text"
//                     placeholder="Choose a year"
//                     className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//                   />
//                   {/* <input
//                     {...register("color")}
//                     type="text"
//                     placeholder="Exterior color"
//                     className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//                   /> */}
//                   <select
//   {...register("color")}
//   className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
// >
//   <option value="">Exterior color</option>
//   {colors.map((color) => (
//     <option key={color.id} value={color.id}>
//       {color.name}
//     </option>
//   ))}
// </select>

//                 </div>

//                 {/* Row 3 */}
//                 <div className="flex flex-col sm:flex-row gap-2">
//                   <input
//                     {...register("mileage")}
//                     type="text"
//                     placeholder="Mileage"
//                     className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//                   />
//                   <input
//                     {...register("vin")}
//                     type="text"
//                     placeholder="VIN (optional)"
//                     className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
//                   />
//                 </div>
//               </div>
//             )}


//             <button
//               type="submit"
//               className="w-full bg-[#EB0102] text-white text-sm font-medium py-3 rounded-full hover:bg-[#EB0102]"
//             >
//               Check availability
//             </button>

//             <p className="text-[12px] text-black mt-2 leading-tight">
//               By clicking here, you authorize Carnkey.com and its sellers/partners to
//               contact you by text/calls which may include marketing and be by
//               autodialer. Calls may be prerecorded. You also agree to our{" "}
//               <span className="underline">Privacy Notice</span>. Consent is not
//               required to purchase goods/services. We value your privacy.
//             </p>
//           </form>
//   )
// }

// export default CarDetailedForm


import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { dropDownApi } from "@/lib/api/dropdown";
import { vehicalsApi } from "@/lib/api/vehical";
import { toast } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";
import { getStoredUser, useAuthStore } from "@/lib/store/authStore";
import LoginPopup from "@/app/sign-in/LoginPopup";

const CarDetailedForm = ({ vehicleSaleId, dealerId }) => {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { user: storeUser } = useAuthStore(); // zustand user
  const localUser = getStoredUser(); // 👈 fallback user from localStorage
  const user = storeUser || localUser;

  useEffect(() => {
    dropDownApi
      .getBrand()
      .then((res) => setBrands(res.data || []))
      .catch((err) => console.error("Error fetching brands", err));
  }, []);


  useEffect(() => {
    if (selectedBrand) {
      dropDownApi
        .getFilterBrands(selectedBrand)
        .then((res) => {
          const modelsData = res?.data?.vehicleModels || [];
          setModels(modelsData);
        })
        .catch((err) => console.error("Error fetching models", err));
    } else {
      setModels([]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    dropDownApi
      .getColorlist()
      .then((res) => setColors(res.data || []))
      .catch((err) => console.error("Error fetching colors", err));
  }, []);


  useEffect(() => {
    if (selectedModel) {
      dropDownApi
        .getModelYear(selectedModel)
        .then((res) => {
          setYears(res.data.vehicleModelYears || []);
        })
        .catch((err) => console.error("Error fetching years", err));
    } else {
      setYears([]);
    }
  }, [selectedModel]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(user)
    if (!user && data.trade) {
      setShowLoginPopup(true);
      return;
    }

    let payload = {
      vehicleSaleId, // from props
      dealerId, // from props
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      zipCode: data.zip, // 👈 input ka name "zip" hai, backend "zipCode" chahta hai
      description: data.description,
      hasTradeIn: !!data.trade, // checkbox
    };

    // Add trade fields if checkbox is checked
    if (data.trade == true) {
      payload = {
        ...payload,
        brandId: parseInt(data.make),
        vehicleModelId: parseInt(data.model),
        year: parseInt(data.year),
        exteriorColorId: parseInt(data.color),
        mileage: parseInt(data.mileage),
        vin: data.vin || null, // optional
      };
    }

    console.log("Final Payload:", payload);
    toast.success("Form submit successfully!");
    vehicalsApi
      .checkAvailability(payload)
      .then((res) => {
      })
      .catch((err) => {
        console.error("Error checking availability", err);
      });
  };

  const hasTrade = watch("trade");

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-2xl p-5 mt-4 bg-white space-y-3"
      >
        <h3 className="text-sm font-semibold text-black">Contact Dealer</h3>

        {/* --- First & Last Name --- */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            placeholder="First name"
            className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
          />
          <input
            {...register("lastName", { required: "Last name is required" })}
            type="text"
            placeholder="Last name"
            className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
          />
        </div>

        {/* --- Email & Phone --- */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email address"
            className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
          />
          <input
            {...register("phone", { required: "Phone is required" })}
            type="tel"
            placeholder="Phone Number"
            className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
          />
        </div>

        {/* --- Subject & Zip --- */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="w-full sm:w-1/2 relative">
            <select
              {...register("subject", { required: "Subject is required" })}
              className="w-full border border-gray-300 text-sm p-2 rounded-md appearance-none pr-8"
            >
              <option value="">Subject</option>
              <option value="Availability">Availability</option>
              <option value="Pricing">Pricing</option>
            </select>
            <div className="absolute right-2 top-2.5 text-gray-500 pointer-events-none">
              <IoIosArrowDown />
            </div>
          </div>

          <input
            {...register("zip", { required: "Zip is required" })}
            type="text"
            placeholder="Zip code"
            className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
          />
        </div>

        {/* --- Description --- */}
        <textarea
          {...register("description")}
          placeholder="Description"
          className="w-full border border-gray-300 text-sm p-2 rounded-md h-24 resize-none"
        />

        {/* --- Trade In Checkbox --- */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="trade"
            {...register("trade")}
            className="w-4 h-4"
          />
          <label htmlFor="trade" className="text-sm text-gray-700">
            I have Trade In
          </label>
        </div>

        {/* --- Trade In Extra Fields --- */}
        {hasTrade && (
          <div className="space-y-2">
            {/* Brand & Model */}
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                {...register("make", { required: true })}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              >
                <option value="">Choose a make</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>

              <select
                {...register("model", { required: true })}
                onChange={(e) => setSelectedModel(e.target.value)} // 👈 ye add karo
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
                disabled={!selectedBrand}
              >
                <option value="">Choose a model</option>
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Year & Color */}
            <div className="flex flex-col sm:flex-row gap-2">
              {/* <input
                {...register("year", { required: true })}
                type="text"
                placeholder="Choose a year"
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              /> */}
              <select
                {...register("year", { required: true })}
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
                disabled={!selectedModel}
              >
                <option value="">Choose a year</option>
                {years.map((year) => (
                  <option key={year.id} value={year.year}>
                    {year.year}
                  </option>
                ))}
              </select>
              <select
                {...register("color")}
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              >
                <option value="">Exterior color</option>
                {colors.map((color) => (
                  <option key={color.id} value={color.id}>
                    {color.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mileage & VIN */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                {...register("mileage")}
                type="text"
                placeholder="Mileage"
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              />
              <input
                {...register("vin")}
                type="text"
                placeholder="VIN (optional)"
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#EB0102] text-white text-sm font-medium py-3 rounded-full hover:bg-[#EB0102]"
        >
          Check availability
        </button>
      </form>
      {/* 👇 Login Popup */}
      {/* {showLoginPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 animate-fadeIn">
    <div className="relative bg-white rounded-2xl shadow-2xl w-96 overflow-hidden animate-scaleUp">

      <div className="bg-gradient-to-r from-[#EB0102] to-indigo-700 h-14 flex items-center justify-center">
        <h2 className="text-lg sm:text-2xl font-hanken text-white tracking-wide">
          Sign In Required
        </h2>
      </div>

      <div className="p-6 text-center">
        <p className="text-sm text-gray-600 mb-6">
          To contact the dealer or continue with this action, please sign in to your account.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              setShowLoginPopup(false);
              window.location.href = "/sign-in"; 
            }}
            className="flex items-center gap-2 px-6 py-1 bg-[#EB0102] text-white rounded-full font-medium hover:bg-[#2d2a73] transition shadow-md"
          >
            <span>Sign In</span>
          </button>
          <button
            onClick={() => setShowLoginPopup(false)}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </div>

      <button
        onClick={() => setShowLoginPopup(false)}
        className="absolute top-3 right-3 text-gray-300 hover:text-white bg-black/40 rounded-full p-0.5 px-1.5"
      >
        ✕
      </button>
    </div>
  </div>
)} */}
      {showLoginPopup && (
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}


    </>
  );
};

export default CarDetailedForm;
