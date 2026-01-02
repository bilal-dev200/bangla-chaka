import Image from "next/image";

const CarCard = ({ car }) => (
  <div className="rounded-lg overflow-hidden border bg-white shadow-sm">
    <div className="relative h-44 w-full">
      <Image src={car.image} alt={car.name} fill className="object-cover" />
      {car.status && (
        <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-[2px] rounded font-semibold ">
          {car.status}
        </span>
      )}
    </div>
    <div className="p-3 ">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-[15px] font-semibold text-black leading-tight">
          {car.name}
        </h3>
        <p className="text-[#EB0102] font-bold text-[17px] leading-tight">
          {car.price}
        </p>
      </div>
      <p className="text-xs text-gray-600 mb-1">{car.mileage}</p>
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs text-gray-600">
          {car.year} | {car.fuel}
        </p>
        <p className="text-[11px] text-black bg-gray-100 inline-block px-2 py-[2px] rounded font-medium">
          {car.location}
        </p>
      </div>
    </div>
  </div>
);

export default CarCard;
