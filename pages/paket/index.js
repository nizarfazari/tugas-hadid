import React, { useEffect } from "react";
import CardPaket from "~/components/card/card-paket";
import useAxios from "~/hooks/useAxios";
import { BackgroundGreenlayouts } from "~/layouts/BackgroundGreenlayouts";

const Paket = () => {
  const { response, isLoading, err } = useAxios({
    method: "GET",
    url: `/static/data/paket/paket.json`,
  });

  return (
    <div className="mb-20 mt-10">
      <h1 className="text-center text-[128px] leading-[128px] font-bold text-[#2E4F4F] mb-10">PILIHAN PAKET </h1>
      <div className="grid grid-cols-3 gap-[100px]">{!isLoading && response.map((val, index) => <CardPaket key={index} imageUrl={val.imageUrl} desc={val.desc} paketNumber={index + 1} paketUrl={val.paketUrl} />)}</div>
    </div>
  );
};

Paket.props = {
  layout: BackgroundGreenlayouts,
};

// export async function getServerSideProps() {
//   const data = await fetchData();

//   return {
//     props: {
//       data,
//     },
//   };
// }
export default Paket;
