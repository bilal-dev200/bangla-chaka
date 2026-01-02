import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComparisonSection = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-10 text-center font-hanken">
      <h2 className="text-2xl md:text-4xl mb-2">
        What You See vs. What You Don’t <br></br> Without a Report
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base mb-8">
        Behind every Car X-Ray report is a story — a decision made smarter, a deal avoided, a buyer empowered. These are the real moments where data makes all the difference.
      </p>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-center">
        
        <div className="bg-[#F5F5F5] ml-28 rounded-[40px] p-10 space-y-4 w-[350px]">
          <h3 className="text-2xl  mb-2">With Car X-Ray</h3>
          <ul className="space-y-8 mt-10">
            {[
              "Accident logs & repairs shown",
              "Mileage tampering flagged",
              "Auction & past listing images",
              "Clear title status & ownership",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-green-600">
                <FaCheckCircle className="w-5 h-5 mt-1" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="bg-[#F5F5F5] rounded-[40px] p-10 space-y-4 w-[350px]">
          <h3 className="text-2xl  mb-2">With Car X-Ray</h3>
          <ul className="space-y-8">
            {[
              "No accident knowledge",
              "Unverified mileage",
              "No auction insight",
              "Miss hidden title issues",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-red-600">
                <FaTimesCircle className="w-5 h-5 mt-1" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
