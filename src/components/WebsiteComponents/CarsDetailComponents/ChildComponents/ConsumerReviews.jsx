import { FaStar } from "react-icons/fa";

const RatingRow = ({ label }) => (
  <div className="flex justify-between items-center text-sm text-black border-b py-1">
    <span>{label}</span>
    <div className="flex gap-[2px]">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <FaStar key={i} className="text-[#2418a8] text-sm" />
        ))}
    </div>
  </div>
);

const ConsumerReviews = () => {
  return (
    <div className="mt-8 p-5 bg-white rounded-2xl border border-gray-300 w-full max-w-md font-sans text-black shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-xl font-semibold">Consumer reviews</h2>
        <span className="text-xs font-medium text-gray-600">
          Rating breakdown <span className="font-normal">(out of 5)</span>:
        </span>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        See what others are saying about the{" "}
        <span className="font-semibold">2023 BMW M550.</span>
      </p>

      <RatingRow label="Comfort" />
      <RatingRow label="Interior" />
      <RatingRow label="Performance" />
      <RatingRow label="Value" />
      <RatingRow label="Exterior" />
      <RatingRow label="Reliability" />

      <div className="mt-4 text-sm flex items-center">
        <span className="text-xl font-medium mr-2">5.0</span>
        <div className="flex gap-[2px] mr-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} className="text-[#2418a8] text-sm" />
            ))}
        </div>
        <span className="text-sm text-black">(1 review)</span>
      </div>

      <p className="text-xs text-black mt-1">
        100% of drivers recommend this car
      </p>
    </div>
  );
};

export default ConsumerReviews;
