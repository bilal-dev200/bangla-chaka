"use client"
import CarListing from '@/components/WebsiteComponents/HomePageComponents/CarListing'
import Image from 'next/image'
import React, { useEffect, useRef,useState } from 'react'
import { useRouter } from 'next/navigation';
import { useCarStore } from '@/lib/store/carStore';
import { toast } from 'react-toastify';

const Page = () => {
  const { selectedCarId, setSelectedCarId,carPopupData } = useCarStore(); 
  const router = useRouter();

    useEffect(() => {
    if (!carPopupData || Object.keys(carPopupData).length === 0) {
      toast.error("Please fill car details first!");
      router.push("/trade-in"); 
    }
  }, [carPopupData, router]);
    const carListRef = useRef(null); 
  const handleContinue = () => {
    if (!selectedCarId) {
    //   alert("Please select a car before continuing!");
    toast.warning("Please select a car before continuing!")
      carListRef.current?.scrollIntoView({ behavior: "smooth" }); 
      return;
    }
    router.push(`trade-form`);
  };
    return (
        <>
            <div className="flex flex-col  md:flex-row items-center justify-between bg-white p-8 md:rounded-xl shadow-sm">
                <div className="w-full md:px-10 md:w-1/2 space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        2020 Mercedes-Benz S-Class S 560
                    </h1>

                    {/* Details Table */}
                    <div className="bg-gray-50 rounded-2xl p-5 shadow-sm">
                        <div className="text-sm md:text-base divide-y">
                            {/* Row 1 */}
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium text-gray-600">Transmission</p>
                                <p className="text-gray-900">Automatic</p>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium text-gray-600">Engine</p>
                                <p className="text-gray-900">V6 Petrol</p>
                            </div>

                            {/* Row 3 */}
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium text-gray-600">Option</p>
                                <p className="text-gray-900">Premium Package</p>
                            </div>

                            {/* Row 4 */}
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium text-gray-600">Exterior color</p>
                                <p className="text-gray-900">Midnight Black</p>
                            </div>

                            {/* Row 5 */}
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium text-gray-600">Interior color</p>
                                <p className="text-gray-900">Beige Leather</p>
                            </div>

                            {/* Row 6 */}
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium text-gray-600">Accident(s)</p>
                                <p className="text-gray-900">No</p>
                            </div>

                            {/* Row 7 */}
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium text-gray-600">Clean history report</p>
                                <p className="text-gray-900">Verified</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
                    <Image
                        src="/Images/selected.png"
                        alt="Car Image"
                        width={700}
                        height={500}
                        className="object-contain ml-16"
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        This image is for reference only and may not match your car&apos;s details.
                    </p>
                    <button             onClick={handleContinue}

                     className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
                        Continue
                    </button>
                </div>

            </div>
            <div ref={carListRef}>
            <CarListing  selectedCarId={selectedCarId} setSelectedCarId={setSelectedCarId} scenario={true} />
            </div>
        </>
    )
}

export default Page