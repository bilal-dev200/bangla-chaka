"use client";
import Image from "next/image";
import BuySellCars from "@/components/WebsiteComponents/HomePageComponents/BuySellCars";
import CarsForSaleBanner from "@/components/carforsale/CarsForSaleBanner";
import FilterOptions from "@/components/carforsale/FilterOptions";
import FilteredCars from "@/components/carforsale/FilteredCars";
import { useEffect, useState, Suspense } from "react";
import { useVehicalsStore } from "@/lib/store/vehicalStore";
import { useSearchParams } from "next/navigation";
import { vehicalsApi } from "@/lib/api/vehical";
import { FiFilter } from "react-icons/fi";

const CarsForSaleContent = () => {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState({
    brandId: searchParams.get("brandId") || "",
    bodyTypeId: searchParams.get("bodyTypeId") || "",
    fuelTypeId: searchParams.get("fuelTypeId") || "",
    colorId: "",
    exteriorColorId: "",
    interiorColorId: "",
    condition: "NEW",
    trimId: "",
    vehicleModelId: searchParams.get("vehicleModelId") || "",
    zipCode: "",
    priceFrom: 1000,
    priceTo: 200000,
    fromYear: 1900,
    toYear: 2025,
    fromMileage: 0,
    toMileage: 200000,
    transmission: null,
    drivetrain: null,
    sortOrder: "asc",
    featureIds: [],
  });
  const [vehicals, setVehicals] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const [selectedModal, setSelectedModal] = useState(null);
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const [selectedFuelType, setSelectedFuelType] = useState(null);
  const [selectedInteriorColor, setSelectedInteriorColor] = useState(null);
  const [selectedExteriorColor, setSelectedExteriorColor] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const brandId = searchParams.get("brandId") || "";
    const brandName = searchParams.get("brandName") || "";
    const vehicleModelId = searchParams.get("vehicleModelId") || "";
    const modalName = searchParams.get("modalName") || "";
    const bodyTypeId = searchParams.get("bodyTypeId") || "";
    const bodyTypeName = searchParams.get("bodyTypeName") || "";
    const fuelTypeId = searchParams.get("fuelTypeId") || "";
    const fuelTypeName = searchParams.get("fuelTypeName") || "";
    const colorId = searchParams.get("colorId") || "";
    const colorName = searchParams.get("colorName") || "";
    const transmission = searchParams.get("transmission") || "";

    setFilter((prev) => ({
      ...prev,
      brandId,
      vehicleModelId,
      bodyTypeId,
      fuelTypeId,
      colorId,
      transmission,
    }));

    if (brandId && brandName)
      setSelectedBrand({ id: brandId, name: brandName });
    if (vehicleModelId && modalName)
      setSelectedModal({ id: vehicleModelId, name: modalName });
    if (bodyTypeId && bodyTypeName)
      setSelectedBodyType({ id: bodyTypeId, name: bodyTypeName });
    if (fuelTypeId && fuelTypeName)
      setSelectedFuelType({ id: fuelTypeId, name: fuelTypeName });
    if (colorId && colorName)
      setSelectedColor({ id: colorId, name: colorName });
  }, [searchParams]);

  useEffect(() => {
    const cleanFilters = Object.fromEntries(
      Object.entries(filter).filter(([_, v]) => v !== "")
    );
    const payload = {
      condition: cleanFilters.condition,
      zipCode: cleanFilters.zipCode || "",
      brandId: cleanFilters.brandId ? Number(cleanFilters.brandId) : null,
      vehicleModelId: cleanFilters.trimId ? Number(cleanFilters.trimId) : null,
      bodyTypeIds: cleanFilters.bodyTypeId
        ? [Number(cleanFilters.bodyTypeId)]
        : [],
      fromPrice: cleanFilters.priceFrom,
      toPrice: cleanFilters.priceTo,
      fromYear: cleanFilters.fromYear,
      toYear: cleanFilters.toYear,
      fromMileage: cleanFilters.fromMileage,
      toMileage: cleanFilters.toMileage,
      transmission: cleanFilters.transmission || "",
      drivetrain: cleanFilters.drivetrain || "",
      fuelTypeId: cleanFilters.fuelTypeId
        ? Number(cleanFilters.fuelTypeId)
        : null,
      exteriorColorId: cleanFilters.exteriorColorId
        ? Number(cleanFilters.exteriorColorId)
        : null,
      interiorColorId: cleanFilters.interiorColorId
        ? Number(cleanFilters.interiorColorId)
        : null,
      featureIds: cleanFilters.featureIds?.length
        ? cleanFilters.featureIds
        : [],
      vehicleModelId: cleanFilters.vehicleModelId
        ? cleanFilters.vehicleModelId
        : null,

      page: 1,
      limit: 20,
      sortBy: "price",
      sortOrder: cleanFilters.sortOrder ? cleanFilters.sortOrder : "asc",
    };

    console.log("🚀 Final Payload:", payload);
    getAllvechicle(payload);
  }, [filter]);

  const getAllvechicle = async (payload) => {
    try {
      const res = await vehicalsApi.getVehicallist(payload);
      console.log("Filtered vehicles:", res.data);
      setVehicals(res.data);
    } catch (err) {
      console.error("Error fetching vehicles:", err);
    }
  };

  const selectedFilters = [];

  if (filter.condition) {
    selectedFilters.push(
      filter.condition === "CERTIFIED_PRE_OWNED"
        ? "CERTIFIED"
        : filter.condition
    );
  }

  if (filter.brandId && selectedBrand?.name) {
    selectedFilters.push(selectedBrand.name);
  }

  if (filter.bodyTypeId && selectedBodyType?.name) {
    selectedFilters.push(selectedBodyType.name);
  }

  if (filter.fuelTypeId && selectedFuelType?.name) {
    selectedFilters.push(selectedFuelType.name);
  }

  if (filter.exteriorColorId && selectedExteriorColor?.name) {
    selectedFilters.push(selectedExteriorColor.name);
  }

  if (filter.interiorColorId && selectedInteriorColor?.name) {
    selectedFilters.push(selectedInteriorColor.name);
  }

  if (filter.zipCode) {
    selectedFilters.push(`Zip Code: ${filter.zipCode}`);
  }

  if (filter.vehicleModelId && selectedModal?.name) {
    selectedFilters.push(selectedModal.name);
  }

  const handleRemoveFilter = (removed) => {
    setFilter((prev) => {
      const updated = { ...prev };

      if (
        removed === prev.condition ||
        (prev.condition === "CERTIFIED_PRE_OWNED" && removed === "CERTIFIED")
      ) {
        updated.condition = "";
      }

      if (removed === selectedBrand?.name) {
        updated.brandId = "";
        setSelectedBrand(null);
      }

      if (removed === selectedModal?.name) {
        updated.vehicleModelId = "";
        setSelectedBrand(null);
      }

      if (removed === selectedBodyType?.name) {
        updated.bodyTypeId = "";
        setSelectedBodyType(null);
      }

      if (removed === selectedFuelType?.name) {
        updated.fuelTypeId = "";
        setSelectedFuelType(null);
      }

      if (removed === selectedExteriorColor?.name) {
        updated.exteriorColorId = "";
        setSelectedExteriorColor(null);
      }

      if (removed === selectedInteriorColor?.name) {
        updated.interiorColorId = "";
        setSelectedInteriorColor(null);
      }

      if (removed === `Zip Code: ${prev.zipCode}`) {
        updated.zipCode = "";
      }

      const feature = selectedFeatures.find((f) => f.name === removed);
      if (feature) {
        updated.featureIds = prev.featureIds.filter((id) => id !== feature.id);
        setSelectedFeatures((prev) => prev.filter((f) => f.id !== feature.id));
      }

      return updated;
    });
  };

  const handleFeatureChange = (featureId, featureObj) => {
    setFilter((prev) => {
      const isSelected = prev.featureIds.includes(featureId);

      return {
        ...prev,
        featureIds: isSelected
          ? prev.featureIds.filter((id) => id !== featureId)
          : [...prev.featureIds, featureId],
      };
    });
    setSelectedFeatures((prev) => {
      const exists = prev.find((f) => f.id == featureId);
      if (exists) {
        return prev.filter((f) => f.id !== featureId);
      } else {
        return [...prev, featureObj];
      }
    });
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <CarsForSaleBanner />

      <div className="flex flex-col lg:flex-row px-4 py-6 gap-6 bg-white">
        {/* Left: FilterOptions Sidebar */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="lg:hidden mb-4 flex items-center gap-2 px-4 py-2 bg-[#EB0102] text-white rounded-md shadow-md"
        >
          <FiFilter size={18} />
          Filters
        </button>
        <div
          className={`
            fixed top-0 left-0 h-screen w-3/4 max-w-sm bg-white shadow-lg transform 
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"} 
            transition-transform duration-300 ease-in-out 
            z-50 p-4 overflow-y-auto   /* 👈 scroll enable */
            lg:static lg:translate-x-0 lg:shadow-none lg:p-0 lg:w-1/4 lg:h-auto lg:overflow-visible
          `}
        >
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-gray-600 text-2xl"
            >
              &times;
            </button>
          </div>

          <FilterOptions
            filter={filter}
            setFilter={setFilter}
            selectedBodyType={selectedBodyType}
            setSelectedBodyType={setSelectedBodyType}
            selectedFuelType={selectedFuelType}
            setSelectedFuelType={setSelectedFuelType}
            selectedInteriorColor={selectedInteriorColor}
            setSelectedInteriorColor={setSelectedInteriorColor}
            selectedExteriorColor={selectedExteriorColor}
            setSelectedExteriorColor={setSelectedExteriorColor}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            setSelectedFeatures={setSelectedFeatures}
            selectedFeatures={selectedFeatures}
          />
        </div>

        {/* Right: FilteredCars */}
        <div className="w-full py-3 min-w-0">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {selectedFilters.map((f, index) => (
              <span
                key={index}
                className="bg-indigo-50 text-indigo-500 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {f}
                <button
                  onClick={() => handleRemoveFilter(f)}
                  className="ml-1 text-indigo-600 hover:text-indigo-700"
                >
                  &times;
                </button>
              </span>
            ))}
            {selectedFeatures?.map((feature) => (
              <span
                key={feature.id}
                className="bg-indigo-50 text-indigo-500 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {feature.name}
                <button
                  onClick={() => handleFeatureChange(feature.id, feature)}
                  className="ml-1 text-indigo-600 hover:text-indigo-700"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <FilteredCars
            vehicals={vehicals}
            isLoading={isLoading}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default function CarsForSale() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarsForSaleContent />
    </Suspense>
  );
}
