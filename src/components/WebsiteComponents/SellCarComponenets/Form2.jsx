import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the validation schema for the main form using Yup
const schema = yup.object().shape({
  first_name: yup.string().required("Please enter first name"),
  last_name: yup.string().required("Please enter last name"),
  mobile_no: yup.string().required("Please enter phone number"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  vin: yup
    .string()
    .required("Please enter correct vehicle identification number"),
});

export const Form3 = ({ setStep }) => {
  // State to manage the form's submission status and OTP visibility
  const [status, setStatus] = useState(false);
  // State to hold the values of the four OTP input fields
  const [otp, setOtp] = useState(["", "", "", ""]);
  // Ref array to manage focus on OTP input fields
  const otpInputRefs = useRef([]);
  // State for OTP validation error
  const [otpError, setOtpError] = useState("");

  // Initialize react-hook-form for the main form with Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Added reset to clear form after initial submission if needed
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Function to handle main form submission
  const onSubmit = (data) => {
    console.log("Main Form Data:", data);
    setStatus(true); // Set status to true to show OTP section
    // In a real application, you would send this data and then trigger OTP sending
    // For demonstration, we just show the OTP fields immediately
  };

  // Function to handle OTP input changes
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Allow only single digit numbers
    if (!/^\d*$/.test(value)) {
      return; // If not a digit, do nothing
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError(""); // Clear OTP error on input change

    // Auto-focus to the next input field if a digit is entered and it's not the last field
    if (value && index < 3) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  // Function to handle key down events for OTP inputs (e.g., Backspace)
  const handleOtpKeyDown = (e, index) => {
    // If Backspace is pressed and the current field is empty, move focus to the previous field
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  // Function to handle OTP verification
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4 || !/^\d{4}$/.test(enteredOtp)) {
      setOtpError("Please enter a valid 4-digit OTP.");
      return;
    }
    // Simulate OTP verification
    console.log("Verifying OTP:", enteredOtp);
    // In a real application, you would send this OTP to your backend for verification
    alert(`OTP ${enteredOtp} verified successfully! (Simulation)`);
    // Reset form and OTP fields, or navigate away, etc.
    // reset(); // Optionally reset the main form
    setOtp(["", "", "", ""]); // Clear OTP fields
    setStatus(false); // Go back to initial form state
    setStep(3);
  };

  // Effect to focus on the first OTP input when the OTP section becomes visible
  useEffect(() => {
    if (status && otpInputRefs.current[0]) {
      otpInputRefs.current[0].focus();
    }
  }, [status]);

  return (
    <div className="bg-white min-h-screen pb-10">
      <div className="max-w-6xl mx-auto md:px-0 px-4 text-gray-500 text-sm mb-4 ">
        Home <span className="mx-1">/</span>{" "}
        <span className="text-black ">Sell Your Car</span>
        <span className="mx-1">/</span>{" "}
        <span className="text-black ">You’re almost done</span>
      </div>
      <div
        className={`max-w-6xl mx-auto p-8 bg-gray-50 rounded-lg ${!status ? "" : "pt-10"
          }`}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-1 font-hanken">
            {status ? "Verify OTP" : "You’re almost done"}
          </h1>
          <p className="text-sm text-gray-500 tracking-wide font-hanken">
            {status
              ? "Enter the 4-digit code sent to your mobile."
              : "All fields with * are required"}
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          {!status ? ( // Render main form if status is false
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 max-w-lg"
            >
              {/* First Name Input */}
              <div>
                <input
                  type="text"
                  {...register("first_name")}
                  placeholder="First name*"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                />
                {errors.first_name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              {/* Last Name Input */}
              <div>
                <input
                  type="text"
                  {...register("last_name")}
                  placeholder="Last Name*"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                />
                {errors.last_name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.last_name.message}
                  </p>
                )}
              </div>

              {/* Mobile Phone Input */}
              <div>
                <input
                  type="tel" // Changed to 'tel' for mobile number input
                  {...register("mobile_no")}
                  placeholder="Mobile phone*"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                />
                {errors.mobile_no && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.mobile_no.message}
                  </p>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  We will send a code to your mobile to verify your phone number
                </p>
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email*"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* VIN Input */}
              <div>
                <input
                  type="text"
                  {...register("vin")}
                  placeholder="Vin*"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                />
                {errors.vin && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.vin.message}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <p className="text-[11px] text-gray-600 mt-4">
                By clicking the button below, you agree to the InstaOffer{" "}
                <a href="#" className="text-black font-semibold">
                  Terms and conditions
                </a>{" "}
                and Carnkey.com{" "}
                <a href="#" className="text-black font-semibold">
                  Privacy Statement
                </a>
              </p>
              <div className="w-full flex justify-center">
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-fit flex justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[#EB0102] focus:outline-none focus:ring-2 focus:ring-offset-2 mt-6"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            // Render OTP section if status is true
            <div className="flex flex-col items-center space-y-4 h-[200px]">
              <div className="flex space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text" // Changed to text to handle auto-focus and backspace better
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    ref={(el) => (otpInputRefs.current[index] = el)}
                    className="w-14 h-14 text-center text-2xl font-bold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    inputMode="numeric" // Suggest numeric keyboard on mobile
                    pattern="[0-9]" // HTML5 pattern for numeric input
                  />
                ))}
              </div>
              {otpError && <p className="text-sm text-red-600">{otpError}</p>}
              <button
                type="button" // Use type="button" to prevent default form submission
                onClick={handleVerifyOtp}
                className="w-fit flex justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[#EB0102] focus:outline-none focus:ring-2 focus:ring-offset-2 mt-6"
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form3;
