import { useRouter } from "next/router";
import React from "react";
import Button from "~/components/button";
import CardPaket from "~/components/card/card-paket";
import useAxios from "~/hooks/useAxios";
import { BackgroundGreenlayouts } from "~/layouts/BackgroundGreenlayouts";

const PaketDetail = ({ data_paket }) => {
  console.log(data_paket);

  const listDetail = [
    "Wisata Edukasi (Peternakan Lebah, Belajar Batik tulis Dusun Ngaran, Membuat Gula Aren, Desa Wisata Nglipoh sentra Gerabah)",
    "Wisata Destinasi (Taman Wisata Candi Borobudur, Candi Mendut,Candi Pawon)",
    "Bonus foto 1x Background Pegunungan Menoreh di lapangan Tuksongo",
  ];
  const paketBanner = {
    imageUrl: "/assets/paket/card-borobudur.png",
    desc: "Paket short mendapatkan 1 Wisata edukasi dan 1 wisata destinasi serta mendapatkan 1 bonus foto dengan background pegunungan Menoreh. (2 jam)",
    paketUrl: "/paket/short",
  };
  return (
    <>
      <div className="grid grid-cols-9 gap-[100px]">
        <div className="col-span-3">
          <CardPaket imageUrl={paketBanner.imageUrl} desc={paketBanner.desc} paketNumber="2" />
        </div>
        <div className="col-span-6">
          <h1 className="text-[80px] leading-[120px] font-bold text-[#2E4F4F] mb-8">{data_paket.title.toUpperCase()}</h1>
          <p>{data_paket.title}</p>
          <ul className="list-decimal">
            {listDetail.map((val, index) => (
              <li className="text-[18px] leading-[32px]" key={index}>
                {val}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-[136px]">
            <Button title="KEMBALI" position="left" url="/paket?"  />
            <Button title="PESAN" position="right" url={`/pesanan?paket=${data_paket.title}`} />
          </div>
        </div>
      </div>
    </>
  );
};

PaketDetail.props = {
  layout: BackgroundGreenlayouts,
};

export async function getServerSideProps({ params }) {

  const menu = require(`/public/static/data/paket/${params.slug}.json`);
 
  return {
    props: {
      data_paket: menu.data.detail_paket,
      data_banner: menu.data.paket_banner,
    },
  };
}

export default PaketDetail;
