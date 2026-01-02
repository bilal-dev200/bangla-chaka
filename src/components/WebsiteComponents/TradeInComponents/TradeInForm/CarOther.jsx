import React, { useEffect } from "react";

const aftermarketOptions = [
  { name: "Salvage", cost: 200 },
  { name: "Rebuilt", cost: 300 },
  { name: "Fire Damage", cost: 150 },
  { name: "Flood Damage", cost: 180 },
  { name: "Stolen/Recovered", cost: 400 },
];

const CarOther = ({
  damageDetails,
  setDamageDetails,
  selectedIssues,
  setSelectedIssues,
}) => {
  const toggleSelection = (option) => {
    const isSelected = selectedIssues.some((item) => item.name === option.name);
    const updated = isSelected
      ? selectedIssues.filter((item) => item.name !== option.name)
      : [...selectedIssues, option];

    setSelectedIssues(updated);
  };

  useEffect(() => {
    setDamageDetails((prev) => ({
      ...prev,
      Other: {
        modifications: selectedIssues,
      },
    }));
  }, [selectedIssues, setDamageDetails]);

  const totalCost = selectedIssues.reduce((sum, item) => {
    const itemCost = typeof item === "object" ? item.cost || 0 : 0;
    return sum + itemCost;
  }, 0);

  return (
    <div className="space-y-4">
       <p className="mb-4 font-medium">
        Select all the issues that apply. <span className="text-red-500">*</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {aftermarketOptions.map((option) => {
          const isActive = selectedIssues.some((item) => item.name === option.name);
          return (
            <button
              key={option.name}
              type="button"
              onClick={() => toggleSelection(option)}
              className={`px-4 py-1 rounded-full border text-sm ${
                isActive
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              {option.name}
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default CarOther;
