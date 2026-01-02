// // components/common/LoginPopup.jsx
// "use client";
// import React from "react";

// const LoginPopup = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 animate-fadeIn">
//       <div className="relative bg-white rounded-2xl shadow-2xl w-96 overflow-hidden animate-scaleUp">

//         {/* Header Banner */}
//         <div className="bg-gradient-to-r from-[#EB0102] to-indigo-700 h-14 flex items-center justify-center">
//           <h2 className="text-lg sm:text-2xl font-hanken text-white tracking-wide">
//             Sign In Required
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="p-6 text-center">
//           <p className="text-sm text-gray-600 mb-6">
//             To contact the dealer or continue with this action, please sign in to your account.
//           </p>

//           {/* Actions */}
//           <div className="flex justify-center gap-4">
//             <button
//               onClick={() => {
//                 onClose();
//                 window.location.href = "/sign-in"; // navigate
//               }}
//               className="flex items-center gap-2 px-6 py-1 bg-[#EB0102] text-white rounded-full font-medium hover:bg-[#2d2a73] transition shadow-md"
//             >
//               <span>Sign In</span>
//             </button>
//             <button
//               onClick={onClose}
//               className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>

//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-300 hover:text-white bg-black/40 rounded-full p-0.5 px-1.5"
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;
"use client";
import React from "react";

const LoginPopup = ({
  onClose,
  title = "Sign In Required",
  message = "To contact the dealer or continue with this action, please sign in to your account."
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 animate-fadeIn">
      <div className="relative bg-white rounded-2xl shadow-2xl w-96 overflow-hidden animate-scaleUp">

        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#EB0102] to-indigo-700 h-14 flex items-center justify-center">
          <h2 className="text-lg sm:text-2xl font-hanken text-white tracking-wide">
            {title}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <p className="text-sm text-gray-600 mb-6">
            {message}
          </p>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                onClose();
                window.location.href = "/sign-in"; // navigate
              }}
              className="flex items-center gap-2 px-6 py-1 bg-[#EB0102] text-white rounded-full font-medium hover:bg-[#2d2a73] transition shadow-md"
            >
              <span>Sign In</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-300 hover:text-white bg-black/40 rounded-full p-0.5 px-1.5"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
