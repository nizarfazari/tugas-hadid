import React from "react";

const InputPesanan = ({ title, placeholder, isASSistive = true }) => {
  return (
    <div>
      <h1 className="font-semibold text-[14px] leading-[18px] text-[#666666] mb-2">{title}</h1>
      <input type="text" className="rounded-[8px] border-[1px] border-[#CCCCCC] shadow-lg w-[368px] h-[56px] pl-[20px] outline-none" placeholder={placeholder} />
      {isASSistive && <h1 className="text-[14px] leading-[18px] text-[#666666] mt-2">Assistive Text</h1>}
    </div>
  );
};

export default InputPesanan;
