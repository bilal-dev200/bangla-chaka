
// import React from "react";
// import { FaCheckCircle, FaDownload } from "react-icons/fa";


// const ReportReadyModal = ({ onClose }) => {
//   return (

//          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
//        <div className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-lg text-center">
//          <div className="flex justify-center mb-4">
//            <FaCheckCircle className="text-green-500 text-6xl" />
//          </div>
//          <h2 className="text-2xl font-semibold mb-2">Your Car Report File is Ready</h2>
//          <p className="text-gray-600 mb-6">
//            Almost there! We’re putting together your full vehicle history.
//          </p>

//          <div className="flex justify-center gap-4">           <button
//             // onClick={handleDownload}
//             className="bg-[#EB0102] text-white px-6 py-2 rounded-full flex items-center gap-2"
//           >
//             <FaDownload className="text-sm" />
//             Download PDF
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-white border border-black text-black px-6 py-2 rounded-full"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportReadyModal;

import React from "react";
import { FaCheckCircle, FaDownload } from "react-icons/fa";

const ReportReadyModal = ({ onClose, onDownload }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">
          Your Car Report File is Ready
        </h2>
        <p className="text-gray-600 mb-6">
          Almost there! We’re putting together your full vehicle history.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onDownload}
            className="bg-[#EB0102] text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            <FaDownload className="text-sm" />
            Download PDF
          </button>
          <button
            onClick={onClose}
            className="bg-white border border-black text-black px-6 py-2 rounded-full"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportReadyModal;
