import React from 'react';

const Btn = ({ onClick, title }) => {
  return (
    <button
      className="mt-2 rounded-[500px] ml-3 px-6 py-3 bg-[#EB0102] text-white font-semibold"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Btn;
