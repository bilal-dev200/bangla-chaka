"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaPlus, FaTimes } from "react-icons/fa";
import { dropDownApi } from "@/lib/api/dropdown";
import { useCarStore } from "@/lib/store/carStore";
import Image from "next/image";

const imageCategories = [
  { name: "Front Right Corner", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/right-front.svg" },
  { name: "Front Left Corner", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/left-front.svg" },
  { name: "Back Right Corner", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/right-rear.svg" },
  { name: "Back Left Corner", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/left-rear.svg" },
  { name: "Front Tire, left side", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/tire-tread.svg" },
  { name: "Front Tire, right side", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/tire-tread.svg" },
  { name: "Back Tire, left side", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/tire-tread.svg" },
  { name: "Back Tire, right side", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/tire-tread.svg" },
  { name: "Odometer", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/odometer.svg" },
  { name: "Front Seat", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/left-front-seat.svg" },
  { name: "Back Seat", placeholder: "https://cashoffer.accu-trade.com/assets/images/examples/right-rear-seats.svg" },
];
const colors = [
  { name: "Black", class: "bg-black" },
  { name: "Charcoal Grey", class: "bg-gray-800" },
  { name: "Grey", class: "bg-gray-500" },
  { name: "Silver", class: "bg-gray-300" },
  { name: "White", class: "bg-white border" },
  { name: "Pearl White", class: "bg-gray-50 border" },
  { name: "Beige", class: "bg-yellow-100" },
  { name: "Gold", class: "bg-yellow-400" },
  { name: "Tan", class: "bg-yellow-300" },
  { name: "Brown", class: "bg-yellow-800" },
  { name: "Burgundy", class: "bg-red-800" },
  { name: "Red", class: "bg-red-500" },
  { name: "Orange", class: "bg-orange-400" },
  { name: "Yellow", class: "bg-yellow-300" },
  { name: "Dark Green", class: "bg-green-800" },
  { name: "Bright Green", class: "bg-green-500" },
  { name: "Light Green", class: "bg-green-300" },
  { name: "Dark Blue", class: "bg-blue-900" },
  { name: "Bright Blue", class: "bg-blue-500" },
  { name: "Light Blue", class: "bg-blue-300" },
];

// const schema = yup.object().shape({
//   stillPayments: yup.string().nullable(),

//   paymentType: yup
//     .string()
//     .nullable()
//     .when("stillPayments", (val, schema) =>
//       val === "yes" ? schema : schema
//     ),

//   noPayment: yup
//     .string()
//     .nullable()
//     .when("paymentType", (val, schema) =>
//       val === "loan" ? schema : schema
//     ),

//   noPayments: yup
//     .string()
//     .nullable()
//     .when("paymentType", (val, schema) =>
//       val === "loan" ? schema : schema
//     ),

//   amount: yup
//     .string()
//     .nullable()
//     .when("paymentType", (val, schema) =>
//       val === "loan" ? schema : schema
//     ),

//   amountRemaining: yup
//     .string()
//     .nullable()
//     .when("paymentType", (val, schema) =>
//       val === "lease" ? schema : schema
//     ),

//   financing: yup.string().nullable(),
//   mileage: yup.string().nullable(),
//   zipCode: yup.string().nullable(),
//   keys: yup.string().nullable(),
//   originalOwner: yup.string().nullable(),
// });

// const schema = yup.object().shape({
//   stillPayments: yup.string().required("Please select an option"),

//   paymentType: yup
//     .string()
//     .when("stillPayments", (val, schema) =>
//       val === "yes" ? schema.required("Please select payment type") : schema
//     ),

//   noPayment: yup
//     .string()
//     .when("paymentType", (val, schema) =>
//       val === "loan" ? schema.required("Monthly Payment required") : schema
//     ),

//   noPayments: yup
//     .string()
//     .when("paymentType", (val, schema) =>
//       val === "loan" ? schema.required("Number of Payments required") : schema
//     ),

//   amount: yup
//     .string()
//     .when("paymentType", (val, schema) =>
//       val === "loan" ? schema.required("Total Amount required") : schema
//     ),

//   amountRemaining: yup
//     .string()
//     .when("paymentType", (val, schema) =>
//       val === "lease" ? schema.required("Amount Remaining required") : schema
//     ),

//   financing: yup.string().required("Select financing option"),
//   mileage: yup.string().required("Mileage is required"),
//   zipCode: yup.string().required("ZIP Code is required"),
//   keys: yup.string().required("Please enter how many keys you have"),
//   originalOwner: yup.string().required("Please select ownership status"),
// });
// const schema = yup.object().shape({
//   stillPayments: yup
//     .string()
//     .required("Please select an option"),

//   paymentType: yup
//     .string()
//     .when("stillPayments", (val, schema) =>
//       val === "yes" ? schema.required("Please select payment type") : schema
//     ),

//   noPayment: yup
//     .string()
//     .when("paymentType", (val, schema) =>
//       val === "loan" ? schema.required("Monthly Payment is required") : schema
//     ),

//   noPayments: yup
//     .string()
//     .when("paymentType", (val, schema) =>
//       val === "loan" ? schema.required("Number of Payments is required") : schema
//     ),

//   amount: yup
//     .string()
//     .when("paymentType", (val, schema) =>
//       val === "loan" ? schema.required("Total Amount is required") : schema
//     ),

//   amountRemaining: yup
//     .string()
//     .when("paymentType", (val, schema) =>
//       val === "lease" ? schema.required("Amount Remaining is required") : schema
//     ),

//   financing: yup
//     .string()
//     .required("Please select financing option"),

//   mileage: yup
//     .string()
//     .required("Mileage is required"),

//   zipCode: yup
//   .string()
//   .matches(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP Code")
//   .required("ZIP Code is required"),


//   keys: yup
//   .number()
//   .typeError("Keys must be a number")
//   .min(1, "At least 1 key required")
//   .required("Please enter how many keys you have"),
// exteriorColor1: yup.string().required("Please select a primary exterior color"),
// exteriorColor2: yup.string().nullable(),
//   originalOwner: yup
//     .string()
//     .required("Please select ownership status"),
// });
const schema = yup.object().shape({
  stillPayments: yup
    .string()
    .required("Please select an option"),

  paymentType: yup
    .string()
    .when("stillPayments", (val, schema) =>
      val === "yes" ? schema.required("Please select payment type") : schema
    ),

  noPayment: yup
    .string()
    .when("paymentType", (val, schema) =>
      val === "loan" ? schema.required("Monthly Payment is required") : schema
    ),

  noPayments: yup
    .string()
    .when("paymentType", (val, schema) =>
      val === "loan" ? schema.required("Number of Payments is required") : schema
    ),

  amount: yup
    .string()
    .when("paymentType", (val, schema) =>
      val === "loan" ? schema.required("Total Amount is required") : schema
    ),

  amountRemaining: yup
    .string()
    .when("paymentType", (val, schema) =>
      val === "lease" ? schema.required("Amount Remaining is required") : schema
    ),

  financing: yup
    .string()
    .required("Please select financing option"),

  mileage: yup
    .number()
    .typeError("Mileage must be a number")
    .positive("Mileage must be positive")
    .required("Mileage is required"),

  zipCode: yup
    .string()
    .matches(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP Code")
    .required("ZIP Code is required"),

  keys: yup
    .number()
    .typeError("Keys must be a number")
    .min(1, "At least 1 key required")
    .required("Please enter how many keys you have"),

  // ✅ Colors validation
  exteriorColor1: yup
    .string()
    .required("Please select a primary exterior color"),
  exteriorColor2: yup.string().nullable(),

  originalOwner: yup
    .string()
    .required("Please select ownership status"),

  images: yup
    .array()
    .of(
      yup.object().shape({
        category: yup.string().required(),
        file: yup
          .mixed()
          .required("Image required for this category")
          .test("file-required", "Image required for this category", (value) => {
            return value instanceof File; // sirf file accept kare
          }),
      })
    )
    .length(imageCategories.length, "All images are required")
    .required("Please upload all required images"),

  //  images: yup
  //     .array()
  //     .of(
  //       yup.object().shape({
  //         category: yup.string().required(),
  //         file: yup
  //           .mixed()
  //           .test("file-required", "Image required", (value) => !!value) // ensure file uploaded
  //       })
  //     )
  //     .min(imageCategories.length, "All images are required")
  //     .required("Please upload all required images"),
  // ✅ Images validation: all required
  // images: yup
  //   .array()
  //   .of(
  //     yup.object().shape({
  //       category: yup.string().required(),
  //       file: yup.mixed().required("Image required"),
  //     })
  //   )
  //   .min(11, "All images are required")
  //   .required("Please upload all required images"),
  // images: yup
  // .array()
  // .of(
  //   yup.object().shape({
  //     category: yup.string().required(),
  //     file: yup
  //       .mixed()
  //       .test("file-required", "Image required", (value) => value !== null && value !== undefined),
  //   })
  // )
  // .min(1, "All images are required")
  // .required("Please upload all required images"),

});



export default function Form1({ setStep }) {
  const { setStep1 } = useCarStore();
  const [showColorModal, setShowColorModal] = useState(false);
  const [activeColorField, setActiveColorField] = useState(null);
  const [formData, setFormData] = useState({
    exteriorColor1: null,
    exteriorColor2: null,
  });
  const [colors, setColors] = useState([]);
  useEffect(() => {
    const fetchColors = async () => {
      try {
        const res = await dropDownApi.getColorlist();
        if (res.data) {
          setColors(res.data);
        }
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    };
    fetchColors();
  }, []);


  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      stillPayments: "",
      paymentType: "",
      noPayment: "",
      noPayments: "",
      amount: "",
      amountRemaining: "",
      images: imageCategories.map(cat => ({ category: cat.name, file: null })), // ✅ Default

    },
  });

  const stillPayments = watch("stillPayments");
  const originalOwner = watch("originalOwner");
  const paymentType = watch("paymentType");
  const [uploadedImages, setUploadedImages] = useState(
    imageCategories.map(cat => ({ category: cat.name, file: null, preview: cat.placeholder }))
  );

  const handleColorSelect = (color) => {
    setFormData({ ...formData, [activeColorField]: color });

    // react-hook-form mai bhi set karo
    setValue(activeColorField, color.name);

    setShowColorModal(false);
    setActiveColorField(null);
  };


  const handleImageUpload = useCallback((event, categoryIndex) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...uploadedImages];
      newImages[categoryIndex] = {
        ...newImages[categoryIndex],
        file: file,
        preview: URL.createObjectURL(file),
      };
      setUploadedImages(newImages);
      setValue("images", newImages, { shouldValidate: true, shouldDirty: true });

    }
  }, [uploadedImages, setValue]);

  const handleRemoveImage = useCallback((categoryIndex) => {
    const newImages = [...uploadedImages];
    const categoryName = newImages[categoryIndex].category;
    const placeholder = imageCategories.find(cat => cat.name === categoryName)?.placeholder;

    if (newImages[categoryIndex].file) {
      URL.revokeObjectURL(newImages[categoryIndex].preview); // Clean up old URL
    }

    newImages[categoryIndex] = {
      ...newImages[categoryIndex],
      file: null,
      preview: placeholder || "https://placehold.co/100x70/E0E0E0/333333?text=Upload", // Fallback placeholder
    };
    setUploadedImages(newImages);
    setValue("images", newImages, { shouldValidate: true, shouldDirty: true });

  }, [uploadedImages, setValue]);

  const onSubmit = (data) => {
    // Map uploadedImages into object with correct keys
    const imageMap = {
      frontRightCornerImg: uploadedImages[0]?.file || null,
      frontLeftCornerImg: uploadedImages[1]?.file || null,
      backRightCornerImg: uploadedImages[2]?.file || null,
      backLeftCornerImg: uploadedImages[3]?.file || null,
      frontTireLeftSideImg: uploadedImages[4]?.file || null,
      frontTireRightSideImg: uploadedImages[5]?.file || null,
      backTireLeftSideImg: uploadedImages[6]?.file || null,
      backTireRightSideImg: uploadedImages[7]?.file || null,
      odometerImg: uploadedImages[8]?.file || null,
      frontSeatImg: uploadedImages[9]?.file || null,
      backSeatImg: uploadedImages[10]?.file || null,
    };
    const formattedData = {
      type: "DETAILS",
      data: {
        financing: data.financing || "",
        keys: data.keys || "",
        mileage: data.mileage || "",
        noPayment: data.noPayment || "",
        originalOwner: data.originalOwner || "",
        paymentType: data.paymentType || "",
        stillPayments: data.stillPayments || "",
        zipCode: data.zipCode || "",
        amount: data.amount || "",
        amountRemaining: data.amountRemaining || "",
        noPayments: data.noPayments || "",
        exteriorColor1: formData?.exteriorColor1?.id || "",
        exteriorColor2: formData?.exteriorColor2?.id || "",
      },
      // ✅ Images stored outside of `data`
      ...imageMap,
    };

    setStep1(formattedData);
    console.log(formattedData)
    setStep(2);
  };

  return (
    <div className="bg-white min-h-screen pb-24">

      <div className="max-w-6xl mx-auto p-8 bg-gray-50 rounded-lg">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">
            Tell us about your car
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            VEHICLE INFORMATION
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Select your initial financing options</label>
              <select {...register("financing")} className="h-10 px-3 border border-black rounded-xl">
                <option value="">Select option</option>
                <option value="cash">Cash</option>
                <option value="finance">Finance</option>
                <option value="lease">Lease</option>
              </select>
              {errors.financing && <p className="text-red-500 text-sm">{errors.financing.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">How many miles are displayed on your odometer?</label>
              <input {...register("mileage")} type="text" className="h-10 px-3 border border-black rounded-xl" />
              {errors.mileage && <p className="text-red-500 text-sm">{errors.mileage.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">What is your ZIP Code?</label>
              <input {...register("zipCode")} type="text" className="h-10 px-3 border border-black rounded-xl" />
              {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">What color is your car?</label>

              <div className="flex gap-2">
                <button
                  type="button"
                  className={`w-10 h-10 rounded-xl border-2 border-black ${formData.exteriorColor1?.class || ""}`}
                  style={{ backgroundColor: formData.exteriorColor1?.hex }}
                  onClick={() => {
                    setActiveColorField("exteriorColor1");
                    setShowColorModal(true);
                  }}
                />
                <button
                  type="button"
                  className={`w-10 h-10 rounded-xl border-2 border-black ${formData.exteriorColor2?.class || ""}`}
                  style={{ backgroundColor: formData.exteriorColor2?.hex }}
                  onClick={() => {
                    setActiveColorField("exteriorColor2");
                    setShowColorModal(true);
                  }}
                />
              </div>
              {errors.exteriorColor1 && (
                <p className="text-red-500 text-sm">{errors.exteriorColor1.message}</p>
              )}

            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">How many keys do you have?</label>
              <input {...register("keys")} type="text" className="h-10 px-3 border border-black rounded-xl" />
              {errors.keys && <p className="text-red-500 text-sm">{errors.keys.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Are you the original owner?</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setValue("originalOwner", "yes")}
                  className={`w-[100px] h-10 rounded-xl text-center text-gray-700 border border-black transition duration-200 hover:bg-black hover:text-white ${originalOwner === "yes" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setValue("originalOwner", "no")}
                  className={`w-[100px] h-10 rounded-xl text-center text-gray-700 border border-black transition duration-200 hover:bg-black hover:text-white ${originalOwner === "no" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
                >
                  No
                </button>
              </div>
              {errors.originalOwner && <p className="text-red-500 text-sm">{errors.originalOwner.message}</p>}
            </div>
          </div>
          {/* Image Upload Section */}
          <div className="mt-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Upload photos of your car
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {uploadedImages.map((image, index) => (
                <div
                  key={image.category}
                  className={`relative rounded-lg overflow-hidden transition-shadow duration-200 
    ${errors.images?.[index]?.file
                      ? "border-2 border-red-500 border-dashed"  // 🚨 Error case
                      : "border border-gray-300"                 // ✅ Normal case
                    }`}                >
                  {image.file && (
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-white text-red-500 hover:bg-red-100 rounded-full p-1 z-10"
                      aria-label={`Remove image for ${image.category}`}
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  )}

                  {!image.file && (
                    <button
                      type="button"
                      onClick={() => document.getElementById(`file-input-${index}`).click()}

                      // onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-white text-red-500 hover:bg-red-100 rounded-full p-1 z-10"
                      aria-label={`Remove image for ${image.category}`}
                    >
                      <FaPlus className="text-xs" />
                    </button>
                  )}

                  <Image
                    src={image.preview}
                    alt={image.category}
                    fill
                    unoptimized
                    className="object-cover object-center bg-gray-100"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        imageCategories.find((cat) => cat.name === image.category)
                          ?.placeholder || "";
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <label
                      htmlFor={`file-input-${index}`}
                      className="cursor-pointer text-white w-full h-full"
                    >
                      <input
                        id={`file-input-${index}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, index)}
                      />
                    </label>
                  </div>

                  <p className="px-2 py-0.5 text-start text-sm text-gray-700 bg-white font-hanken">
                    {image.category}
                  </p>

                </div>
              ))}
            </div>
            {errors.images && (
              <p className="text-red-500 text-sm mt-2">{errors.images.message}</p>
            )}
          </div>
          <div className="gap-8 mt-10">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="space-y-4">
                {/* Question Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <label className="text-sm font-medium text-gray-700 min-w-[250px]">
                    Are you still making payments on your car? *
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setValue("stillPayments", "yes")}
                      className={`w-[80px] h-10 rounded-xl border text-sm transition duration-200 ${stillPayments === "yes"
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-black"
                        }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setValue("stillPayments", "no")}
                      className={`w-[80px] h-10 rounded-xl border text-sm transition duration-200 ${stillPayments === "no"
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-black"
                        }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Error */}
                {errors.stillPayments && (
                  <p className="text-red-500 text-sm">{errors.stillPayments.message}</p>
                )}

                {/* Conditional Fields */}
                {stillPayments === "yes" && (
                  <div className="w-full flex flex-col items-center justify-center">
                    {/* Payment Type Buttons */}
                    <div className="flex justify-center gap-4 mt-4 ">
                      <button
                        type="button"
                        onClick={() => setValue("paymentType", "loan")}
                        className={`px-4 py-2 rounded-xl border transition duration-200 ${paymentType === "loan"
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-black"
                          }`}
                      >
                        Loan
                      </button>
                      <button
                        type="button"
                        onClick={() => setValue("paymentType", "lease")}
                        className={`px-4 py-2 rounded-xl border transition duration-200 ${paymentType === "lease"
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-black"
                          }`}
                      >
                        Lease
                      </button>
                    </div>
                    {errors.paymentType && (
                      <p className="text-red-500 text-sm">{errors.paymentType.message}</p>
                    )}

                    {/* Loan Fields */}
                    {paymentType === "loan" && (
                      <div className="flex flex-wrap max-w-2xl gap-2 mt-4">
                        <input
                          {...register("noPayment")}
                          type="text"
                          placeholder="Mo. Payment*"
                          className="border border-black rounded-lg px-3 h-10 w-full md:w-1/3"
                        />
                        <input
                          {...register("noPayments")}
                          type="text"
                          placeholder="Mo. Payments*"
                          className="border border-black rounded-lg px-3 h-10 w-full md:w-1/3"
                        />
                        <input
                          {...register("amount")}
                          type="text"
                          placeholder="Amount*"
                          className="border border-black rounded-lg px-3 h-10 w-full md:w-1/3"
                        />
                      </div>
                    )}

                    {/* Lease Field */}
                    {paymentType === "lease" && (
                      <input
                        {...register("amountRemaining")}
                        type="text"
                        placeholder="Amount Remaining (approx.)*"
                        className="border border-black rounded-lg px-3 h-10 w-full md:w-96 max-w-2xl mt-4"
                      />
                    )}

                    {(errors.noPayment || errors.noPayments || errors.amount || errors.amountRemaining) && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.noPayment?.message ||
                          errors.noPayments?.message ||
                          errors.amount?.message ||
                          errors.amountRemaining?.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 mt-6 rounded-full bg-indigo-700 text-white transition duration-200"
                >
                  Next
                </button>
              </div>

            </div>
          </div>

        </form>
      </div>
      {showColorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[28%] max-h-[450px] overflow-y-auto relative shadow-xl hide-scroll">
            {/* Close button */}
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => {
                setShowColorModal(false);
                setActiveColorField(null);
              }}
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-4 text-center">
              Exterior Color
            </h2>

            {/* Colors Grid */}
            <div className="grid grid-cols-4 gap-4">
              {colors.map((color) => (
                <div key={color.id || color.name} className="flex flex-col items-center">
                  <button
                    className="w-10 h-10 rounded border"
                    style={{ backgroundColor: color.hex || color.code }}
                    title={color.name}
                    onClick={() => handleColorSelect(color)}
                  />
                  <span className="text-xs text-center mt-1">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

