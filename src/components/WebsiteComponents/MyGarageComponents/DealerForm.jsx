import React from 'react';

const steps = [
  { step: 1, active: true, title: "Schedule Inspection" },
  { step: 2, active: false, title: "Confirm & Submit" }
];

const timeSlots = [
  "10:00 AM - 12:00 PM",
  "1:00 PM - 3:00 PM",
  "4:00 PM - 6:00 PM"
];

const locations = [
  { id: 1, label: "At Dealer Location", value: "dealer" },
  { id: 2, label: "At My Home/Office (if applicable)", value: "home" }
];

const DealerForm = ({ onContinue }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onContinue();     
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex justify-center mb-10">
          <div className="flex items-center space-x-32">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full font-semibold ${
                  s.active ? "bg-indigo-700 text-white" : "bg-white text-black border border-black"
                }`}>
                  {s.step}
                </div>
                <p className="font-bold mt-3">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-10 mt-3 mb-10 rounded-xl max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
          Schedule Your Vehicle Inspection
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8">
          Choose a time and location that works for you. A dealer rep will inspect your car and finalize the offer.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              className="flex-1 px-4 py-3 rounded-xl border border-black"
            />
            <select className="flex-1 px-4 py-3 rounded-xl border border-black">
              <option>Select Time Slot</option>
              {timeSlots.map((slot, idx) => (
                <option key={idx}>{slot}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="font-bold mb-2">Choose Location</p>
            <div className="flex gap-6 mb-4">
              {locations.map((loc) => (
                <label key={loc.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="location"
                    className="form-radio"
                    value={loc.value}
                    defaultChecked={loc.id === 1}
                  />
                  {loc.label}
                </label>
              ))}
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-3 rounded-xl border border-black mb-4"
            />
            <textarea
              placeholder="Text Field (optional)"
              className="w-full px-4 py-3 rounded-xl border border-black resize-none"
              rows={3}
            />
          </div>

          <p className="text-xs mt-2">
            <strong className="font-bold">Term & Condition:</strong> The quoted price is only valid after test drive and inspection by dealer
          </p>

          <div className="text-center">
            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-indigo-700 text-white rounded-full font-semibold hover:bg-indigo-800 transition"
            >
              Continue to Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default DealerForm;
