
"use client";
import { useState } from "react";
import BankDetailsModal from "./BankDetailsModal";
import ReportReadyModal from "./ReportReadyModal";
const data = [
  {
    id: 1,
    vin: "1HGCM82633A123456",
    date: "15/July/2025",
    expiry: "15/June/2025",
  },
  {
    id: 2,
    vin: "WBA3A5C59DF123789",
    date: "15/July/2025",
    expiry: "15/June/2025",
  },
]
const Cartrade = () => {
  const [openBankModal, setOpenBankModal] = useState(false);
  const [openReportModal, setOpenReportModal] = useState(false);
  const [showReportTable, setShowReportTable] = useState(false);

  const handleContinue = () => {
    setOpenBankModal(false);
    setOpenReportModal(true);
  };
  const handleDownload = () => {
    // maybe trigger actual PDF generation here
    setShowReportTable(true);
    setOpenReportModal(false);
  };

  return (
    <section className="py-5 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="border-2 rounded-[30px] border-dashed border-[#EB0102] bg-white p-8 md:p-12 shadow-sm">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-3xl text-gray-900">
              Enter VIN to Get Full Vehicle Report
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Instantly unlock accident history, ownership records, title
              status, and more — powered by verified national databases.
            </p>
            <input
              type="text"
              placeholder="Enter VIN number"
              className="w-full bg-[#F5F5F5] max-w-md m-10 mt-2 px-4 py-2 p-10 rounded-[15px]"
            />
            <div>
              <button
                onClick={() => setOpenBankModal(true)}
                className="bg-[#EB0102] rounded-[20px] text-white px-5 py-2 text-lg transition-colors duration-200"
              >
                Start Your Trade-In
              </button>
            </div>
          </div>
        </div>
      </div>

      {openBankModal && (
        <BankDetailsModal
          isOpen={openBankModal}
          onClose={() => setOpenBankModal(false)}
          onContinue={handleContinue}
        />
      )}

      {openReportModal && (
        <ReportReadyModal onClose={() => setOpenReportModal(false)}
          onDownload={handleDownload}
        />
      )}
      {/* report tabela  */}
      {showReportTable && (

        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10 font-sans">
          <div className="bg-white rounded-lg p-4 space-y-6">

            {/* Table Headings */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-200 rounded-lg font-semibold text-gray-700 text-sm">
              <div className="flex-1 min-w-[220px]">VIN Number</div>
              <div className="flex-1 min-w-[120px] text-center">Date</div>
              <div className="flex-1 min-w-[130px] text-center">Expiry Date</div>
              <div className="flex-1 min-w-[80px] text-center">Download</div>
            </div>

            {/* Data Rows */}
            {data.map(({ id, vin, date, expiry }) => (
              <div
                key={id}
                className="flex items-center justify-between px-4 py-3 rounded-lg border border-gray-300"
              >
                <div className="flex-1 min-w-[220px] text-gray-700">
                  <p className="text-sm">
                    <span className="font-medium">{id}.</span> {vin}
                  </p>
                </div>

                <div className="flex-1 min-w-[120px] px-3 text-center text-gray-600 border-l border-gray-300">
                  <p className="text-sm">{date}</p>
                </div>

                <div className="flex-1 min-w-[130px] px-3 text-center text-gray-600 border-l border-gray-300">
                  <p className="text-sm">{expiry}</p>
                </div>

                <div className="flex-1 min-w-[80px] px-4 flex justify-center border-l border-gray-300">
                  <button
                    aria-label={`Download document for VIN number ${vin}`}
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      stroke="none"
                    >
                      <path d="M9.293 16.707a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L11 13.586V3a1 1 0 10-2 0v10.586L5.707 10.293A1 1 0 104.293 11.707l5 5z" />
                      <path d="M3 18a1 1 0 100-2h14a1 1 0 100 2H3z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>)
      }



    </section>
  );
};

export default Cartrade;



