import React from "react";
import { BsInstagram, BsTwitter, BsMessenger, BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="bg-[#0E8388] h-[96px] my-auto mt-5">
      <div className="flex items-center justify-center text-white text-[40px] gap-x-6 h-full">
        <BsInstagram />
        <BsTwitter />
        <BsMessenger />
        <BsFillTelephoneFill />
        <BsFillEnvelopeFill />
      </div>
    </div>
  );
};
