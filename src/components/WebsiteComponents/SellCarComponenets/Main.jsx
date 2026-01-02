import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import ColorPickerField from "./ColorPicker";
import Image from "next/image";

// Reusable InputField Component
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
  ...rest
}) => {
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 ${className} ${meta.touched && meta.error ? "border-red-500" : ""
          }`}
        {...field}
        {...rest}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

// Reusable SelectField Component
const SelectField = ({
  label,
  name,
  options,
  placeholder,
  className = "",
  ...rest
}) => {
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={name}
        className={`w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 ${className} ${meta.touched && meta.error ? "border-red-500" : ""
          }`}
        {...field}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

// Reusable RadioButtonGroup Component
const RadioButtonGroup = ({ label, name, options, ...rest }) => {
  const [field, meta] = useField(name);
  return (
    // <div className="flex flex-col gap-1">
    //   <label className="block text-sm font-medium text-gray-700">{label}</label>
    //   <div className="flex gap-2">
    //     {options.map((option) => (
    //       <label key={option.value} className="inline-flex items-center cursor-pointer">
    //         <input
    //           type="radio"
    //           name={name}
    //           value={option.value}
    //           checked={field.value === option.value}
    //           onChange={field.onChange}
    //           onBlur={field.onBlur}
    //           className="form-radio h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    //           {...rest}
    //         />
    //         <span className={`ml-2 text-sm ${field.value === option.value ? 'font-semibold text-blue-600' : 'text-gray-700'}`}>
    //           {option.label}
    //         </span>
    //       </label>
    //     ))}
    //   </div>
    //   <ErrorMessage name={name} component="div" className="text-red-500 text-xs mt-1" />
    // </div>
    <div className="flex flex-col gap-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              inline-flex items-center justify-center w-1/2
              px-6 py-3 rounded-xl border
              cursor-pointer transition-all duration-200 ease-in-out
              text-sm font-medium
              ${field.value === option.value
                ? "bg-black text-white border-black shadow-md" // Styles for selected (Yes/No)
                : "bg-white text-gray-800 border-gray-300 hover:border-gray-400" // Styles for unselected
              }
            `}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={field.value === option.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              className="hidden" // Hide the default radio button
              {...rest}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

// ImageUploader Component
const ImageUploader = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      file: file, // Store the actual file object
    }));
    setSelectedImages(imageUrls);
    helpers.setValue(imageUrls.map((img) => img.file)); // Set Formik field value to actual File objects
  };

  // Cleanup object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      selectedImages.forEach((image) => URL.revokeObjectURL(image.url));
    };
  }, [selectedImages]);

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        Upload Car Photos
      </label>

      <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-16 text-center bg-gray-50 hover:border-gray-400">
        {selectedImages.length > 0 && (
          <div className="absolute inset-0 flex flex-wrap items-start justify-center gap-3 p-1 overflow-y-auto bg-white/70 z-10 rounded-lg">
            {selectedImages.map((image, index) => (
              <div
                key={index}
                className="w-full h-full relative rounded-md overflow-hidden shadow-md"
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <svg
          className="mx-auto h-8 w-8 text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="text-sm text-gray-500">
          Drag & Drop or{" "}
          <span className="text-blue-600 font-medium">Click to upload</span>
        </p>
        <input
          id={name}
          type="file"
          // multiple
          accept="image/*"
          onChange={handleImageChange}
          onBlur={field.onBlur}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

// Main App Component
const App = () => {
  const validationSchema = Yup.object().shape({
    carPhotos: Yup.array()
      .min(1, "At least one photo is required")
      .required("Car photos are required"),
    vin: Yup.string()
      .matches(
        /^[A-HJ-NPR-Z0-9]{17}$/,
        "VIN must be 17 alphanumeric characters (excluding I, O, Q)"
      )
      .required("VIN is required"),
    carPrice: Yup.number()
      .typeError("Car price must be a number")
      .positive("Car price must be positive")
      .required("Car price is required"),
    exteriorColor1: Yup.string().required(
      "Please select at least one exterior color"
    ),
    zipCode: Yup.string()
      .matches(/^\d{5}$/, "ZIP Code must be 5 digits")
      .required("ZIP Code is required"),
    mileage: Yup.number()
      .typeError("Mileage must be a number")
      .positive("Mileage must be positive")
      .required("Mileage is required"),
    state: Yup.string().required("State is required"),
    carCondition: Yup.string().required("Car condition is required"),
    originalOwner: Yup.string().required("This field is required"),
    everInAccident: Yup.string().required("This field is required"),
    makingPayments: Yup.string().required("This field is required"),
    lenderName: Yup.string().when("makingPayments", {
      is: "Yes",
      then: (schema) => schema.required("Lender name is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    monthlyPayment: Yup.number().when("makingPayments", {
      is: "Yes",
      then: (schema) =>
        schema
          .typeError("Monthly payment must be a number")
          .positive("Monthly payment must be positive")
          .required("Monthly payment is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    balance: Yup.number().when("makingPayments", {
      is: "Yes",
      then: (schema) =>
        schema
          .typeError("Balance must be a number")
          .positive("Balance must be positive")
          .required("Balance is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    apr: Yup.number().when("makingPayments", {
      is: "Yes",
      then: (schema) =>
        schema
          .typeError("APR must be a number")
          .positive("APR must be positive")
          .required("APR is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    accidentDamageAmount: Yup.number().when("everInAccident", {
      is: "Yes",
      then: (schema) =>
        schema
          .typeError("Accident damage amount must be a number")
          .positive("Accident damage amount must be positive")
          .required("Accident damage amount is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    frameDamage: Yup.boolean().notRequired(),
    cleanHistoryReport: Yup.string().required("This field is required"),
    hasDamageIssuesModifications: Yup.string().required(
      "This field is required"
    ),
  });

  const stateOptions = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "Charcoal Grey", class: "bg-gray-800" },
    { name: "Grey", class: "bg-gray-500" },
    { name: "Silver", class: "bg-gray-300" },
    { name: "White", class: "bg-white border" },
    { name: "Pearl White", class: "bg-gray-50 border" },
    { name: "Beige", class: "bg-yellow-100" },
    { name: "Gold", class: "bg-yellow-400" },
    { name: "Tan", class: "bg-yellow-300" },
    { name: "Brown", class: "bg-yellow-800" },
    { name: "Burgundy", class: "bg-red-800" },
    { name: "Red", class: "bg-red-500" },
    { name: "Orange", class: "bg-orange-400" },
    { name: "Yellow", class: "bg-yellow-300" },
    { name: "Dark Green", class: "bg-green-800" },
    { name: "Bright Green", class: "bg-green-500" },
    { name: "Light Green", class: "bg-green-300" },
    { name: "Dark Blue", class: "bg-blue-900" },
    { name: "Bright Blue", class: "bg-blue-500" },
    { name: "Light Blue", class: "bg-blue-300" },
  ];

  const conditionOptions = [
    { value: "excellent", label: "Excellent" },
    { value: "good", label: "Good" },
    { value: "fair", label: "Fair" },
    { value: "poor", label: "Poor" },
  ];

  const yesNoOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Data:", values);
    alert("Form submitted! Check console for data."); // Using alert for demo purposes as per instructions
    setSubmitting(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Left Form Section */}
      <div className="space-y-6 py-4 md:py-0 px-4 md:px-10">
        <Formik
          initialValues={{
            carPhotos: [],
            vin: "",
            carPrice: "",
            exteriorColor1: "",
            exteriorColor2: "",
            zipCode: "",
            mileage: "",
            state: "",
            carCondition: "",
            originalOwner: "",
            everInAccident: "",
            makingPayments: "",
            lenderName: "",
            monthlyPayment: "",
            balance: "",
            apr: "",
            accidentDamageAmount: "",
            frameDamage: false,
            cleanHistoryReport: "",
            hasDamageIssuesModifications: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }) => (
            <Form className="space-y-6">
              <ImageUploader name="carPhotos" />

              <InputField
                label="VIN"
                name="vin"
                placeholder="Enter your VIN number"
              />

              {/* <InputField label="Add your car price" name="carPrice" type="number" placeholder="Enter amount" /> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* <InputField label="What color is your car?" name="carColor" placeholder="Exterior" /> */}
                <ColorPickerField
                  label="What color is your car?"
                  name1="exteriorColor1"
                  name2="exteriorColor2"
                />
                <InputField
                  label="What is your ZIP Code?"
                  name="zipCode"
                  placeholder="ZIP Code"
                />
              </div>

              <InputField
                label="Enter your cars mileage"
                name="mileage"
                type="number"
                placeholder="Mileage"
              />

              <SelectField
                label="State"
                name="state"
                options={stateOptions}
                placeholder="Select State"
              />

              <SelectField
                label="Car Condition"
                name="carCondition"
                options={conditionOptions}
                placeholder="Select Condition"
              />

              <RadioButtonGroup
                label="Are you the original owner?"
                name="originalOwner"
                options={yesNoOptions}
              />

              <RadioButtonGroup
                label="Was your car ever in an accident?"
                name="everInAccident"
                options={yesNoOptions}
              />

              {values.everInAccident === "Yes" && (
                <>
                  <InputField
                    label="Accident damage amount"
                    name="accidentDamageAmount"
                    type="number"
                    placeholder="Enter amount"
                  />
                  <div className="flex items-center mt-2">
                    <Field
                      type="checkbox"
                      id="frameDamage"
                      name="frameDamage"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="frameDamage"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Frame Damage
                    </label>
                  </div>
                </>
              )}

              <RadioButtonGroup
                label="Are you still making payments on your car?"
                name="makingPayments"
                options={yesNoOptions}
              />

              {values.makingPayments === "Yes" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <InputField name="lenderName" placeholder="Lender name" />
                  <InputField
                    name="monthlyPayment"
                    type="number"
                    placeholder="Monthly payment"
                  />
                  <InputField
                    name="balance"
                    type="number"
                    placeholder="Balance"
                  />
                  <InputField name="apr" type="number" placeholder="APR" />
                </div>
              )}

              <RadioButtonGroup
                label="Does your car have a clean history report?"
                name="cleanHistoryReport"
                options={yesNoOptions}
              />
              <p className="text-xs text-gray-500 -mt-4">
                Please note: This may affect your car&apos;s history report. We will
                pull your vehicle&apos;s history report to verify.
              </p>

              <RadioButtonGroup
                label="Does your car have damage, mechanical issues, tire wear, or modifications?"
                name="hasDamageIssuesModifications"
                options={yesNoOptions}
              />
              <p className="text-xs text-gray-500 -mt-4">
                Please note: This may affect your car&apos;s value. We will conduct a
                comprehensive evaluation.
              </p>

              <div className="w-full flex justify-center pt-4">
                <button
                  type="submit"
                  className="text-sm w-fit bg-[#EB0102] text-white py-2 px-6 rounded-full shadow hover:bg-indigo-700 transition duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Car Information"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Side Car Image */}
      <div className="hidden md:block relative w-full h-[500px]">
        <Image
          src="/Images/sellcar.png"
          alt="Car"
          fill
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default App;
