import Image from "next/image"

export default function Page() {
  const carListings = [
    {
      id: 1,
      title: "Honda Civic",
      vin: "CAR VIN | DFKLZDFHK1234156B",
      date: "20 June 2025",
      price: "$ 2,500.00",
      status: "Active",
      image: "/Images/my-car.png",
    },
    {
      id: 2,
      title: "Honda Civic",
      vin: "CAR VIN | DFKLZDFHK1234156B",
      date: "20 June 2025",
      price: "$ 2,500.00",
      status: "Active",
      image: "/Images/my-car.png",
    },
    {
      id: 3,
      title: "Honda Civic",
      vin: "CAR VIN | DFKLZDFHK1234156B",
      date: "20 June 2025",
      price: "$ 2,500.00",
      status: "Active",
      image: "/Images/my-car.png",
    },
    {
      id: 4,
      title: "Honda Civic",
      vin: "CAR VIN | DFKLZDFHK1234156B",
      date: "20 June 2025",
      price: "$ 2,500.00",
      status: "Active",
      image: "/Images/my-car.png",
    },
    {
      id: 5,
      title: "Honda Civic",
      vin: "CAR VIN | DFKLZDFHK1234156B",
      date: "20 June 2025",
      price: "$ 2,500.00",
      status: "Active",
      image: "/Images/my-car.png",
    },
    {
      id: 6,
      title: "Honda Civic",
      vin: "CAR VIN | DFKLZDFHK1234156B",
      date: "20 June 2025",
      price: "$ 2,500.00",
      status: "Active",
      image: "/Images/my-car.png",
    },
  ]

  return (
    <div className="min-h-screen p-6  px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-5xl font-hanken text-gray-900 mb-2">My Car Listings</h1>
            <p className="text-gray-600 text-sm">View, manage, and update all the cars you&apos;ve listed for sale.</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            List a New Car
          </button>
        </div>

        {/* Car Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {carListings.map((car) => (
            <div key={car.id} className="bg-gray-100 rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex">
                {/* Car Image */}
                <div className="flex-shrink-0">
                <Image
                  src={car.image}
                  alt="Car"
                  className="w-64 rounded-lg"
                  width={256}
                  height={256}
                />
                </div>

                {/* Car Details */}
                <div className="flex-1 p-10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-3xl font-hanken text-gray-900">{car.title}</h3>
                  </div>

                  <p className="text-sm text-black mb-2">{car.vin}</p>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex flex-col">
                    <span className="text-sm text-black">Listed</span>
                    <span className="text-lg text-black font-semibold">{car.date}</span>
                    </div>
                    <div className="flex flex-col">
                    <span className="text-sm text-black">Price</span>
                    <span className="text-lg font-bold text-gray-900">{car.price}</span>
                    </div>

                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                    <span className="text-sm text-black">Status</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-medium rounded-full">
                      {car.status}
                    </span>
                                        </div>


                    <div className="flex gap-2">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 text-sm rounded font-medium transition-colors">
                        Edit
                      </button>
                      <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-1 text-sm rounded font-medium transition-colors bg-white">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
