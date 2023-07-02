import Image from "next/image";
import React from "react";

const CardDestinasi = ({ title, imageUrl, description }) => {
  return (
    <div>
      <div className="flex gap-10">
        <Image src={imageUrl} width={780} height={443} alt="card" />
        <div>
          <h1 className="font-bold text-[64px] leading-[64px] text-[#2E4F4F] mb-[16px]">{title}</h1>
          <div className="text-[18px] leading-[27px] text-[#1A093CCC]" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      </div>
    </div>
  );
};

export default CardDestinasi;
