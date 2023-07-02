import React from "react";
import CardPaket from "~/components/card/card-paket";
import { BackgroundGreenlayouts } from "~/layouts/BackgroundGreenlayouts";

const Paket = () => {
  const data = [
    {
      imageUrl: "/assets/paket/card-borobudur.png",
      desc: "Paket short mendapatkan 1 Wisata edukasi dan 1 wisata destinasi serta mendapatkan 1 bonus foto dengan background pegunungan Menoreh. (2 jam)",
      paketUrl: "/paket/short",
    },
    {
      imageUrl: "/assets/paket/card-borobudur.png",
      desc: "Paket Medium mendapatkan 2 Wisata edukasi dan 1 wisata destinasi serta mendapatkan bonus foto dengan background pegunungan Menoreh. (3 jam)",
      paketUrl: "/paket/medium",
    },
    {
      imageUrl: "/assets/paket/card-borobudur.png",
      desc: "Paket short mendapatkan 1 Wisata edukasi dan 1 wisata destinasi serta mendapatkan 1 bonus foto dengan background pegunungan Menoreh. (4 jam)",
      paketUrl: "/paket/long",
    },
  ];
  return (
    <div className="mb-20 mt-10">
      <h1 className="text-center text-[128px] leading-[128px] font-bold text-[#2E4F4F] mb-10">PILIHAN PAKET</h1>
      <div className="grid grid-cols-3 gap-[100px]">
        {data.map((val, index) => (
          <CardPaket key={index} imageUrl={val.imageUrl} desc={val.desc} paketNumber={index + 1} paketUrl={val.paketUrl} />
        ))}
      </div>
    </div>
  );
};

Paket.props = {
  layout: BackgroundGreenlayouts,
};
export default Paket;
