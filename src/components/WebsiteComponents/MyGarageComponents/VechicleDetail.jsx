import React from 'react';

const VechicleDetail = () => {
  const vehicleDetails = [
    ["Vin", "DFK53DJFH512341526"],
    ["Mileage", "85,000"],
    ["Transmission", "Automatic"],
    ["Engine", "V6 Petrol"],
    ["Option", "Premium Package"],
    ["Exterior color", "Midnight Black"],
    ["Interior color", "Beige Leather"],
    ["Number of keys", "2"],
    ["Original owner", "Yes"],
    ["Accident(s)", "No"],
    ["Clean history report", "Verified"],
  ];

  const marketValues = [
    {
      priceRange: "$47,885 - $53,472",
      label: "Market value today",
      bgColor: "bg-indigo-700",
    },
    {
      priceRange: "$32,885 - $38,472",
      label: "Get latest value",
      bgColor: "bg-purple-700",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <div className="border border-black rounded-lg p-6 shadow-sm max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Vehicle Details</h2>
        <div className="grid grid-cols-2 text-sm">
          {vehicleDetails.map(([label, value], index) => (
            <React.Fragment key={index}>
              <div className="py-2 border-b font-medium text-gray-700">{label}</div>
              <div className="py-2 border-b text-gray-900">{value}</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold mb-4 text-center">
          2020 Mercedes-Benz S-Class S 560
        </h1>
        <img
          src="./Images/cardetail.png"
          alt="Car"
          className="w-full max-w-md object-contain mb-2"
        />
        <p className="text-xs text-gray-500 mb-6 text-center">
          *This image is for reference only and may not match your car’s details.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-center">Carnkey Market Value</h3>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Track your car’s value over time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {marketValues.map(({ priceRange, label, bgColor }, index) => (
            <div
              key={index}
              className={`${bgColor} text-white px-6 py-4 rounded-lg text-center`}
            >
              <p className="text-lg font-bold">{priceRange}</p>
              <p className="text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VechicleDetail;
