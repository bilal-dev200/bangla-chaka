"use client";

import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { FiChevronDown, FiTrash2 } from "react-icons/fi";
import { Range } from "react-range";
import { dropDownApi } from "@/lib/api/dropdown";
// import { dropDownApi } from "@/lib/api/dropDownApi"; // yahan tumhara api import hai

const FilterOptions = ({
  setFilter,
  filter,
  selectedBodyType,
  setSelectedBodyType,
  selectedFuelType,
  setSelectedFuelType,
  selectedInteriorColor,
  setSelectedInteriorColor,
  selectedExteriorColor,
  setSelectedExteriorColor,
  selectedBrand,
  setSelectedBrand,
  setSelectedFeatures,
  selectedFeatures,
}) => {
  const [zipCode, setZipCode] = useState("");

  // dropdown ke states
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]); // agar model ki API hai to use bhi set karo
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [colors, setColors] = useState([]);
  const [features, setFeatures] = useState([]);

  const [selectedModel, setSelectedModel] = useState(null);

  const transmissionOptions = {
    AUTOMATIC: "Automatic",
    MANUAL: "Manual",
    SEMI_AUTOMATIC: "Semi-Automatic",
    CVT: "CVT",
    OTHER: "Other",
  };

  const drivetrainOptions = {
    FWD: "Front-Wheel Drive",
    RWD: "Rear-Wheel Drive",
    AWD: "All-Wheel Drive",
    FOUR_WHEEL_DRIVE: "4x4",
  };

  const defaultFilter = {
    brandId: "",
    bodyTypeId: "",
    fuelTypeId: "",
    colorId: "",
    exteriorColorId: "",
    interiorColorId: "",
    condition: "NEW",
    trimId: "",
    zipCode: "",
    priceFrom: 1000,
    priceTo: 100000,
    fromYear: 1900,
    toYear: new Date().getFullYear(),
    fromMileage: 0,
    toMileage: 200000,
    transmission: null,
    drivetrain: null,
    sortOrder: "asc",
    featureIds: [],
  };

  // const [selectedFilter, setSelectedFilter] = useState("ALL");

  // Price range states
  const MIN = 1000;
  const MAX = 200000;
  const [values, setValues] = useState([1000, 200000]);
  const MIN_YEAR = 1900;
  const MAX_YEAR = new Date().getFullYear();
  const [valuesYear, setValuesYear] = useState([MIN_YEAR, MAX_YEAR]);
  const MIN_MILEAGE = 0;
  const MAX_MILEAGE = 200000; // you can adjust this based on your data
  const [valuesMILEAGE, setValuesMILEAGE] = useState([
    MIN_MILEAGE,
    MAX_MILEAGE,
  ]);

  // filters toggle
  const filters = ["NEW", "USED", "DEMO", "CERTIFIED_PRE_OWNED"];

  // ✅ API se data lana
  useEffect(() => {
    dropDownApi.getBrandlist().then((res) => {
      setBrands(res.data || []);
      // setSelectedBrand(res.data?.[0] || null);
    });
    dropDownApi.getBodyTypelist().then((res) => {
      setBodyTypes(res.data || []);
      // setSelectedBodyType(res.data?.[0] || null);
    });
    dropDownApi.getFuelTypelist().then((res) => {
      setFuelTypes(res.data || []);
      // setSelectedFuelType(res.data?.[0] || null);
    });
    dropDownApi.getColorlist().then((res) => {
      setColors(res.data || []);
      // setSelectedColor(res.data?.[0] || null);
    });
    dropDownApi.getFeaturelist().then((res) => {
      setFeatures(res.data || []);
    });
  }, []);

  const updateFilter = (key, value) => {
    setFilter((prev) => ({
      ...prev,
      [key]: value ?? "", // fallback to "" if value is undefined
    }));
  };
  const handleFeatureChange = (featureId, featureObj) => {
    setFilter((prev) => {
      const isSelected = prev.featureIds.includes(featureId);

      return {
        ...prev,
        featureIds: isSelected
          ? prev.featureIds.filter((id) => id !== featureId) // remove if already selected
          : [...prev.featureIds, featureId], // add if not selected
      };
    });
    // Update selectedFeatures (array of objects, not just IDs)
    setSelectedFeatures((prev) => {
      const exists = prev.find((f) => f.id == featureId);
      if (exists) {
        return prev.filter((f) => f.id !== featureId); // remove if already there
      } else {
        return [...prev, featureObj]; // add new feature
      }
    });
  };
  return (
    <div className="w-full sm:w-67 md:w-80 lg:w-72 bg-white p-4 shadow-md rounded-lg border border-black mt-10 mb-10 relative overflow-visible">
      {/* Filter Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold  text-lg sm:text-xl text-black">Filter</h2>
        <FiTrash2
          className="text-black cursor-pointer"
          onClick={() => {
            setFilter(defaultFilter);
            setSelectedBrand(null);
            setSelectedBodyType(null);
            setSelectedFuelType(null);
            setSelectedInteriorColor(null);
            setSelectedExteriorColor(null);
          }}
        />
      </div>
      {/* <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg sm:text-xl text-black ">
          Extra Search
        </h2>
      </div> */}

      {/* Toggle Buttons */}
      <div className="grid grid-cols-2 gap-2 mt-4 p-2 bg-[#F8F8F8] rounded">
        {filters.map((fil, index) => (
          <button
            key={index}
            onClick={() => {
              updateFilter("condition", fil);
            }}
            className={`w-full py-2 px-3 text-sm rounded ${fil === filter?.condition
              ? "bg-[#EB0102] text-white"
              : "bg-[#F8F8F8] text-gray-800 hover:bg-gray-100"
              }`}
          >
            {fil === "CERTIFIED_PRE_OWNED" ? "CERTIFIED" : fil}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <label className="font-medium text-sm  text-[#808080] whitespace-nowrap w-24 sm:w-32">
          Zip Code:
        </label>
        <input
          type="text"
          className="ml-2 sm:ml-6 w-24 sm:w-36 border border-gray-200 focus:outline-none rounded  px-2 py-1 text-black"
          placeholder="Enter Zip Code"
          value={filter?.zipCode}
          onChange={(e) => {
            updateFilter("zipCode", e.target.value);
          }}
        />
      </div>

      {/* Brand Dropdown */}
      <div className="mt-6">
        <label className="font-medium text-sm text-[#808080] ">Brand:</label>
        <Listbox
          value={selectedBrand}
          onChange={(value) => {
            setSelectedBrand(value);
            updateFilter("brandId", value?.id);
          }}
        >
          <div className="relative mt-2">
            <Listbox.Button className="w-full border rounded px-2 py-1 flex justify-between items-center text-black">
              <span>{selectedBrand?.name || "Select Brand"}</span>
              <FiChevronDown />
            </Listbox.Button>
            <Listbox.Options className="absolute w-full mt-1 bg-white shadow-lg rounded border border-black z-50 max-h-48 overflow-auto">
              {brands.map((brand) => (
                <Listbox.Option
                  key={brand.id}
                  value={brand}
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                >
                  {brand.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Body Type Dropdown */}
      <div className="mt-6">
        <label className="font-medium text-sm text-[#808080] ">
          Body Type:
        </label>
        <Listbox
          value={selectedBodyType}
          onChange={(value) => {
            setSelectedBodyType(value);
            updateFilter("bodyTypeId", value?.id);
          }}
        >
          <div className="relative mt-2">
            <Listbox.Button className="w-full border rounded px-2 py-1 flex justify-between items-center text-black">
              <span>{selectedBodyType?.name || "Select Body Type"}</span>
              <FiChevronDown />
            </Listbox.Button>
            <Listbox.Options className="absolute w-full mt-1 bg-white shadow-lg rounded border border-black z-50 max-h-48 overflow-auto">
              {bodyTypes.map((bt) => (
                <Listbox.Option
                  key={bt.id}
                  value={bt}
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                >
                  {bt.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Interior Colors Dropdown */}
      <div className="mt-6">
        <label className="font-medium text-sm text-[#808080] ">
          Interior Color:
        </label>
        <Listbox
          value={selectedInteriorColor}
          onChange={(value) => {
            setSelectedInteriorColor(value);
            updateFilter("interiorColorId", value?.id);
          }}
        >
          <div className="relative mt-2">
            <Listbox.Button className="w-full border rounded px-2 py-1 flex justify-between items-center text-black">
              <span>
                {selectedInteriorColor?.name || "Select Interior Color"}
              </span>
              <FiChevronDown />
            </Listbox.Button>
            <Listbox.Options className="absolute w-full mt-1 bg-white shadow-lg rounded border border-black z-50 max-h-48 overflow-auto">
              {colors.map((c) => (
                <Listbox.Option
                  key={c.id}
                  value={c}
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                >
                  {c.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Exterior Colors Dropdown */}
      <div className="mt-6">
        <label className="font-medium text-sm text-[#808080] ">
          Exterior Color:
        </label>
        <Listbox
          value={selectedExteriorColor}
          onChange={(value) => {
            setSelectedExteriorColor(value);
            updateFilter("exteriorColorId", value?.id);
          }}
        >
          <div className="relative mt-2">
            <Listbox.Button className="w-full border rounded px-2 py-1 flex justify-between items-center text-black">
              <span>
                {selectedExteriorColor?.name || "Select Exterior Color"}
              </span>
              <FiChevronDown />
            </Listbox.Button>
            <Listbox.Options className="absolute w-full mt-1 bg-white shadow-lg rounded border border-black z-50 max-h-48 overflow-auto">
              {colors.map((c) => (
                <Listbox.Option
                  key={c.id}
                  value={c}
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                >
                  {c.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
      <div className="mt-8">
        <p className="text-sm sm:text-base font-semibold text-black ">
          Vehicle Specifications:
        </p>

        {/* Gear Type */}
        <div className="mt-7 flex items-center justify-between">
          <label className="text-sm sm:text-base font-medium text-black w-full sm:w-1/2 ">
            Gear Type:
          </label>
          <select
            className="w-full sm:w-1/2 border border-gray-300 px-2 py-1 rounded text-black "
            value={filter.transmission || ""}
            onChange={(e) => updateFilter("transmission", e.target.value)}
          >
            <option value="">Select Transmission</option>
            {Object.entries(transmissionOptions).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Drive Mode */}
        <div className="flex items-center justify-between mt-4">
          <label className="text-sm sm:text-base font-medium text-black w-full sm:w-1/2 ">
            Drive Mode:
          </label>
          <div className="relative w-full sm:w-1/2">
            <select
              className="w-full border border-gray-300 px-2 py-1  rounded text-black"
              value={filter.drivetrain || ""}
              onChange={(e) => updateFilter("drivetrain", e.target.value)}
            >
              <option value="">Select Drive Mode</option>
              {Object.entries(drivetrainOptions).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Drive Mode */}
        {/* <div className="mt-7">
          <div className="flex items-center justify-between">
            <label className="text-sm sm:text-base font-medium text-black w-full sm:w-1/2 ">
              Drive Mode:
            </label>
            <div className="relative w-full sm:w-1/2">
              <select className="w-full border border-gray-300 px-2 py-1  rounded text-black">
                <option>4x4</option>
              </select>
            </div>
          </div>

        
          <div className="border border-gray-300 rounded mt-8 p-2 text-black">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-black" />
              <span className="">Front-Wheel (FWD)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-black " />
              <span className="">All-Wheel (AWD)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-black " />
              <span className="">4-Wheel Drive (4WD)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="accent-[#EB0102]"
                defaultChecked
              />
              <span className="text-[#EB0102] ">4x4</span>
            </label>
          </div>
        </div> */}

        {/* Fuel Preference */}
        <div className="my-6">
          <label className="font-medium text-sm text-[#808080] ">
            Fuel Preference:
          </label>
          <Listbox
            value={selectedFuelType}
            onChange={(value) => {
              setSelectedFuelType(value);
              updateFilter("fuelTypeId", value?.id);
            }}
          >
            <div className="relative mt-2">
              <Listbox.Button className="w-full border rounded px-2 py-1 flex justify-between items-center text-black">
                <span>{selectedFuelType?.name || "Select Fuel Type"}</span>
                <FiChevronDown />
              </Listbox.Button>
              <Listbox.Options className="absolute w-full mt-1 bg-white shadow-lg rounded border border-black z-50 max-h-48 overflow-auto">
                {fuelTypes.map((ft) => (
                  <Listbox.Option
                    key={ft.id}
                    value={ft}
                    className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                  >
                    {ft.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>

      <div>
        <label className="block text-sm sm:text-base font-medium text-gray-800 mb-1 ">
          Price Range:
        </label>

        {/* Price Inputs */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={
              filter.priceFrom ? `$${filter.priceFrom.toLocaleString()}` : ""
            }
            readOnly
            className="w-[80px] sm:w-[100px] text-center border border-gray-400 rounded-md px-2  py-1 text-black"
          />
          <span className="text-gray-800 text-sm sm:text-base ">to</span>
          <input
            type="text"
            value={filter.priceTo ? `$${filter.priceTo.toLocaleString()}` : ""}
            readOnly
            className="w-[80px] sm:w-[100px] text-center border border-gray-400 rounded-md px-2 py-1  text-black"
          />
        </div>

        {/* Range Slider */}
        <div className="relative mt-7">
          <Range
            step={1000}
            min={MIN}
            max={MAX}
            values={[filter.priceFrom || MIN, filter.priceTo || MAX]}
            onChange={(values) => {
              setValues(values);
              updateFilter("priceFrom", values[0]);
              updateFilter("priceTo", values[1]);
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-1 bg-gray-200 rounded-full w-full relative"
              >
                <div
                  className="absolute h-1 bg-[#EB0102] rounded-full z-10"
                  style={{
                    left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                    width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-4 h-4 bg-white border-2 border-[#EB0102] rounded-full z-20"
                style={{ ...props.style }}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="block text-sm sm:text-base font-medium text-gray-800 mb-1 ">
          Manufacturing Year Range:
        </label>

        {/* Year Inputs */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={filter.fromYear ? `${filter.fromYear}` : ""}
            readOnly
            className="w-[80px] sm:w-[100px] text-center border border-gray-400 rounded-md px-2  py-1 text-black"
          />
          <span className="text-gray-800 text-sm sm:text-base ">to</span>
          <input
            type="text"
            value={filter.toYear ? `${filter.toYear}` : ""}
            readOnly
            className="w-[80px] sm:w-[100px] text-center border border-gray-400 rounded-md px-2 py-1  text-black"
          />
        </div>

        {/* Range Slider */}
        <div className="relative mt-7">
          <Range
            step={1}
            min={MIN_YEAR}
            max={MAX_YEAR}
            values={[filter.fromYear, filter.toYear]}
            onChange={(values) => {
              updateFilter("fromYear", values[0]);
              updateFilter("toYear", values[1]);
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-1 bg-gray-200 rounded-full w-full relative"
              >
                <div
                  className="absolute h-1 bg-[#EB0102] rounded-full z-10"
                  style={{
                    left: `${((filter.fromYear - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) *
                      100
                      }%`,
                    width: `${((filter.toYear - filter.fromYear) /
                      (MAX_YEAR - MIN_YEAR)) *
                      100
                      }%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-4 h-4 bg-white border-2 border-[#EB0102] rounded-full z-20"
                style={{ ...props.style }}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="block text-sm sm:text-base font-medium text-gray-800 mb-1 ">
          Mileage:
        </label>

        {/* Mileage Inputs */}
        <input
          type="text"
          value={
            filter.fromMileage !== null && filter.fromMileage !== undefined
              ? `${filter.fromMileage.toLocaleString()} km`
              : ""
          }
          readOnly
          className="w-[100px] text-center border border-gray-400 rounded-md px-2  py-1 text-black"
        />
        <span className="text-gray-800 text-sm sm:text-base mx-2">to</span>
        <input
          type="text"
          value={
            filter.toMileage !== null && filter.toMileage !== undefined
              ? `${filter.toMileage.toLocaleString()} km`
              : ""
          }
          readOnly
          className="w-[100px] text-center border border-gray-400 rounded-md px-2 py-1  text-black"
        />

        {/* Mileage Range Slider */}
        <div className="relative mt-7">
          <Range
            step={20000}
            min={MIN_MILEAGE}
            max={MAX_MILEAGE}
            values={[filter.fromMileage, filter.toMileage]}
            onChange={(values) => {
              updateFilter("fromMileage", values[0]);
              updateFilter("toMileage", values[1]);
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-1 bg-gray-200 rounded-full w-full relative"
              >
                <div
                  className="absolute h-1 bg-[#EB0102] rounded-full z-10"
                  style={{
                    left: `${((filter.fromMileage - MIN_MILEAGE) /
                      (MAX_MILEAGE - MIN_MILEAGE)) *
                      100
                      }%`,
                    width: `${((filter.toMileage - filter.fromMileage) /
                      (MAX_MILEAGE - MIN_MILEAGE)) *
                      100
                      }%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-4 h-4 bg-white border-2 border-[#EB0102] rounded-full z-20"
                style={{ ...props.style }}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <label className="text-sm font-medium text-black w-1/2 ">
          Doors Count:
        </label>
        <select className=" px-2 py-1 rounded text-black ">
          <option>2-Door</option>
        </select>
      </div>
      <div className="mt-6">
        <h2 className="text-base font-semibold text-black ">Smart Filters:</h2>

        {/* History Check */}
        <div className="mt-7">
          <h3 className="text-sm font-medium text-black mb-2 ">
            History Check:
          </h3>
          <div className="space-y-2">
            <label className="flex items-center text-black text-sm">
              <input type="checkbox" className="accent-black mr-2" />
              Clean title <span className="text-gray-400 ml-1 ">(100)</span>
            </label>
            <label className="flex items-center text-black text-sm ">
              <input type="checkbox" className="accent-black mr-2" />
              No accidents reported{" "}
              <span className="text-gray-400 ml-1 ">(100)</span>
            </label>
            <label className="flex items-center text-black text-sm ">
              <input type="checkbox" className="accent-black mr-2" />
              Personal use only (non feed){" "}
              <span className="text-gray-400 ml-1">(2,061)</span>
            </label>
          </div>
        </div>

        {/* Deal Rating */}
        {/* <div className="mt-8 border-t border-gray-300 pt-4">
          <h3 className="text-sm font-medium text-black mb-2 ">
            Deal Rating
          </h3>
          <div className="space-y-2">
            <label className="flex items-center text-black text-sm">
              <input type="checkbox" className="accent-black mr-2" />
              <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded-full ">
                Great Deal
              </span>
              <span className="text-gray-400 ml-2 text-sm ">
                (2,061)
              </span>
            </label>
            <label className="flex items-center text-black text-sm">
              <input type="checkbox" className="accent-black mr-2" />
              <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-0.5 rounded-full ">
                Good Deal
              </span>
              <span className="text-gray-400 ml-2 text-sm ">
                (2,061)
              </span>
            </label>
            <label className="flex items-center text-black text-sm">
              <input
                type="checkbox"
                className="accent-black mr-2 "
              />
              <span className="bg-cyan-100 text-cyan-600 text-xs font-semibold px-2 py-0.5 rounded-full ">
                Fair Deal
              </span>
              <span className="text-gray-400 ml-2 text-sm ">
                (2,061)
              </span>
            </label>
          </div>
        </div> */}

        <div className="mt-8 border-t border-gray-300 pt-4">
          <h3 className="text-sm font-medium text-black mb-2 ">
            Electric Vehicle Options:
          </h3>
          <div className="space-y-2">
            <label className="flex items-center text-black text-sm">
              <input type="checkbox" className="accent-black mr-2" />
              <span className="">EV Range</span>
              <span className="text-gray-400 ml-1 text-sm ">(100)</span>
            </label>
            <label className="flex items-center text-black text-sm">
              <input type="checkbox" className="accent-black mr-2" />
              <span className="">Charging Duration</span>
              <span className="text-gray-400 ml-1 text-sm ">(100)</span>
            </label>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <h3 className="text-sm font-medium text-black mb-2 ">Features:</h3>

          <div className="space-y-3">
            {features?.map((cat) => (
              <div
                key={cat.id}
                className="flex justify-between items-center gap-3"
              >
                <span className="text-sm text-gray-600 ">{cat.name}:</span>
                <select
                  className="text-sm text-black bg-transparent  border rounded px-2"
                  // onChange={(e) => handleFeatureChange(Number(e.target.value))}
                  onChange={(e) => {
                    const selectedId = Number(e.target.value);
                    const selectedFeature = cat.features.find(
                      (f) => f.id === selectedId
                    );
                    if (selectedFeature) {
                      handleFeatureChange(selectedId, selectedFeature);
                    }
                  }}
                >
                  <option value="">Select {cat.name}</option>
                  {cat.features.map((feature) => (
                    <option key={feature.id} value={feature.id}>
                      {feature.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
