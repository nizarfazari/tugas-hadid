import Image from "next/image";
import React from "react";
import Button from "../button";

const CardPaket = ({ paketNumber, imageUrl, desc, paketUrl }) => {
  return (
    <div className="max-w-[400px]">
      <div className="mb-[36px] rounded-lg shadow-lg p-[24px] bg-white ">
        <h1 className="text-[20px] text-[#2E4F4F] font-bold leading-[30px] text-center">Paket {paketNumber}</h1>
        <Image src={imageUrl} width={267} height={267} alt="card-paket" className="mx-auto" />
        <p className="text-[18px] leading-[32px] text-center font-normal max-w-[379px] mx-auto">{desc}</p>
      </div>
      {paketUrl && (
        <div className="flex justify-center">
          <Button title="Pilih Paket" position="right" url={paketUrl} />
        </div>
      )}
    </div>
  );
};

export default CardPaket;
