import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";

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

export const Form3 = () => {
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
  };

  // Effect to focus on the first OTP input when the OTP section becomes visible
  useEffect(() => {
    if (status && otpInputRefs.current[0]) {
      otpInputRefs.current[0].focus();
    }
  }, [status]);

  return (
    <div className="bg-white min-h-screen pb-10">
      <div className="mx-auto px-4 md:px-16 text-gray-500 text-sm mb-4 ">
        Home <span className="mx-1">/</span>{" "}
        <span className="text-black ">Sell Your Car</span>
        <span className="mx-1">/</span>{" "}
        <span className="text-black ">You’re almost done</span>
        <span className="mx-1">/</span>{" "}
        <span className="text-black ">Listing Successfully</span>
      </div>
      <div className="mx-auto mt-20 w-full flex flex-col justify-center items-center">
        <Image
          src="/Images/SYC_Step3.png"
          alt="Car"
          width={288}
          height={288}
          className="w-72 rounded-lg"
        />
        <h2 className="font-hanken text-2xl md:text-4xl text-center w-64 md:w-1/3">
          Your Car Has Been Listed Successfully
        </h2>
        <p className="mt-4 font-hanken text-black/90 text-xs md:text-sm text-center w-52 md:w-1/4">
          Dealers can now see your listing and may contact you soon. Keep an eye
          on your messages.
        </p>
        <button className="text-sm w-fit bg-[#EB0102] text-white py-2 px-2 mt-4 rounded-full shadow hover:bg-indigo-700">
          View My Listings
        </button>
      </div>
    </div>
  );
};

export default Form3;
