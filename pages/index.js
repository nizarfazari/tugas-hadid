import Image from "next/image";
import React from "react";
import Button from "~/components/button";

const index = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <div className="max-w-[452px] flex flex-col justify-center h-full">
          <h1 className="font-bold text-[128px] leading-[128px] text-[#2E4F4F] mb-[19px]">VW Wira Wiri</h1>
          <p className="text-[18px] leading-[27px] text-[#1A093CCC] mb-[32px]">
            VW WiraWiri adalah perusahaan yang fokus bergerak dibidang Tour Travel. Perusahaan kami bermula dari hobi mobil VW yang kemudian menjadi salah satu lini bisnis wisata VW Tour Borobudur yang sangat terkenal dan digemari di area
            Magelang dan Jogja.
          </p>
          <Button title="Pesan Sekarang" position="right" url="/paket" />
        </div>
      </div>
      <div className="col-span-1">
        <Image src="/assets/home/home-main.png" width={580} className="w-full" height={400} alt="Picture of the author" />
        <div className="flex items-center gap-x-[30px] mt-12 justify-between">
          <Image src="/assets/home/home-left.png" width={260} height={300} alt="Picture of the author" />
          <Image src="/assets/home/home-right.png" width={350} height={300} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
};

export default index;
