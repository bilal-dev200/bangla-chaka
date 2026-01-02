import Image from "next/image";

export default function BuySellCars() {
  return (
    <section className="py-16 px-10 bg-white text-center">
      {/* Title & Subtitle */}
      <h2 className="text-4xl font-semibold text-gray-900 ">
        Buy & Sell Cars with Ease
      </h2>
      <p className="text-gray-500 mt-2 ">
        Find the perfect car or sell yours effortlessly—all in one trusted
        platform.
      </p>

      {/* Two-column layout */}
      <div className="flex items-center justify-center gap-16 mt-10">
        {/* Left Section: Buy a Car */}
        <div className="flex-1 max-w-lg text-left">
          <div className="flex items-start gap-4">
            {/* Icon with Red Background */}
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <Image
                src="/icons/find-car.png"
                alt="Find Car"
                width={40}
                height={40}
              />
            </div>
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold  text-gray-900">
                Find the Best Car for You
              </h3>
              <p className="text-gray-600 mt-2 ">
                Looking for a perfect ride? Choose from a wide range of vehicles
                to match your style and budget.
              </p>
              <button className="mt-20 px-3  py-1 border border-black text-black rounded-full hover:bg-gray-100">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="h-24 w-[1px] bg-black"></div>

        {/* Right Section: Sell a Car */}
        <div className="flex-1 max-w-lg text-left">
          <div className="flex items-start gap-4">
            {/* Icon with Red Background */}
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <Image
                src="/icons/sell-car.png"
                alt="Sell Car"
                width={40}
                height={40}
              />
            </div>
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold  text-gray-900">
                Sell Your Car & Get the Best Price
              </h3>
              <p className="text-gray-600 mt-2 ">
                Turn your car into cash! List your vehicle, attract serious
                buyers, and sell at the best price—quick and hassle-free.
              </p>
              <button className=" mt-20 px-3 py-1 border border-black text-black rounded-full hover:bg-gray-100">
                Start Selling
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
