"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import {
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaShareAlt,
  FaRegHeart,
  FaTachometerAlt,
  FaGasPump,
  FaCarSide,
  FaCogs,
  FaRoad,
  FaBarcode,
  FaIdCard,
  FaFillDrip,
  FaPalette,
  FaCog,
} from "react-icons/fa";
import PriceGraph from "./ChildComponents/PriceGraph";
import ConsumerReviews from "./ChildComponents/ConsumerReviews";
import SellerInfo from "./ChildComponents/SellerInfo";
import { useParams } from "next/navigation";
import { vehicalsApi } from "@/lib/api/vehical";
import { Image_URL } from "@/config/constants";
import Shopviews from "./Shopviews";
import CarDetailedForm from "./ChildComponents/CarDetailedForm";

const images = [
  "/Images/bmw.jpg",
  "/Images/bmw.jpg",
  "/Images/bmw1.jpg",
  "/Images/bmw.jpg",
  "/Images/bmw1.jpg",
];

export default function DetailedCarCard() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  // Checkbox ka value watch karna
  const hasTrade = watch("trade");

  const scrollLeft = () => setScrollIndex(Math.max(scrollIndex - 1, 0));
  const scrollRight = () =>
    setScrollIndex(Math.min(scrollIndex + 1, images.length - 4));

  const salesScrollRef = useRef(null);

  const scrollLeftSales = () => {
    salesScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRightSales = () => {
    salesScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const res = await vehicalsApi.getVehicalSlug(slug);
        const vehicle = res.data.vehicle;

        if (vehicle) {
          setCar(vehicle);
          setData(res.data);
          console.log("Vehicle ID:", vehicle.id);
          console.log("Dealer ID:", res.data.seller?.dealerDetail?.id);
          // ✅ Use vehicleMedia for images
          if (vehicle?.vehicleMedia?.length > 0) {
            setMainImage(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}${vehicle.vehicleMedia[0].url}`
            );
          }
        } else {
          setCar(null); // ensure it's null if not found
        }
      } catch (err) {
        console.error("❌ Error fetching car detail:", err);
        setCar(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchCarDetail();
  }, [slug]);

  // …

  if (loading) {
    return (
      <p className="p-10 text-center text-gray-600">Loading car details...</p>
    );
  }

  if (!car) {
    return <p className="p-10 text-center text-red-600">Car not found.</p>;
  }

  // ✅ Fix: use vehicleMedia instead of vehicleImages
  const images =
    car?.vehicleMedia?.map(
      (img) => `${process.env.NEXT_PUBLIC_API_BASE_URL}/${img.url}`
    ) || [];

  return (
    <div className="max-w-7xl mx-auto p-4 text-sm text-gray-700 bg-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-xs text-gray-500 ">
          Home / Cars for Sale /{" "}
          {car.condition +
            " " +
            car.vehicleModel?.brand.name +
            " " +
            car.vehicleModel?.name +
            " " +
            car.vehicleModel?.yearStart}
        </div>

        <div className="flex justify-end space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FaShareAlt className="text-lg text-gray-600 " />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FaRegHeart className="text-lg text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Images */}
        <div className="lg:w-2/3 w-full">
          <div className="relative rounded-lg overflow-hidden">
            <div className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
              <img
                src={mainImage}
                className="w-full h-full rounded-lg object-contain"
              />
            </div>
            <div className="absolute top-2 left-2 bg-white text-xs  px-2 py-1 rounded shadow">
              1 / {car.vehicleMedia.length}
            </div>
            {/* <div className="absolute top-2 right-2 flex gap-2">
              <FaShareAlt className="text-white bg-black bg-opacity-40 p-1 rounded-full text-sm" />
              <FaHeart className="text-white bg-black bg-opacity-40 p-1 rounded-full text-sm" />
            </div> */}
          </div>

          {/* Thumbnails */}
          <div className="mt-3 flex items-center gap-2 relative overflow-x-auto">
            <button
              onClick={scrollLeft}
              className="flex-shrink-0 p-2 bg-white rounded shadow border text-black disabled:opacity-30"
              disabled={scrollIndex === 0}
            >
              <FaArrowLeft />
            </button>

            <div className="flex gap-2">
              {car.vehicleMedia
                .slice(scrollIndex, scrollIndex + 4)
                .map((img, idx) => (
                  <img
                    key={idx}
                    src={`${Image_URL}${img.url}`}
                    onClick={() =>
                      setMainImage(
                        `${process.env.NEXT_PUBLIC_API_BASE_URL}${img.url}`
                      )
                    }
                    className={`h-16 w-24 object-cover rounded border cursor-pointer ${mainImage === img ? "border-black" : "border-gray-300"
                      }`}
                  />
                ))}
            </div>

            <button
              onClick={scrollRight}
              className="flex-shrink-0 p-2 bg-white rounded shadow border text-black disabled:opacity-30"
              disabled={scrollIndex + 4 >= images.length}
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Dealer Review */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="font-semibold ">Dealer review:</span>
            <span className="flex items-center text-yellow-500">
              <FaStar className="mr-1" />
              4.4
            </span>
            <span className="text-gray-500 ">(235 review)</span>
          </div>

          {/* Salesperson Selection */}
          <div className="mt-6 relative">
            <p className="font-semibold mb-3 ">
              Select a Salesperson (optional)
            </p>

            {/* Right/Left Scroll Buttons */}
            <div className="absolute top-0 right-0 flex gap-2">
              <button
                onClick={scrollLeftSales}
                className="w-7 h-7 bg-gray-200 text-black rounded-full flex items-center justify-center shadow"
              >
                <FaArrowLeft size={12} />
              </button>
              <button
                onClick={scrollRightSales}
                className="w-7 h-7 bg-[#EB0102] text-white rounded-full flex items-center justify-center shadow"
              >
                <FaArrowRight size={12} />
              </button>
            </div>

            {/* Scrollable Salesperson Cards */}
            <div
              className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1"
              ref={salesScrollRef}
            >
              {[
                "Anthony Delatorre",
                "Dean Khater",
                "Rich Wilson",
                "Serafin Castelan",
              ].map((name, index) => (
                <div
                  key={index}
                  className="min-w-[180px] border rounded-lg p-3 shadow-sm flex-shrink-0 relative"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="font-medium text-sm ">{name}</p>
                        <p className="text-xs text-gray-500 ">Sales</p>
                        <div className="flex items-center text-yellow-500 text-sm ">
                          <FaStar className="mr-1" />
                          4.4{" "}
                          <span className="text-gray-500 ml-1 text-xs ">
                            (235 review)
                          </span>
                        </div>
                        <button className="text-blue-500 text-xs mt-1 ">
                          Show reviews ▼
                        </button>
                      </div>
                    </div>
                    <input type="radio" name="salesperson" className="mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Car Description */}
          <div className="mt-6">
            {/* <h2 className="text-xl font-semibold mb-2 ">What is the BMW 430d Coupe M Sport ?</h2> */}
            <p className="text-sm text-gray-700 mb-2 ">{car?.description}</p>
            <p className="text-sm text-gray-700 ">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {/* Vehicle Info */}
            <div>
              <h2 className="text-xl font-semibold text-black mb-4 ">
                Vehicle info
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4 text-sm">
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaTachometerAlt />
                  <span>Miles</span>
                  <span className="text-gray-600 ml-1 ">{data.mileage} km</span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaGasPump />
                  <span>MPG</span>
                  <span className="text-gray-600 ml-1 ">53.3 Avg</span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaCarSide />
                  <span>Body</span>
                  <span className="text-gray-600 ml-1 ">
                    {car?.bodyType.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaGasPump />
                  <span>Fuel type</span>
                  <span className="text-gray-600 ml-1 ">
                    {car?.trim.engineType.fuelType.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaCogs />
                  <span>Engine</span>
                  <span className="text-gray-600 ml-1 ">
                    {car?.trim.engineType.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaRoad />
                  <span>Drivetrain</span>
                  <span className="text-gray-600 ml-1 ">
                    {car?.trim.drivetrain}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaBarcode />
                  <span>Stock #</span>
                  <span className="text-gray-600 ml-1 ">
                    {data?.stockNumber}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaIdCard />
                  <span>VIN</span>
                  <span className="text-gray-600 ml-1 ">{car?.vin}</span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaFillDrip />
                  <span>Exterior color</span>
                  <span className="text-gray-600 ml-1 ">
                    {car?.exteriorColor?.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaPalette />
                  <span>Interior color</span>
                  <span className="text-gray-600 ml-1 ">
                    {car?.interiorColor.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#EB0102]">
                  <FaCog />
                  <span>Transmission</span>
                  <span className="text-gray-600 ml-1 ">
                    {car?.trim.transmissionType}
                  </span>
                </div>
              </div>
            </div>

            {/* Car Feature */}
            <div>
              <h2 className="text-lg font-semibold text-black mb-4 ">
                Car Feature
              </h2>
              {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-gray-600">
                {[
                  "AM/FM radio: SiriusXM",
                  "Radio data system",
                  "Air Conditioning",
                  "Front dual zone A/C",
                  "Automatic temperature control",
                  "Rear window defroster",
                  "Power driver seat",
                  "Power steering",
                  "Power windows",
                  "Remote keyless entry",
                  "Steering wheel mounted audio controls",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="h-[2px] w-[10px] bg-[#EB0102] block" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div> */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-gray-600">
                {console.log("check", car)}
                {car?.trim?.trimFeatures?.map((tf, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="h-[2px] w-[10px] bg-[#EB0102] block" />
                    <span>{tf.feature?.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle History X-Ray */}
            <div className="mt-10 border-t pt-6">
              <h2 className="text-xl font-semibold text-black ">
                Vehicle History X-Ray
              </h2>
              <p className="text-sm text-gray-600 mt-1 ">
                This Vehicle&apos;s History, For FREE
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 mt-4 text-sm ">
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="text-blue-900 font-medium hover:underline"
                  >
                    Accidents or damage
                  </a>
                  <span className="text-gray-700">None reported</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="text-blue-900 font-medium hover:underline"
                  >
                    1-owner vehicle
                  </a>
                  <span className="text-gray-700">Yes</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="text-blue-900 font-medium hover:underline"
                  >
                    Personal use only
                  </a>
                  <span className="text-gray-700">Yes</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-6 leading-relaxed ">
                The vehicle history information is supplied by third parties.
                Carnkey.com and the Seller are not responsible for the accuracy
                of such information. Carnkey.com provides this service and
                materials without representations or warranties of any kind,
                either expressed or implied. Please see{" "}
                <a href="#" className="text-blue-900 underline">
                  Carnkey.com Terms and Conditions
                </a>{" "}
                for further information.
              </p>
            </div>

            {/* Deal Gauge Section */}
            <div className="mt-10 bg-white rounded-xl shadow-sm flex flex-col md:flex-row gap-6 ">
              {/* Left side: text */}
              <div className="md:w-1/3 px-4 md:px-6 mt-10 md:mt-6">
                <h2 className="text-lg font-semibold text-black">Deal Gauge</h2>
                <p className="text-sm text-gray-600 mt-2">
                  We compared this car with similar 2023 BMW M550s based on
                  price, mileage, features, condition, and{" "}
                  <a href="#" className="underline">
                    several other factors
                  </a>
                  .
                </p>

                <div className="mt-6">
                  <p className="text-3xl font-bold text-indigo-900">$20,000</p>
                  <p className="text-sm text-gray-700 mt-1">
                    This is a <span className="font-semibold">Great deal</span>.{" "}
                    <a href="#" className="underline">
                      why?
                    </a>
                  </p>
                </div>
              </div>

              {/* Right side: chart */}
              <div className="md:w-2/3 flex justify-around items-end text-sm text-gray-600 relative px-4 pb-6">
                {[
                  { label: "$19,6K", height: "h-32", isMain: false },
                  {
                    label: "$20,0K",
                    height: "h-40",
                    isMain: true,
                    note: "Avg. market price range",
                  },
                  { label: "$22,6K", height: "h-32", isMain: false },
                  { label: "$28,6K", height: "h-28", isMain: false },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <span>{bar.label}</span>
                    <div
                      className={`w-3 rounded-full mt-2 ${bar.isMain
                        ? "bg-gradient-to-t from-indigo-900 to-white relative"
                        : "bg-gray-400"
                        } ${bar.height}`}
                    >
                      {bar.isMain && (
                        <img
                          src="/Images/CarGradient.png"
                          className="w-6 h-6 object-cover absolute -top-4 left-1/2 transform -translate-x-1/2"
                        />
                      )}
                    </div>
                    {bar.note && (
                      <span className="text-xs mt-1">{bar.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Seller's Notes */}
            <div className="mt-10 bg-white py-6 px-4 rounded-xl shadow-sm ">
              <h2 className="text-xl font-semibold text-black mt-10">
                Seller’s notes about this car
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                {data?.sellerNote}
              </p>
            </div>

            {/* Customize Your Payment */}
            <div className="mt-10 rounded-xl px-4 ">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mt-20">
                Customize your payment
              </h2>

              <div className="flex flex-col md:flex-row justify-between items-start mt-6 gap-4 md:gap-0">
                <div>
                  <p className="text-3xl font-semibold text-gray-900">
                    $1,239/mo*
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Based on est. car price of{" "}
                    <span className="font-medium">$65,940</span> at{" "}
                    <span className="font-medium">7.0% APR</span>
                    <sup>†</sup> and <span className="font-medium">10.25%</span>{" "}
                    sales tax.
                  </p>
                </div>
                <button className="text-sm text-[#B1B1B1] underline mt-2 md:mt-0">
                  Show breakdown
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="text-sm font-medium text-gray-800 mb-1 block">
                    Vehicle Price
                  </label>
                  <div className="relative">
                    <select className="w-full bg-[#F9F9F9] rounded-lg px-4 py-2 text-sm text-gray-800 appearance-none">
                      <option>Excellent (780-850)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-800 mb-1 block">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Zip Code"
                    className="w-full rounded-lg px-4 py-2 text-sm text-gray-800 bg-[#F9F9F9]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-800 mb-1 block">
                    Net trade-in value (optional)
                  </label>
                  <input
                    type="text"
                    value="$0"
                    readOnly
                    className="w-full bg-[#F9F9F9] rounded-lg px-4 py-2 text-sm text-gray-800"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-800 mb-1 block">
                    Net trade-in value (optional)
                  </label>
                  <input
                    type="text"
                    value="$0"
                    readOnly
                    className="w-full bg-[#F9F9F9] rounded-lg px-4 py-2 text-sm text-gray-800"
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-800">
                  Estimate trade-in
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-1 flex-wrap">
                  <p className="text-sm text-gray-600">
                    Length of loan (in months)
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["36", "48", "60", "72"].map((term) => (
                      <button
                        key={term}
                        className="px-10 py-2 rounded-full bg-[#F9F9F9] text-sm text-gray-800 hover:bg-gray-100 transition"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center md:justify-center">
                <button className="w-full md:w-40 bg-[#5C2D91] hover:bg-[#4a2373] text-white font-regular py-2 rounded-full text-sm transition">
                  Calculate Payment
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-20 md:mt-32 border-t border-gray-300 pt-10 ">
              {/* Left Side - Rating */}
              <div className="w-full md:w-1/4 flex flex-col items-center justify-start md:border-r border-gray-300 mb-10 md:mb-0 px-4">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#371C86"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#371C86"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 4.648a.563.563 0 00.475.327l5.107.396c.502.039.705.682.322 1.03l-3.86 3.462a.563.563 0 00-.173.507l1.158 5.054c.111.487-.415.87-.846.598l-4.389-2.705a.563.563 0 00-.586 0L7.458 19.52c-.43.272-.957-.111-.846-.598l1.158-5.054a.563.563 0 00-.173-.507l-3.86-3.462a.563.563 0 01.322-1.03l5.107-.396a.563.563 0 00.475-.327L11.48 3.5z"
                    />
                  </svg>
                  <p className="text-4xl font-semibold text-gray-900">4.96</p>
                </div>
                <p className="text-sm text-black-600 mt-1 text-center">
                  Based on 235 reviews
                </p>
                <button className="mt-10 md:mt-80 px-5 py-2 border border-black text-sm rounded-full hover:bg-gray-100 transition">
                  View All reviews
                </button>
              </div>

              {/* Right Side - Reviews */}
              <div className="w-full md:w-3/4 px-4 md:px-6">
                <p className="text-base font-semibold text-gray-900">
                  Positive
                </p>
                <p className="text-sm text-gray-600 mb-6">4 stars and above</p>

                {[1, 2].map((i) => (
                  <div key={i} className="mb-8">
                    <p className="font-semibold text-gray-900 mb-2">By Eddie</p>
                    <p className="text-sm text-[#888888]">
                      As a daily driver this car can’t be beat. Fun acceleration
                      from the start or during mid range driving. Really
                      comfortable and beautiful inside. Exterior is also nice
                      but doesn’t really distinguish itself from other 5 series
                      models. I traded in my 2019 Mercedes e63s for this car and
                      as a daily driver the M 550 is much more comfortable and
                      actually more fun to drive. The e63 had a minimal
                      advantage in the steering and a definite wonderfulness in
                      engine growl in sport plus mode but the bumpiness in the
                      car was a real detraction that in retrospect would only be
                      acceptable on a track...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-full lg:w-1/3 space-y-3 px-4 lg:px-0">
          {/* Title */}
          <h2 className="text-xl font-semibold text-black ">
            {car.condition +
              " " +
              car.vehicleModel?.brand.name +
              " " +
              car.vehicleModel?.name +
              " " +
              car.vehicleModel?.yearStart +
              " " +
              data.mileage}{" "}
            Km
          </h2>

          {/* Price & Price Drop Inline */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
            <div className="flex items-baseline space-x-2">
              <div className="text-3xl font-bold text-black ">
                $ {data?.price}
              </div>
              <div className="text-sm text-gray-600 ">$500 price drop</div>
            </div>

            {/* Great Deal Badge */}
            <div className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full font-medium  w-fit">
              Great Deal
            </div>
          </div>

          {/* Miles */}
          <div className="text-gray-700 text-sm ">{data.mileage} miles</div>

          {/* Dealer Info */}
          <div className="font-semibold text-black text-[16px] mt-2 ">
            {data.seller.firstName + " " + data.seller.lastName}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
            <div className="flex items-center gap-2 text-gray-600 text-sm ">
              <FaMapMarkerAlt className="text-base" />{" "}
              {data.seller.dealerDetail.businessAddress}
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm ">
              <FaPhone className="text-base" /> {data.seller.dealerDetail.phone}
            </div>
          </div>

          {/* Contact Form */}
          {/* <form
            onSubmit={handleSubmit(onSubmit)}
            className="border rounded-2xl p-5 mt-4 bg-white space-y-3"
          >
            <h3 className="text-sm font-semibold text-black">Contact Dealer</h3>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                {...register("firstName", { required: "First name is required" })}
                type="text"
                placeholder="First name"
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              />
              <input
                {...register("lastName", { required: "Last name is required" })}
                type="text"
                placeholder="Last name"
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email address"
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              />
              <input
                {...register("phone", { required: "Phone is required" })}
                type="tel"
                placeholder="Phone Number"
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="w-full sm:w-1/2 relative">
                <select
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full border border-gray-300 text-sm p-2 rounded-md appearance-none pr-8"
                >
                  <option value="">Subject</option>
                  <option value="Availability">Availability</option>
                  <option value="Pricing">Pricing</option>
                </select>
                <div className="absolute right-2 top-2.5 text-gray-500 pointer-events-none">
                  ▼
                </div>
              </div>

              <input
                {...register("zip", { required: "Zip is required" })}
                type="text"
                placeholder="Zip code"
                className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
              />
            </div>

            <textarea
              {...register("description")}
              placeholder="Description"
              className="w-full border border-gray-300 text-sm p-2 rounded-md h-24 resize-none"
            />

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="trade"
                {...register("trade")}
                className="w-4 h-4"
              />
              <label htmlFor="trade" className="text-sm text-gray-700">
                I have Trade In
              </label>
            </div>

            {hasTrade && (
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    {...register("make", { required: true })}
                    type="text"
                    placeholder="Choose a make"
                    className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
                  />
                  <input
                    {...register("model", { required: true })}
                    type="text"
                    placeholder="Choose a model"
                    className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    {...register("year", { required: true })}
                    type="text"
                    placeholder="Choose a year"
                    className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
                  />
                  <input
                    {...register("color")}
                    type="text"
                    placeholder="Exterior color"
                    className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    {...register("mileage")}
                    type="text"
                    placeholder="Mileage"
                    className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
                  />
                  <input
                    {...register("vin")}
                    type="text"
                    placeholder="VIN (optional)"
                    className="w-full sm:w-1/2 border border-gray-300 text-sm p-2 rounded-md"
                  />
                </div>
              </div>
            )}


            <button
              type="submit"
              className="w-full bg-[#EB0102] text-white text-sm font-medium py-3 rounded-full hover:bg-[#EB0102]"
            >
              Check availability
            </button>

            <p className="text-[12px] text-black mt-2 leading-tight">
              By clicking here, you authorize Carnkey.com and its sellers/partners to
              contact you by text/calls which may include marketing and be by
              autodialer. Calls may be prerecorded. You also agree to our{" "}
              <span className="underline">Privacy Notice</span>. Consent is not
              required to purchase goods/services. We value your privacy.
            </p>
          </form> */}
          <CarDetailedForm vehicleSaleId={car?.id}
            dealerId={data?.seller?.dealerDetail?.id} />




          <div>
            <SellerInfo data={data} />
          </div>

          <div className="pt-0 sm:pt-80">
            <PriceGraph />
          </div>

          <div className="w-full px-4 sm:px-0">
            <ConsumerReviews />
          </div>
        </div>
      </div>

      {/* SHOPPER ALSO VIEWED SECTION */}
      <Shopviews />
    </div>
  );
}
