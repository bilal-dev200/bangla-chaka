import React, { useEffect } from "react";

const mechanicalParts = [
  "Engine",
  "Transmission",
  "Radiator",
  "Battery",
  "Alternator",
  "Suspension",
  "Brakes",
];

const CarMechanicalDiagram = ({
  damageDetails,
  setDamageDetails,
  selectedPart,
  setSelectedPart,
  selectedSubcategory,
  setSelectedSubcategory,
}) => {
  const damageTypes = [
    { name: "Leak", cost: 150 },
    { name: "Noise", cost: 100 },
    { name: "Overheating", cost: 200 },
    { name: "Failure", cost: 300 },
  ];

  const subcategories = [
    { name: "Repair", cost: 0 },
    { name: "Replace", cost: 500 },
  ];

  // Save damage details when subcategory selected
  useEffect(() => {
    if (selectedPart && selectedSubcategory) {
      setDamageDetails((prev) => {
        const existing = prev[selectedPart] || {};
        return {
          ...prev,
          [selectedPart]: {
            ...existing,
            subcategory: selectedSubcategory,
          },
        };
      });
    }
  }, [selectedPart, selectedSubcategory, setDamageDetails]);

  const handlePartSelect = (part) => {
    setSelectedPart(part);
    setSelectedSubcategory(null);
  };

  // ✅ Toggle multiple damage types
  const handleDamageTypeSelect = (type) => {
    if (!selectedPart) return;

    setDamageDetails((prev) => {
      const existing = prev[selectedPart]?.damageTypes || [];
      const alreadySelected = existing.some((d) => d.name === type.name);

      return {
        ...prev,
        [selectedPart]: {
          ...prev[selectedPart],
          damageTypes: alreadySelected
            ? existing.filter((d) => d.name !== type.name)
            : [...existing, type],
        },
      };
    });
  };

  return (
    <div className="space-y-6">
      <p className="mb-2 font-medium">
        Select all the issues that apply. <span className="text-red-500">*</span>
      </p>

      {/* Mechanical Parts */}
      <div className="flex flex-wrap gap-2 max-w-xl">
        {mechanicalParts.map((part) => (
          <button
            type="button"
            key={part}
            className={`px-3 py-2 rounded-full border ${
              selectedPart === part
                ? "bg-indigo-600 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handlePartSelect(part)}
          >
            {part}
          </button>
        ))}
      </div>

      {/* Damage Types */}
      {selectedPart && (
        <div>
          <p className="mt-4 font-medium">Select issues for {selectedPart}:</p>
          <div className="flex flex-wrap gap-2">
            {damageTypes.map((type) => {
              const isSelected =
                damageDetails[selectedPart]?.damageTypes?.some(
                  (t) => t.name === type.name
                );

              return (
                <button
                  type="button"
                  key={type.name}
                  onClick={() => handleDamageTypeSelect(type)}
                  className={`px-3 py-2 rounded-full text-sm border transition-colors duration-200 ${
                    isSelected
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {type.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      
      {/* {selectedPart && (
        <>
          <div className="space-y-2">
            <p className="mb-4 font-medium">Select Damage Type:</p>
            <div className="flex flex-wrap gap-2">
              {damageTypes.map((type) => (
                <button
                type="button"
                  key={type.name}
                  className={`px-3 py-1 border rounded-full ${
                    selectedDamageType?.name === type.name
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setSelectedDamageType(type)}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="mb-4 font-medium">Select Subcategory:</p>
            <div className="flex gap-2">
              {subcategories.map((sub) => (
                <button
                type="button"
                  key={sub.name}
                  className={`px-3 py-1 border rounded-full ${
                    selectedSubcategory?.name === sub.name
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setSelectedSubcategory(sub)}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )} */}
    </div>
  );
};

export default CarMechanicalDiagram;
