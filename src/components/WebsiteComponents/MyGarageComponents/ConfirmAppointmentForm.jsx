import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const steps = [
  { step: 1, active: true, title: "Schedule Inspection" },
  { step: 2, active: false, title: "Confirm & Submit" },
];

const vehicleFields = ["Make", "Year", "Trim", "Mileage"];
const dealerFields = [
  "Enter dealer name",
  "Offer range or fixed amount ",
  "Dealer location",
];
const appointmentFields = [
  { type: "date", placeholder: "" },
  { type: "select", options: ["Morning", "Afternoon", "Evening"] },
];

const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

const ConfirmAppointmentForm = () => {
  const [formData, setFormData] = useState({
    vin: "",
    location: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!vinRegex.test(formData.vin)) {
      newErrors.vin = "VIN must be 17 characters long and exclude I, O, Q";
    }

    if (!formData.location) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white min-h-screen pb-24">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex justify-center mb-10">
          <div className="relative flex justify-between w-2/3 mx-auto">
            <div className="absolute mt-7 left-7 right-24 ml-6 h-1 bg-gray-300 z-0 transform -translate-y-1/2"></div>
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-full font-semibold bg-purple-700 text-white">
                  {s.step}
                </div>
                <p className="font-bold mt-3 text-center">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-10 mt-3 mb-10 rounded-xl max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
          Review & Confirm Your Details
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8">
          Make sure everything looks good before submitting your appointment.
        </p>

        <div className="border-2 border border-black p-8 text-center rounded-xl mb-6 cursor-pointer hover:bg-gray-50 transition">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">
              <IoCloudUploadOutline size={44} />
            </span>
            <p className="text-gray-400 font-medium">Upload a car picture</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Vehicle Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {vehicleFields.map((field, i) => (
              <input
                key={i}
                type="text"
                placeholder={field}
                className="w-full px-4 py-3 rounded-xl border border-black"
              />
            ))}
            <input
              type="text"
              name="vin"
              placeholder="VIN"
              value={formData.vin}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.vin ? "border-red-500" : "border-black"
              }`}
            />
          </div>
          {errors.vin && (
            <p className="text-sm text-red-500 mt-1">{errors.vin}</p>
          )}
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Dealer Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {dealerFields.map((placeholder, i) => (
              <input
                key={i}
                type="text"
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-black"
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Appointment Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {appointmentFields.map((field, i) =>
              field.type === "select" ? (
                <select
                  key={i}
                  className="w-full px-4 py-3 rounded-xl border border-black"
                >
                  <option>Select Time Slot</option>
                  {field.options.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  key={i}
                  type={field.type}
                  className="w-full px-4 py-3 rounded-xl border border-black"
                />
              )
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <input
            type="text"
            name="location"
            placeholder="Enter your location (optional)"
            value={formData.location}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.location ? "border-red-500" : "border-black"
            }`}
          />
          {errors.location && (
            <p className="text-xs text-red-500 mt-2">{errors.location}</p>
          )}
          <p className="text-xs text-gray-400 mt-2">
            * If no location is chosen, the dealer location will be selected.
          </p>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </form>
  );
};

export default ConfirmAppointmentForm;
