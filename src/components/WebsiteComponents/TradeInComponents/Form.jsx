// import React, { useState } from 'react'
// const formGroups = [
//     [
//       { name: "name", type: "text", placeholder: "Name", required: true },
//       { name: "email", type: "email", placeholder: "Email*", required: true },
//     ],
//     [
//       { name: "address", type: "text", placeholder: "Address*", required: true },
//     ],
//     [
//       { name: "zipCode", type: "text", placeholder: "Zip Code" },
//       { name: "employmentInfo", type: "text", placeholder: "Employment Info*", required: true },
//     ],
//     [
//       { name: "monthlyIncome", type: "number", placeholder: "Monthly Income" },
//       { name: "ssn", type: "text", placeholder: "SSN or last 4 digits*", required: true, maxLength: 4 },
//     ],
//   ];

// const Form = () => {
//       const [agreed, setAgreed] = useState(false);

//   return (
//     <div>
//          <p className="mb-6 text-gray-700 text-base sm:text-lg">
//         No risk. No commitment. Just a simple way to understand your budget before browsing.
//       </p>

//       <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//         {formGroups.map((group, groupIndex) => (
//           <div
//             key={groupIndex}
//             className={`grid gap-4 ${
//               group.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
//             }`}
//           >
//             {group.map((field, fieldIndex) => (
//               <input
//                 key={fieldIndex}
//                 type={field.type}
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 required={field.required || false}
//                 maxLength={field.maxLength}
//                className="border border-black h-18 px-3 py-2 rounded-xl"
//               />
//             ))}
//           </div>
//         ))}

//         <label className="flex items-center space-x-3">
//           <input
//             type="checkbox"
//             checked={agreed}
//             onChange={() => setAgreed(!agreed)}
//             className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//           />
//           <span className="text-gray-700 text-sm">
//             I agree to a soft credit check. This will not affect my credit score.
//           </span>
//         </label>

//         <button
//           type="submit"
//           disabled={!agreed}
//           className={`mt-4 w-full sm:w-auto inline-block rounded-full px-8 py-3 text-white font-semibold transition ${
//             agreed
//               ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
//               : "bg-indigo-300 cursor-not-allowed"
//           }`}
//         >
//           Submit
//         </button>
//       </form>
//       </div>
//   )
// }

// export default Form
import React, { useState } from "react";
import PrequalifiedCard from "../../FinancingComponents/PrequalifiedCard";

const formGroups = [
  [
    { name: "name", type: "text", placeholder: "Name", required: true },
    { name: "email", type: "email", placeholder: "Email*", required: true },
  ],
  [{ name: "address", type: "text", placeholder: "Address*", required: true }],
  [
    { name: "zipCode", type: "text", placeholder: "Zip Code" },
    {
      name: "employmentInfo",
      type: "text",
      placeholder: "Employment Info*",
      required: true,
    },
  ],
  [
    { name: "monthlyIncome", type: "number", placeholder: "Monthly Income" },
    {
      name: "ssn",
      type: "text",
      placeholder: "SSN or last 4 digits*",
      required: true,
      maxLength: 4,
    },
  ],
];

const Form = () => {
  const [agreed, setAgreed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      setFormSubmitted(true);
    }
  };

  return (
    <div>
      <p className="mb-6 text-gray-700 text-base sm:text-lg">
        No risk. No commitment. Just a simple way to understand your budget
        before browsing.
      </p>

      {!formSubmitted ? (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {formGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`grid gap-4 ${
                group.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {group.map((field, fieldIndex) => (
                <input
                  key={fieldIndex}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required || false}
                  maxLength={field.maxLength}
                  className="border border-black h-18 px-3 py-2 rounded-xl"
                />
              ))}
            </div>
          ))}

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span className="text-gray-700 text-sm">
              I agree to a soft credit check. This will not affect my credit
              score.
            </span>
          </label>

          <button
            type="submit"
            disabled={!agreed}
            className={`mt-4 w-full sm:w-auto inline-block rounded-full px-8 py-3 text-white font-semibold transition ${
              agreed
                ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
                : "bg-indigo-300 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <PrequalifiedCard />
        </div>
      )}
    </div>
  );
};

export default Form;
