import { FiChevronDown } from "react-icons/fi";

const FilterTag = ({ label, value }) => (
  <div className="bg-gray-100 rounded-md px-4 py-2 cursor-pointer flex justify-between items-center w-full">
    <div className="flex flex-col leading-tight w-full">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-sm text-black whitespace-nowrap truncate">{value}</span>
    </div>
    <FiChevronDown className="text-gray-400 ml-2 shrink-0" />
  </div>
);

export default FilterTag;
