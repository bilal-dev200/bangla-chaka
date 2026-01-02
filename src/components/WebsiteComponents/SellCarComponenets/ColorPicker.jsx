"use client";

import { useState } from "react";
import { useFormikContext } from "formik";

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

const ColorPickerField = ({ label, name1, name2 }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  const [showModal, setShowModal] = useState(false);
  const [activeColorField, setActiveColorField] = useState(null); 
    const [showName2Error, setShowName2Error] = useState(false);

  const getSelectedColor = (name) =>
    colors.find((c) => c.name === values[name]);

  const handleColorSelect = (color) => {
    if (activeColorField) {
      setFieldValue(activeColorField, color.name);
      setShowModal(false);
    }
  };

    const handleOpenColorPicker = (name) => {
    if (name === name2 && !getSelectedColor(name1)) {
      setShowName2Error(true); // Show error
      return;
    }
    setShowName2Error(false); // Clear error if valid
    setActiveColorField(name);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-2">
        <button
          type="button"
          className={`w-10 h-10 rounded-xl border-2 ${
            getSelectedColor(name1)?.class || "bg-white"
          } ${errors[name1] ? "border-red-500" : "border-black"}`}
        onClick={() => handleOpenColorPicker(name1)}
        />
        <button
          type="button"
          className={`w-10 h-10 rounded-xl border-2 ${
            getSelectedColor(name2)?.class || "bg-white"
          } ${errors[name1] ? "border-red-500" : "border-black"}`}
        onClick={() => handleOpenColorPicker(name2)}
          disabled={!getSelectedColor(name1)}
        />
      </div>

      {/* Optional error message (for first color only) */}
      {touched[name1] && errors[name1] && (
        <p className="text-xs text-red-500">{errors[name1]}</p>
      )}
      {showName2Error && (
        <p className="text-xs text-red-500">Please select the first color before choosing the second.</p>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] md:w-[28%] h-[580px] relative">
            <button
              type="button"
              className="absolute top-2 right-3 text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h2 className="text-lg font-semibold mb-4 text-center">
              Select Exterior Color
            </h2>

            <div className="grid grid-cols-4 gap-4 overflow-y-auto max-h-[460px]">
              {colors.map((color) => (
                <div key={color.name} className="flex flex-col items-center">
                  <button
                    type="button"
                    className={`w-10 h-10 rounded border ${color.class}`}
                    onClick={() => handleColorSelect(color)}
                    title={color.name}
                  />

                  <span className="text-xs mt-1 text-center">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPickerField;
