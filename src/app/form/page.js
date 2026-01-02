
// import ConfirmAppointmentForm from '@/components/WebsiteComponents/MyGarageComponents/ConfirmAppointmentForm';
// import DealerForm from '@/components/WebsiteComponents/MyGarageComponents/DealerForm';
// import React from 'react';



// const page = () => {
//   return (
//     <>
//     <DealerForm/>
//     <ConfirmAppointmentForm/>
// </>

//   );
// };

// export default page;
"use client"
import React, { useState } from 'react';
import ConfirmAppointmentForm from '@/components/WebsiteComponents/MyGarageComponents/ConfirmAppointmentForm';
import DealerForm from '@/components/WebsiteComponents/MyGarageComponents/DealerForm';

const Page = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      {showConfirm ? (
        <ConfirmAppointmentForm />
      ) : (
        <DealerForm onContinue={() => setShowConfirm(true)} />
      )}
    </>
  );
};

export default Page;
