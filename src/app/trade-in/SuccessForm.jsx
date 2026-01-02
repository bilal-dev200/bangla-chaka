import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const SuccessForm = () => {
  return (
    <div className="bg-white min-h-screen pb-10">
      <div className="mx-auto px-4 md:px-16 text-gray-500 text-sm mb-4">
        Home <span className="mx-1">/</span>
        <span className="text-black">Trade-In</span>
        <span className="mx-1">/</span>
        <span className="text-black">Confirmation</span>
      </div>
      <div className="mx-auto mt-20 w-full flex flex-col justify-center items-center">
        <Image
          src="/Images/SYC_Step3.png"
          alt="Car"
          className="w-72 rounded-lg"
          width={288}
          height={288}
        />
        <h2 className="font-hanken text-2xl md:text-4xl text-center w-64 md:w-1/2">
          Thank You! Your Trade-In Request Has Been Submitted
        </h2>
        <p className="mt-4 font-hanken text-black/90 text-xs md:text-sm text-center w-52 md:w-1/2">
          Our team has received your details. A representative will review your car information and get back to you shortly with the best possible offer.
        </p>
        <Link href='/'>
          <button className="text-sm w-fit bg-[#EB0102] text-white py-2 px-2 mt-4 rounded-full shadow hover:bg-indigo-700">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SuccessForm