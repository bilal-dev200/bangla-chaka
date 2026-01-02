// import React, { useState } from "react";
// import ReportReadyModal from "./ReportReadyModal";

// const BankDetailsModal = ({ isOpen, onClose }) => {
//   const [selected, setSelected] = useState("bank");
//     const [showModal, setShowModal] = useState(false); 

//   if (!isOpen) return null;

//   const renderFields = () => {
//     switch (selected) {
//       case "credit":
//         return (
//           <>
//             <input
//               type="text"
//               placeholder="Cardholder Name"
//               className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black "
//             />
//             <input
//               type="text"
//               placeholder="Card Number"
//               className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black "
//             />
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 placeholder="Expiry Date (MM/YY)"
//               className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black "
//               />
//               <input
//                 type="text"
//                 placeholder="CVV"
//               className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black "
//               />
//             </div>
//           </>
//         );

//       case "bank":
//       default:
//         return (
//           <>
//             <input
//               type="text"
//               placeholder="Bank Name"
//               className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black "
//             />
//             <input
//               type="text"
//               placeholder="Name On Account"
//               className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black "
//             />
//             <input
//               type="text"
//               placeholder="Account Number"
//               className="w-full border border-black text-black rounded-[14px] px-4 py-2 placeholder-black "
//             />
//             <input
//               type="text"
//               placeholder="ABA Routing Number"
//               className="w-full border border-black text-black rounded-[14px] px-4 py-2 placeholder-black "
//             />
//             <input
//               type="text"
//               placeholder="Bank Account Type (e.g., Personal Checking)"
//               className="w-full border border-black text-black rounded-[14px] px-4 py-2 placeholder-black"
//             />
//           </>
//         );
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="bg-white w-full max-w-2xl mx-auto p-10 px-28 rounded-xl shadow-xl relative">
       
//         <h2 className="text-2xl md:text-3xl font-medium  text-center">
//           Let’s simplify your business
//         </h2>
//         <p className="text-gray-600 text-center mt-2 text-sm md:text-base w-full">
//           Connect with our team to explore the audience and technology solutions you need to simplify and scale your business.
//         </p>

//         <div className="flex justify-center space-x-6 mt-6">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="radio"
//               name="method"
//               value="credit"
//               checked={selected === "credit"}
//               onChange={() => setSelected("credit")}
//             />
//             Credit Card
//           </label>
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="radio"
//               name="method"
//               value="bank"
//               checked={selected === "bank"}
//               onChange={() => setSelected("bank")}
//             />
//             Bank Account
//           </label>
//         </div>

//         <div className="mt-6 space-y-4">{renderFields()}</div>

//         <div className="mt-6 flex justify-center gap-4">
//           <button 
//                   onClick={() => setShowModal(true)}
//  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
//             Continue
//           </button>
//           <button
//             onClick={onClose}
//             className="border px-6 py-2 rounded-full hover:bg-gray-100"
//           >
//             Cancel
//           </button>
//         </div>
//               {showModal && <ReportReadyModal onClose={() => setShowModal(false)} />}

//       </div>
//     </div>
//   );
// };

// export default BankDetailsModal;
import React, { useState } from "react";

const BankDetailsModal = ({ isOpen, onClose, onContinue }) => {
  const [selected, setSelected] = useState("bank");

  if (!isOpen) return null;

  const renderFields = () => {
    switch (selected) {
      case "credit":
        return (
          <>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black"
              />
            </div>
          </>
        );

      case "bank":
      default:
        return (
          <>
            <input
              type="text"
              placeholder="Bank Name"
              className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black"
            />
            <input
              type="text"
              placeholder="Name On Account"
              className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black"
            />
            <input
              type="text"
              placeholder="Account Number"
              className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black"
            />
            <input
              type="text"
              placeholder="ABA Routing Number"
              className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black"
            />
            <input
              type="text"
              placeholder="Bank Account Type (e.g., Personal Checking)"
              className="w-full border border-black rounded-[14px] px-4 py-2 placeholder-black"
            />
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-2xl mx-auto p-10 px-10 rounded-xl shadow-xl relative">
        <h2 className="text-2xl md:text-3xl font-medium text-center">
          Let’s simplify your business
        </h2>
        <p className="text-gray-600 text-center mt-2 text-sm md:text-base">
          Connect with our team to explore the audience and technology solutions you need to simplify and scale your business.
        </p>

        <div className="flex justify-center space-x-6 mt-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="method"
              value="credit"
              checked={selected === "credit"}
              onChange={() => setSelected("credit")}
            />
            Credit Card
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="method"
              value="bank"
              checked={selected === "bank"}
              onChange={() => setSelected("bank")}
            />
            Bank Account
          </label>
        </div>

        <div className="mt-6 space-y-4">{renderFields()}</div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onContinue}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
          >
            Continue
          </button>
          <button
            onClick={onClose}
            className="border px-6 py-2 rounded-full hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsModal;
