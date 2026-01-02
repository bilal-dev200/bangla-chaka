import FilteredCars from "@/components/carforsale/FilteredCars";
import Filtersidebar from "@/components/dealer/Filtersidebar";

// const carData = [
//   {
//     id: 1,
//     title: "BMW 430d Coupe M Sport 190bhp",
//     bid: "25,000",
//     image: "https://via.placeholder.com/200",
//     time: "4 days left",
//     distance: "12km",
//     location: "Lahore",
//   },
//   {
//     id: 2,
//     title: "Audi Q7 S Line",
//     bid: "32,000",
//     image: "https://via.placeholder.com/200",
//     time: "2 days left",
//     distance: "18km",
//     location: "Karachi",
//   },
//   // Add more cars as needed
// ];
// const cars = [
//   {
//     id: 1,
//     title: "BMW 430d Coupe M Sport 190kM",
//     image: "/Images/bmw.jpg",
//     slug: "bmw-430d-coupe-m-sport",
//     mileage: "9123mi",
//     transmission: "Automatic",
//     horsepower: "250hp",
//     fuel: "Diesel",
//     mpg: "53.3 Avg. MPG",
//     price: "$ 20,000",
//     category: "New",
//     warranty: "12 Months",
//     dealer: "Metro Ford Sales & Service",
//     rating: "4.4",
//     reviews: 235,
//     location: "Chicago, IL (8mi.)",
//   },
//   // More car objects...
// ];

const page = () => {
  return (
    <div className="p-4 md:px-24 bg-[#f9f9f9] min-h-screen ">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        <span className="text-blue-600">Home</span> / Dealers Inventory
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dealers Inventory
          </h1>
          <p className="text-sm text-gray-600 mt-1 max-w-xl">
            Browse live wholesale vehicle auctions from verified dealers across
            the U.S. Place bids, set auto-bids, or list your own vehicles in
            minutes.
          </p>
        </div>

        <button className="inline-block  bg-[#EB0102] text-white text-sm px-4 py-2 rounded-full">
          View Dealer Profile
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <Filtersidebar />

        <div className="">
          <FilteredCars showFilters={false} showTitle={false} />
        </div>
      </div>
    </div>
  );
};

export default page;
