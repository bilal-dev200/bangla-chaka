import React from 'react';
import {
  FaCarBattery,
  FaCarCrash,
  FaCar,
  FaExclamationCircle,
} from 'react-icons/fa';
import { MdOutlineCarRepair, MdOutlineSpeed } from 'react-icons/md';
import { GiCarWheel } from 'react-icons/gi';
import { RiSteering2Fill } from 'react-icons/ri';

const issuesList = [
  { label: 'ABS (Anti-Lock Braking System)', icon: <MdOutlineSpeed size={28} />, value: 'ABS', cost: 150, type: 'Fault Detected', subcategory: 'Replace Sensor' },
  { label: 'Airbag/SRS', icon: <FaCarCrash size={28} />, value: 'Airbag/SRS', cost: 300, type: 'Warning Light', subcategory: 'Check Module' },
  { label: 'Battery', icon: <FaCarBattery size={28} />, value: 'Battery', cost: 180, type: 'Low Voltage', subcategory: 'Replace Battery' },
  { label: 'Brakes', icon: <FaExclamationCircle size={28} />, value: 'Brakes', cost: 250, type: 'Brake Wear', subcategory: 'Replace Pads' },
  { label: 'Engine', icon: <FaCar size={28} />, value: 'Engine', cost: 500, type: 'Check Engine Light', subcategory: 'Diagnostics' },
  { label: 'TPMS', icon: <GiCarWheel size={28} />, value: 'TPMS', cost: 120, type: 'Sensor Issue', subcategory: 'Replace Sensor' },
  { label: 'Suspension Fault', icon: <MdOutlineCarRepair size={28} />, value: 'Suspension Fault', cost: 400, type: 'Fault Detected', subcategory: 'Inspect Components' },
  { label: 'Traction Control', icon: <RiSteering2Fill size={28} />, value: 'Traction Control', cost: 200, type: 'System Alert', subcategory: 'Check System' },
];

const IssueSelector = ({ selectedIssues, setSelectedIssues, damageDetails, setDamageDetails }) => {
  const toggleIssue = (issue) => {
    const { value, type, subcategory, cost } = issue;

    if (selectedIssues.includes(value)) {
      // ✅ Remove issue if already selected
      setSelectedIssues(selectedIssues.filter((v) => v !== value));
      setDamageDetails((prev) => {
        const newDetails = { ...prev };
        delete newDetails[value];
        return newDetails;
      });
    } else {
      // ✅ Add issue with consistent structure
      setSelectedIssues([...selectedIssues, value]);
      setDamageDetails((prev) => ({
        ...prev,
        [value]: {
          damageTypes: [{ name: type, cost }],   // 👈 array like other parts
          subcategory: { name: subcategory, cost: 0 },
        },
      }));
    }
  };

  return (
    <div className="w-full p-4">
      <p className="mb-4 font-medium">
        Select all the issues that apply. <span className="text-red-500">*</span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {issuesList.map((issue) => (
          <button
            type="button"
            key={issue.value}
            onClick={() => toggleIssue(issue)}
            className={`flex flex-col items-center justify-center border rounded-lg p-4 text-center transition duration-300 ${
              selectedIssues.includes(issue.value)
                ? 'bg-black text-white border-black'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {issue.icon}
            <span className="text-sm mt-2">{issue.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IssueSelector;
