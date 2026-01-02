import React, { useEffect, useRef, useState } from "react";
import { vehicalsApi } from "@/lib/api/vehical";
import { useRouter } from "next/navigation";
import { useCarStore } from "@/lib/store/carStore";
import { tradeInApi } from "@/lib/api/tradeIn";
import { toast } from "react-toastify";

const OTPInput = ({ email }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const otpInputRefs = useRef([]);
  const router = useRouter();

  const { selectedCarId, carPopupData, step1, step2, step3 } = useCarStore();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 3) otpInputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const SubmitForm = async () => {
    const formData = new FormData();

    console.log("section 2", step2?.data);

    // 🔹 Basic vehicle info
    formData.append("vin", step3?.data?.vin || "");
    formData.append("plateNumber", carPopupData?.plateNumber || "222222");
    formData.append("year", parseInt(carPopupData?.year || "2015", 10));
    formData.append("bodyTypeId", Number(carPopupData?.bodyTypeId || 1));
    formData.append("brandId", Number(carPopupData?.brandId || 1));
    formData.append(
      "vehicleModelId",
      Number(carPopupData?.vehicleModelId || 1)
    );
    formData.append("vehicleSaleId", Number(selectedCarId || 5));

    // 🔹 Trade-in info: DETAILS
    formData.append("tradeInInfo[0][type]", step1?.type || "DETAILS");
    Object.entries(step1?.data || {}).forEach(([key, value]) => {
      formData.append(`tradeInInfo[0][data][${key}]`, value);
    });

    // 🔹 Trade-in info: CONDITION
    formData.append("tradeInInfo[1][type]", step2?.type || "CONDITION");

    Object.entries(step2?.data || {}).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // 🔹 Handle arrays (ABS, Airbag/SRS, etc.)
        value.forEach((item, index) => {
          formData.append(`tradeInInfo[1][data][${key}][${index}]`, item);
        });
      } else if (typeof value === "object" && value !== null) {
        // 🔹 Handle nested objects (if any exist in future)
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (Array.isArray(subValue)) {
            subValue.forEach((item, index) => {
              formData.append(
                `tradeInInfo[1][data][${key}][${subKey}][${index}]`,
                item
              );
            });
          } else {
            formData.append(
              `tradeInInfo[1][data][${key}][${subKey}]`,
              subValue
            );
          }
        });
      } else {
        // 🔹 Handle simple string/number values
        formData.append(`tradeInInfo[1][data][${key}]`, value);
      }
    });

    formData.append("tradeInInfo[2][type]", step3?.type || "PERSONAL_INFO");
    Object.entries(step3?.data || {}).forEach(([key, value]) => {
      formData.append(`tradeInInfo[2][data][${key}]`, value);
    });

    // 🔹 Images (only append if File exists)
    if (step1?.frontRightCornerImg)
      formData.append("frontRightCornerImg", step1.frontRightCornerImg);
    if (step1?.frontLeftCornerImg)
      formData.append("frontLeftCornerImg", step1.frontLeftCornerImg);
    if (step1?.backRightCornerImg)
      formData.append("backRightCornerImg", step1.backRightCornerImg);
    if (step1?.backLeftCornerImg)
      formData.append("backLeftCornerImg", step1.backLeftCornerImg);
    if (step1?.frontTireLeftSideImg)
      formData.append("frontTireLeftSideImg", step1.frontTireLeftSideImg);
    if (step1?.frontTireRightSideImg)
      formData.append("frontTireRightSideImg", step1.frontTireRightSideImg);
    if (step1?.backTireLeftSideImg)
      formData.append("backTireLeftSideImg", step1.backTireLeftSideImg);
    if (step1?.backTireRightSideImg)
      formData.append("backTireRightSideImg", step1.backTireRightSideImg);
    if (step1?.odometerImg) formData.append("odometerImg", step1.odometerImg);
    if (step1?.frontSeatImg)
      formData.append("frontSeatImg", step1.frontSeatImg);
    if (step1?.backSeatImg) formData.append("backSeatImg", step1.backSeatImg);

    try {
      const res = await tradeInApi.submitForm(formData); // ✅ send FormData
      toast.success(res?.data?.message || "Form submitted successfully ✅");
      console.log("🚀 API Response", res.data);
    } catch (error) {
      console.error("❌ API Error", error);
      toast.error(
        error?.data?.message || "Something went wrong, please try again!"
      );
    }
  };

  const verifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4 || !/^\d{4}$/.test(enteredOtp)) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    try {
      const res = await vehicalsApi.verifyOtp({ email, code: enteredOtp });
      console.log("Full response:", res);
      if (res?.success) {
        toast.success(res?.data?.message || "OTP verified successfully ✅");
        await SubmitForm();
        router.push("/success");
        setOtp(["", "", "", ""]);
      } else {
        toast.error(res?.data?.message || "Invalid OTP, please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid OTP. Please try again.");
    }
  };

  useEffect(() => {
    otpInputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 h-[200px]">
      <div className="flex space-x-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (otpInputRefs.current[index] = el)}
            className="w-14 h-14 text-center text-2xl font-bold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            inputMode="numeric"
            pattern="[0-9]"
          />
        ))}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="button"
        onClick={verifyOtp}
        className="w-fit flex justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[#EB0102] focus:outline-none focus:ring-2 focus:ring-offset-2 mt-6"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTPInput;