import React from "react";

const prequalifiedData = [
  {
    label: "You may qualify for financing up to",
    value: "$20,000",
    suffix: "with an estimated monthly payment of",
    subvalue: "$350",
  },
  {
    label: "Your credit tier is:",
    value: "Good (670–739)",
    isBold: true,
  },
];

const PrequalifiedCard = () => {
  return (
    <>
      <div className="bg-gray-100 rounded-xl ml-2 mt-5 p-6 max-w-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">You&apos;re Prequalified</h2>

        {prequalifiedData.map((item, index) => (
          <p className="text-gray-700 mb-2" key={index}>
            {item.label}{" "}
            <span className={item.isBold ? "font-bold" : "font-medium"}>{item.value}</span>
            {item.suffix && (
              <>
                {" "}{item.suffix}{" "}
                <span className="font-medium">{item.subvalue}</span>
              </>
            )}
          </p>
        ))}
      </div>

      <button
        className="mt-10 rounded-[500px] ml-3 px-6 py-3 bg-[#EB0102] text-white font-semibold"
      >
        View Cars
      </button>
    </>
  );
};

export default PrequalifiedCard;
