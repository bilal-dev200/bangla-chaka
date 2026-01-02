
import Image from "next/image";
export default function ReadyToGetStarted() {
  return (
    <section className="w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/Images/backslider.png"
          alt="Luxury electric sports car on road at sunset with dark blue sky"
          width={1440}
          height={600}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent flex flex-col justify-center md:pl-16 pl-6 py-12">
          <h2 className="text-white text-3xl md:text-5xl font-semibold mb-4 max-w-xl">
            Ready to Get Started?
          </h2>
          <p className="text-white text-sm md:text-base max-w-lg mb-8">
            Check your eligibility or connect with a lender to explore financing options — all without affecting your credit score.
          </p>
          <button
            type="button"
            className="flex items-center gap-2 bg-white text-black font-medium rounded-full px-6 py-2.5 hover:bg-gray-100 transition"
            aria-label="Apply with Onemer"
          >
            <span>Apply with Onemer</span>
            <span className="material-icons text-lg select-none">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
