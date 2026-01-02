import React, { useState, useEffect } from "react"; // Import useEffect
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  FaCar,
  FaRoad,
  FaChair,
  FaDotCircle,
  FaLightbulb,
  FaTools,
  FaShoppingCart,
  FaEllipsisH,
} from "react-icons/fa";
import CarBodyDiagram from "./CarBodyDiagram"; // Ensure this path is correct based on your project structure
import CarGlassDiagram from "./CarGlassDiagram";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import CarTyreDiagram from "./CarTyreDiagram";
import CarInteriorDiagram from "./CarInteriorDiagram";
import IssueSelector from "./CarLight";
import CarMechanicalDiagram from "./CarMechanicalDiagram";
import CarAftermarketDiagram from "./CarAftermarketDiagram";
import CarOther from "./CarOther";
import { useCarStore } from "@/lib/store/carStore";

const sidebarItems = [
  { label: "Body", icon: <FaCar /> },
  { label: "Glass", icon: <FaRoad /> },
  { label: "Interior", icon: <FaChair /> },
  { label: "Tires", icon: <FaDotCircle /> },
  { label: "Lights", icon: <FaLightbulb /> },
  { label: "Mechanical", icon: <FaTools /> },
  { label: "Aftermarket", icon: <FaShoppingCart /> },
  { label: "Other", icon: <FaEllipsisH /> },
];

const damageOptions = {
  Hood: {
    types: [
      { name: "Overspray", cost: 50 },
      { name: "Chipped", cost: 100 },
      { name: "Dent", cost: 200 },
      { name: "Hail Damage", cost: 300 },
      { name: "Paintless Dent Repair", cost: 150 },
      { name: "Previous Paint Work", cost: 75 },
      { name: "Rust", cost: 250 },
      { name: "Scratch", cost: 80 },
    ],
    description:
      "Dents can be repaired if they are not cracked, have sharp indents, or are very large. If the body panel is made of aluminum, a dent cannot be repaired.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 500 },
    ],
  },
  Trunk: {
    types: [
      { name: "Dent", cost: 180 },
      { name: "Scratch", cost: 60 },
      { name: "Rust", cost: 220 },
    ],
    description: "Trunk damage considerations.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 450 },
    ],
  },
  "Front Bumper": {
    types: [
      { name: "Scratch", cost: 70 },
      { name: "Crack", cost: 300 },
      { name: "Dent", cost: 150 },
    ],
    description: "Front bumper damage details.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 350 },
    ],
  },
  "Rear Bumper": {
    types: [
      { name: "Scratch", cost: 70 },
      { name: "Crack", cost: 300 },
      { name: "Dent", cost: 150 },
    ],
    description: "Rear bumper damage details.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 350 },
    ],
  },
  "Front Left Light": {
    types: [
      { name: "Cracked", cost: 120 },
      { name: "Non-functional", cost: 250 },
    ],
    description: "Front left light issues.",
    subcategories: [{ name: "Replace", cost: 0 }],
  },
  "Front Right Light": {
    types: [
      { name: "Cracked", cost: 120 },
      { name: "Non-functional", cost: 250 },
    ],
    description: "Front right light issues.",
    subcategories: [{ name: "Replace", cost: 0 }],
  },
  "Rear Left Light": {
    types: [
      { name: "Cracked", cost: 100 },
      { name: "Non-functional", cost: 200 },
    ],
    description: "Rear left light issues.",
    subcategories: [{ name: "Replace", cost: 0 }],
  },
  "Rear Right Light": {
    types: [
      { name: "Cracked", cost: 100 },
      { name: "Non-functional", cost: 200 },
    ],
    description: "Rear right light issues.",
    subcategories: [{ name: "Replace", cost: 0 }],
  },
  "Front Left Fender": {
    types: [
      { name: "Dent", cost: 180 },
      { name: "Scratch", cost: 90 },
    ],
    description: "Front left fender damage.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 400 },
    ],
  },
  "Rear Left Fender": {
    types: [
      { name: "Dent", cost: 180 },
      { name: "Scratch", cost: 90 },
    ],
    description: "Rear left fender damage.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 400 },
    ],
  },
  "Front Right Fender": {
    types: [
      { name: "Dent", cost: 180 },
      { name: "Scratch", cost: 90 },
    ],
    description: "Front right fender damage.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 400 },
    ],
  },
  "Rear Right Fender": {
    types: [
      { name: "Dent", cost: 180 },
      { name: "Scratch", cost: 90 },
    ],
    description: "Rear right fender damage.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 400 },
    ],
  },
  "Front Left Doors": {
    types: [
      { name: "Dent", cost: 250 },
      { name: "Scratch", cost: 120 },
      { name: "Ding", cost: 80 },
    ],
    description: "Front left door issues.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 600 },
    ],
  },
  "Back Left Door": {
    types: [
      { name: "Dent", cost: 250 },
      { name: "Scratch", cost: 120 },
      { name: "Ding", cost: 80 },
    ],
    description: "Back left door issues.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 600 },
    ],
  },
  "Front Right Door": {
    types: [
      { name: "Dent", cost: 250 },
      { name: "Scratch", cost: 120 },
      { name: "Ding", cost: 80 },
    ],
    description: "Front right door issues.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 600 },
    ],
  },
  "Back Right Door": {
    types: [
      { name: "Dent", cost: 250 },
      { name: "Scratch", cost: 120 },
      { name: "Ding", cost: 80 },
    ],
    description: "Back right door issues.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 600 },
    ],
  },
  "Left Rocker": {
    types: [
      { name: "Scrape", cost: 100 },
      { name: "Rust", cost: 200 },
    ],
    description: "Left rocker panel damage.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 300 },
    ],
  },
  "Right Rocker": {
    types: [
      { name: "Scrape", cost: 100 },
      { name: "Rust", cost: 200 },
    ],
    description: "Right rocker panel damage.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 300 },
    ],
  },
  "Left Mirror": {
    types: [
      { name: "Cracked Glass", cost: 50 },
      { name: "Broken Casing", cost: 150 },
    ],
    description: "Left mirror damage.",
    subcategories: [{ name: "Replace", cost: 0 }],
  },
  "Right Mirror": {
    types: [
      { name: "Cracked Glass", cost: 50 },
      { name: "Broken Casing", cost: 150 },
    ],
    description: "Right mirror damage.",
    subcategories: [{ name: "Replace", cost: 0 }],
  },
  roof: {
    types: [
      { name: "Hail Damage", cost: 400 },
      { name: "Large Dent", cost: 350 },
    ],
    description: "Roof damage considerations.",
    subcategories: [
      { name: "Repair", cost: 0 },
      { name: "Replace", cost: 800 },
    ],
  },
};

