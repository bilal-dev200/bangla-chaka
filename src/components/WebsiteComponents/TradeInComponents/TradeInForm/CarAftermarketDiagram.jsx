import React, { useEffect } from "react";

const aftermarketOptions = [
  { name: "Exhaust", cost: 200 },
  { name: "Performance", cost: 300 },
  { name: "Stereo", cost: 150 },
  { name: "Spoiler", cost: 180 },
  { name: "Sunroof/Moonroof", cost: 400 },
  { name: "Suspension Lowered", cost: 250 },
  { name: "Wheels", cost: 350 },
  { name: "Window Tint", cost: 100 },
];

const CarAftermarketDiagram = ({
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
      Aftermarket: {
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

export default CarAftermarketDiagram;
