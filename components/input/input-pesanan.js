import React from "react";

const InputPesanan = ({ title, placeholder,type = 'text' }) => {
  return (
    <div>
      <h1 className="font-semibold text-[14px] leading-[18px] text-[#666666] mb-2">{title}</h1>
      <input type={type} className="w-[400px] rounded-[8px] border-[1px] border-[#CCCCCC] shadow-lg w-[368px] h-[56px] px-[20px] outline-none" placeholder={placeholder} />
      
    </div>
  );
};

export default InputPesanan;
