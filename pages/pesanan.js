import { useState } from "react";
import Button from "~/components/button";
import Dropdown from "~/components/dropdown/dropdown";
import InputPesanan from "~/components/input/input-pesanan";
import { BackgroundGreenlayouts } from "~/layouts/BackgroundGreenlayouts";

const Pesanan = () => {
  const [previewImg, setPreviewImg] = useState('')
  const dataPaket = [
    { value: "short", label: "Short" },
    { value: "medium", label: "Medium" },
    { value: "long", label: "Long" },
  ];

  const dataPayment = [
    { value: "BCA", label: "BCA" },
    { value: "BRI", label: "BRI" },
    { value: "DANA", label: "DANA" },
  ];

  const onChangeImage = (e) => {
    setPreviewImg(URL.createObjectURL(e.target.files[0]))  
  }

  return (
    <div>
      <h1 className="font-bold text-[32px] leading-[32px] text-[#2E4F4F] mb-[19px]">FORM PESANAN</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1 gap-4 flex flex-col">
          <InputPesanan title="NAMA LENGKAP" placeholder="Nama Lengkap" />
          <InputPesanan title="ALAMAT LENGKAP" placeholder="Alamat Lengkap" />
          <InputPesanan title="EMAIL" placeholder="Email" />
          <InputPesanan title="NOMOR HP" placeholder="Nomor Hp" />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <Dropdown title="PILIHAN PAKET" data={dataPaket} />
          <Dropdown title="METODE PEMBAYARAN" data={dataPayment} />
          <InputPesanan title="Jumlah Tiket" placeholder="Jumlah Tiket" type="number" />
        </div>

        <div className="col-span-1">
          <h1 className="font-semibold text-[14px] leading-[18px] text-[#666666] mb-2">BUKTI TRANSFER</h1>
          <input type="file" onChange={onChangeImage} />
          <div className="w-[380px] h-[340px] bg-white rounded-[10px] shadow-lg mt-5">
           {previewImg && <img src={previewImg} alt="ss" className="h-full w-full" />} 
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <Button title="KEMBALI" url="/paket" />
        <Button title="KIRIM" position="right" url="/berhasil" />
      </div>
    </div>
  );
};

Pesanan.props = {
  layout: BackgroundGreenlayouts,
};

export default Pesanan;