const schema = yup.object().shape({
  accident: yup.string().required("Please select an option"),
  damageAmount: yup
    .string()
    .transform((value) => (value === "" ? undefined : value))
    .when("accident", {
      is: "yes",
      then: (schema) => schema.required("Please enter accident damage amount"),
      otherwise: (schema) => schema.notRequired(),
    }),
  frameDamage: yup.string().nullable(),
  cleanHistory: yup.string().required("Please select an option"),
  otherIssues: yup.string().required("Please select an option"),
});


export const Form2 = ({ setStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   accident: "",
    //   damageAmount: "",
    //   frameDamage: "",
    //   cleanHistory: "",
    //   otherIssues: "",
    // },
  });
  const { setStep2 } = useCarStore();
  const accident = watch("accident");
  const cleanHistory = watch("cleanHistory");
  const otherIssues = watch("otherIssues");
  const [selectedSidebar, setSelectedSidebar] = useState("Body");
  const [damageDetails, setDamageDetails] = useState({});
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedDamageType, setSelectedDamageType] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedIssues, setSelectedIssues] = useState([]);
  const [otherIssues2, setOtherIssues2] = useState([]);

  // Use useEffect to reset state when selectedSidebar changes
  useEffect(() => {
    setSelectedPart(null);
    setSelectedDamageType(null);
    setSelectedSubcategory(null);
    // You might also want to clear selectedIssues if it's relevant to the current sidebar.
    // For example, if you switch from "Lights" to "Body", the selected light issues
    // might not be relevant anymore for the Body diagram.
    // setSelectedIssues([]);
  }, [selectedSidebar]);

  const onSubmit = (data) => {
    // ✅ 1. Map form values into key-value format
    const formAnswers = {
      "Was your car ever in an accident? *": data.accident === "yes" ? "YES" : "NO",
      "Accident damage amount": data.damageAmount || "N/A",
      "Frame Damage": data.frameDamage || "NO",
      "Does your car have a clean history report? *": data.cleanHistory === "yes" ? "YES" : "NO",
      "Does your car have any damage, mechanical issues, tire wear, or modifications? *":
        data.otherIssues === "yes" ? "YES" : "NO",
    };

    // ✅ 2. Map damageDetails into clean structure
    const formattedDamages = {};

    Object.keys(damageDetails).forEach((part) => {
      const detail = damageDetails[part];
      const section = detail?.section || "Condition"; // fallback section if not set

      if (!formattedDamages[section]) formattedDamages[section] = {};

      // Handle aftermarket/other with modifications
      if (detail?.modifications) {
        formattedDamages[section][part] = detail.modifications.map((mod) =>
          typeof mod === "string" ? mod : `${mod.name} - $${mod.cost || 0}`
        );
      }
      // Handle standard damages
      else {
        const damageKeyParts = [];

        if (detail?.damageTypes?.length) {
          damageKeyParts.push(...detail.damageTypes.map((d) => `${d.name} - $${d.cost || 0}`));
        }

        if (detail?.subcategory?.name) {
          damageKeyParts.push(`${detail.subcategory.name} - $${detail.subcategory.cost || 0}`);
        }

        formattedDamages[section][part] = damageKeyParts.length > 0 ? damageKeyParts : ["N/A"];
      }
    });

    // ✅ 3. Merge into one payload
    const finalData = {
      ...formAnswers,
      ...formattedDamages,
    };

    const formatData = {
      type: "CONDITION",
      data: finalData,
    };

    // ✅ 4. Save into Zustand (or pass forward)
    setStep2(formatData);

    console.log("🔥 Final Step2 Data:", JSON.stringify(formatData, null, 2));
    setStep(3);
  };


  const handleRemoveDamage = (partName) => {
    setDamageDetails((prevDetails) => {
      const newDetails = { ...prevDetails };
      delete newDetails[partName];
      // No need to clear selectedPart, selectedDamageType, selectedSubcategory here
      // as they are handled by the useEffect when sidebar changes.
      return newDetails;
    });
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-6xl mx-auto p-8 bg-gray-50 rounded-lg">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-1 font-sans">
            Tell us about your car Condition
          </h1>
          <p className="text-sm text-gray-500 tracking-wide font-sans">
            All fields with * are required
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Question 1: Was your car ever in an accident? */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-sans text-gray-700 mb-2">
                Was your car ever in an accident? *
              </label>
              {accident === "yes" && (
                <div className="space-y-2 mt-6">
                  <input
                    {...register("damageAmount")}
                    type="text"
                    placeholder="Accident damage amount"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                  {errors.damageAmount && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.damageAmount.message}
                    </p>
                  )}
                  <label className="flex items-center text-sm gap-2">
                    <input
                      type="radio"
                      {...register("frameDamage")}
                      value="YES"
                    />
                    Frame Damage
                  </label>
                </div>
              )}
              {errors.accident && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.accident.message}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setValue("accident", "yes");
                  setValue("damageAmount", "");
                  setValue("frameDamage", "");
                }} // Reset dependent fields when changing 'accident'
                className={`w-[60px] h-10 rounded-md text-sm border ${accident === "yes"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                  }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => {
                  setValue("accident", "no");
                  setValue("damageAmount", "");
                  setValue("frameDamage", "");
                }} // Reset dependent fields
                className={`w-[60px] h-10 rounded-md text-sm border ${accident === "no"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                  }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 2: Does your car have a clean history report? */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-sans text-gray-700 mb-1">
                Does your car have a clean history report? *
              </label>
              <p className="text-xs font-sans text-gray-500 mb-2">
                Issues that may affect your car’s history report include past
                insurance claims, outstanding liens, salvage or title issues
              </p>
              {errors.cleanHistory && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cleanHistory.message}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setValue("cleanHistory", "yes")}
                className={`w-[60px] h-10 rounded-md text-sm border ${cleanHistory === "yes"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                  }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setValue("cleanHistory", "no")}
                className={`w-[60px] h-10 rounded-md text-sm border ${cleanHistory === "no"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                  }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 3: Does your car have any damage, mechanical issues, tire wear, or modifications? */}
          <div className="flex items-start justify-between gap-4">
            <label className="text-sm font-sans text-gray-700">
              Does your car have any damage, mechanical issues, tire wear, or
              modifications? *
            </label>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setValue("otherIssues", "yes")}
                className={`w-[60px] h-10 rounded-md text-sm border ${otherIssues === "yes"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                  }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setValue("otherIssues", "no")}
                className={`w-[60px] h-10 rounded-md text-sm border ${otherIssues === "no"
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black"
                  }`}
              >
                No
              </button>
            </div>
          </div>
          {errors.otherIssues && (
            <p className="text-red-500 text-sm mt-1">
              {errors.otherIssues.message}
            </p>
          )}

          {otherIssues === "yes" && (
            <div className="mt-10">
              <p className="text-sm font-sans text-gray-700 mb-2">
                Click each of the boxes below to identify issues with your car
                using the diagrams and menu items.
              </p>

              <div className="flex flex-col md:flex-row gap-2 mt-4">
                {/* Sidebar Menu */}
                <div className="w-full md:w-[200px]  flex flex-row md:flex-col scroll-smooth overflow-auto ">
                  {sidebarItems.map((item, i) => (
                    <button
                      key={i}
                      type="button" // Important: set type="button" for non-submit buttons
                      className={`flex justify-center items-center md:justify-start gap-4 w-full py-2 font-sans text-left text-sm px-3 ${selectedSidebar === item.label // Use strict equality
                          ? "bg-[#EB0102] text-white rounded-lg"
                          : "text-gray-700 border-b"
                        }`}
                      onClick={() => {
                        setSelectedSidebar(item.label);
                      }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
                {/* Conditional rendering for CarBodyDiagram */}
                {selectedSidebar === "Body" && (
                  <>
                    {/* Vehicle Diagram and Issue Types */}
                    <CarBodyDiagram
                      selectedSidebar={selectedSidebar}
                      damageDetails={damageDetails}
                      setDamageDetails={setDamageDetails}
                      selectedPart={selectedPart}
                      setSelectedPart={setSelectedPart}
                      selectedDamageType={selectedDamageType}
                      setSelectedDamageType={setSelectedDamageType}
                      selectedSubcategory={selectedSubcategory}
                      setSelectedSubcategory={setSelectedSubcategory}
                    />
                  </>
                )}
                {selectedSidebar === "Glass" && (
                  <>
                    {/* Vehicle Diagram and Issue Types */}
                    <CarGlassDiagram
                      selectedSidebar={selectedSidebar}
                      damageDetails={damageDetails}
                      setDamageDetails={setDamageDetails}
                      selectedPart={selectedPart}
                      setSelectedPart={setSelectedPart}
                      selectedDamageType={selectedDamageType}
                      setSelectedDamageType={setSelectedDamageType}
                      selectedSubcategory={selectedSubcategory}
                      setSelectedSubcategory={setSelectedSubcategory}
                    />
                  </>
                )}

                {selectedSidebar === "Tires" && (
                  <>
                    {/* Vehicle Diagram and Issue Types */}
                    <CarTyreDiagram
                      selectedSidebar={selectedSidebar}
                      damageDetails={damageDetails}
                      setDamageDetails={setDamageDetails}
                      selectedPart={selectedPart}
                      setSelectedPart={setSelectedPart}
                      selectedDamageType={selectedDamageType}
                      setSelectedDamageType={setSelectedDamageType}
                      selectedSubcategory={selectedSubcategory}
                      setSelectedSubcategory={setSelectedSubcategory}
                    />
                  </>
                )}

                {selectedSidebar === "Interior" && (
                  <>
                    {/* Vehicle Diagram and Issue Types */}
                    <CarInteriorDiagram
                      selectedSidebar={selectedSidebar}
                      damageDetails={damageDetails}
                      setDamageDetails={setDamageDetails}
                      selectedPart={selectedPart}
                      setSelectedPart={setSelectedPart}
                      selectedDamageType={selectedDamageType}
                      setSelectedDamageType={setSelectedDamageType}
                      selectedSubcategory={selectedSubcategory}
                      setSelectedSubcategory={setSelectedSubcategory}
                    />
                  </>
                )}

                {selectedSidebar === "Lights" && (
                  <IssueSelector
                    selectedIssues={selectedIssues}
                    setSelectedIssues={setSelectedIssues}
                    damageDetails={damageDetails}
                    setDamageDetails={setDamageDetails}
                  />
                )}

                {selectedSidebar === "Mechanical" && (
                  <CarMechanicalDiagram
                    selectedSidebar={selectedSidebar}
                    damageDetails={damageDetails}
                    setDamageDetails={setDamageDetails}
                    selectedPart={selectedPart}
                    setSelectedPart={setSelectedPart}
                    selectedDamageType={selectedDamageType}
                    setSelectedDamageType={setSelectedDamageType}
                    selectedSubcategory={selectedSubcategory}
                    setSelectedSubcategory={setSelectedSubcategory}
                  />
                )}

                {selectedSidebar === "Aftermarket" && (
                  <CarAftermarketDiagram
                    damageDetails={damageDetails}
                    setDamageDetails={setDamageDetails}
                    selectedIssues={selectedIssues}
                    setSelectedIssues={setSelectedIssues}
                  />
                )}
                {selectedSidebar === "Other" && (
                  <CarOther
                    damageDetails={damageDetails}
                    setDamageDetails={setDamageDetails}
                    selectedIssues={otherIssues2}
                    setSelectedIssues={setOtherIssues2}
                  />
                )}
              </div>
            </div>
          )}

          <div className="w-full flex flex-col justify-center max-w-2xl">
            {Object.keys(damageDetails).map((partName, index) => {
              const detail = damageDetails[partName];

              // ✅ Handle Aftermarket separately
              if (
                (partName === "Aftermarket" || partName === "Other") &&
                detail &&
                Array.isArray(detail.modifications) &&
                detail.modifications.length > 0
              ) {
                const totalCost = detail.modifications.reduce(
                  (sum, item) => sum + (item.cost || 0),
                  0
                );

                return (
                  <div
                    key={partName + "-summary"}
                    className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md"
                  >
                    <div className="text-sm text-gray-800 flex items-center flex-wrap">
                      <MdKeyboardArrowRight />
                      <span className="font-medium text-black ml-1">{partName}</span>
                      <span className="text-gray-600 ml-2">
                        {detail.modifications.map((mod) => mod.name).join(", ")}
                      </span>
                      <span className="text-red-600 ml-2">
                        - ${totalCost.toLocaleString()}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        setDamageDetails((prev) => {
                          const updated = { ...prev };
                          delete updated[partName];
                          return updated;
                        })
                      }
                      className="text-white bg-black rounded-full w-4 h-4 flex items-center justify-center hover:opacity-80 transition-opacity ml-2"
                    >
                      <RxCross2 size={12} />
                    </button>
                  </div>
                );
              }

              // 🔁 Handle all standard damaged parts (multiple damage types)
              const damageNames = [
                ...(detail?.damageTypes?.map((t) => t.name) || []),
                ...(detail?.subcategory?.name ? [detail.subcategory.name] : []),
              ];

              const totalCost =
                (detail?.damageTypes?.reduce((sum, t) => sum + (t.cost || 0), 0) || 0) +
                (detail?.subcategory?.cost || 0);

              return (
                <div
                  key={partName + index}
                  className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md"
                >
                  <div className="text-sm text-gray-800 flex items-center flex-wrap">
                    <MdKeyboardArrowRight />
                    <span className="font-medium text-black ml-1">{partName}</span>
                    {damageNames.length > 0 && (
                      <span className="text-gray-600 ml-2">
                        {damageNames.join(" - ")}
                      </span>
                    )}
                    <span className="text-red-600 ml-2">
                      - ${totalCost.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemoveDamage(partName)}
                    className="text-white bg-black rounded-full w-4 h-4 flex items-center justify-center hover:opacity-80 transition-opacity ml-2"
                  >
                    <RxCross2 size={12} />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex justify-center gap-4 w-full">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="bg-gray-300 text-black px-6 py-2 rounded-full text-sm"
            >
              Back
            </button>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm"
            >
              Next
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Form2;
