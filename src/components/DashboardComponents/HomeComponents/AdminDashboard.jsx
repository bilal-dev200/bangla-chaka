import {
  FaCog,
  FaBell,
  FaSearch,
  FaChevronDown,
  FaEllipsisV,
} from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const students = Array(6).fill({
  sNo: 1,
  rollNo: "55365",
  name: "Janet",
  class: "5",
  section: "A",
  amount: "15,000",
  date: "17 Feb 2025",
  status: "Active",
});

export default function AdminDashboard() {
  const [rowsPerPage] = useState(10);

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-[#333]">

      {/* Filters */}
      <div className="px-6 mt-4 flex items-center space-x-4 text-sm">
        <div className="flex items-center space-x-2">
          <span>Row Per Page</span>
          <select className="border border-[#DADADA] rounded px-2 py-1 text-sm focus:outline-none">
            <option>{rowsPerPage}</option>
          </select>
        </div>
        <span>Entries</span>
        <input
          type="text"
          value="15,000"
          className="border border-[#DADADA] rounded px-2 py-1 text-sm w-24"
        />
        <input
          type="text"
          value="17 Feb 2025"
          className="border border-[#DADADA] rounded px-2 py-1 text-sm w-32"
        />
        <div className="ml-auto flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#DADADA] rounded px-2 py-1 text-sm w-48"
          />
          <button className="border border-[#DADADA] rounded px-3 py-1 flex items-center space-x-1">
            <span>Sort by A-Z</span>
            <FaChevronDown className="text-xs" />
          </button>
          <button className="border border-[#DADADA] rounded px-3 py-1">
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="px-6 mt-4">
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full text-sm table-auto">
            <thead className="text-[#6B6B6B] bg-[#F5F5F5] font-medium text-left">
              <tr>
                {[
                  "",
                  "S.No",
                  "Roll No",
                  "Student",
                  "Class",
                  "Section",
                  "Amount",
                  "Last Date",
                  "Status",
                  "Action",
                ].map((col, i) => (
                  <th key={i} className="px-4 py-3 whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#333]">
              {students.map((s, i) => (
                <tr
                  key={i}
                  className="border-t border-[#EDEDED] hover:bg-[#FAFAFA]"
                >
                  <td className="px-4 py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-3">{s.sNo}</td>
                  <td className="px-4 py-3">{s.rollNo}</td>
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <Image
                      src="/avatar.jpg"
                      alt="avatar"
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                    <span>{s.name}</span>
                  </td>
                  <td className="px-4 py-3">{s.class}</td>
                  <td className="px-4 py-3">{s.section}</td>
                  <td className="px-4 py-3">{s.amount}</td>
                  <td className="px-4 py-3">{s.date}</td>
                  <td className="px-4 py-3">
                    <span className="text-[#0FA958] font-semibold">Active</span>
                    <span className="ml-1 inline-block w-2 h-2 bg-[#0FA958] rounded-full"></span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <FaEllipsisV className="text-gray-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
