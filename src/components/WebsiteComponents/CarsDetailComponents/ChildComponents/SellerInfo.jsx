import { FaPhoneAlt, FaClock } from "react-icons/fa";

const SellerInfo = ({data}) => {
  return (
    <div className="bg-white mt-4 border rounded-2xl p-4 font-sans text-black w-full max-w-md shadow-sm mx-auto sm:mx-0">
      <p className="text-xs text-gray-600 mb-1">Seller Info</p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
        <div className="w-12 h-12 bg-gray-100 rounded-lg shrink-0" />
        <div className="flex-1">
          <h2 className="text-lg font-semibold sm:ml-0 ml-10">{data?.seller.firstName + " " + data?.seller.lastName}</h2>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-black mt-1 gap-1 sm:gap-3">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-gray-700 text-xs" />
              <span>{data?.seller.dealerDetail.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="text-gray-700 text-xs" />
              <span>10:00 am - 7:00 pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <div className="relative">
          <img
            src="/Images/SellerMapImage.png"
            alt="Map"
            className="w-full h-36 object-cover"
          />
          <button className="absolute top-2 left-2 bg-white text-[10px] px-2 py-[2px] rounded-md border text-gray-600">
            View Large Map
          </button>
        </div>

        <div className="bg-gray-100 px-3 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <div className="text-xs text-black leading-tight">
            <p>24 East 12300 South</p>
            <p>Draper, UT 84042</p>
          </div>
          <button className="text-xs text-blue-600 font-medium flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.293 9.293a1 1 0 011.414 0L17 12.586V11a1 1 0 112 0v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-3.293-3.293a1 1 0 010-1.414z" />
              <path d="M3 5a2 2 0 012-2h6a2 2 0 012 2v4.5a.5.5 0 001 0V5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h4.5a.5.5 0 000-1H5a2 2 0 01-2-2V5z" />
            </svg>
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
