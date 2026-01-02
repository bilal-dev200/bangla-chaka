import {
  MdSpeed,
  MdOutlineVerified,
  MdRemoveCircleOutline,
  MdAttachMoney,
} from "react-icons/md";

export default function FeatureSection() {
  return (
    <section
      className="py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('Images/featured.png')", // <-- update path
      }}
    >
      <div
        className="md:max-w-screen-xl mx-auto grid gap-12
                   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white"
      >
        {[
          {
            icon: <MdSpeed className="text-4xl" />,
            title: "Instant Valuation",
 desc: (
        <>
        Get a real-time estimate of your <br/> car’s value within seconds — no <br/>waiting, no hassle..
        </>
      ),          },
          {
            icon: <MdOutlineVerified className="text-4xl" />,
            title: "Verified Dealer Offers",
desc: (
        <>
        We work only with trusted, vetted  <br/> dealers to ensure secure and fair<br/>trade-in deals.
        </>
      ),          },
          {
            icon: <MdRemoveCircleOutline className="text-4xl" />,
            title: "No Hidden Fees",
desc: (
        <>
        What you see is what you <br/> get. Transparent pricing  <br/>with no surprise charges.
        </>
      ),          },
          {
            icon: <MdAttachMoney className="text-4xl" />,
            title: "Credit Applied",
desc: (
        <>
        Your car’s value is instantly  <br/> applied to your next purchase —<br/>no paperwork or back-and-forth
        </>
      ),          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start space-y-4 max-w-xs mx-auto"
          >
            {item.icon}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
