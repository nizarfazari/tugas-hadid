import Button from "~/components/button";
import Dropdown from "~/components/dropdown/dropdown";
import InputPesanan from "~/components/input/input-pesanan";
import { BackgroundGreenlayouts } from "~/layouts/BackgroundGreenlayouts";

const Pesanan = () => {
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

  return (
    <div>
      <h1 className="font-bold text-[32px] leading-[32px] text-[#2E4F4F] mb-[19px]">FORM PESANAN</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1 gap-4 grid">
          <InputPesanan title="NAMA LENGKAP" placeholder="Nama Lengkap" />
          <InputPesanan title="ALAMAT LENGKAP" placeholder="Alamat Lengkap" />
          <InputPesanan title="EMAIL" placeholder="Email" />
          <InputPesanan title="NOMOR HP" placeholder="Nomor Hp" />
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <Dropdown title="PILIHAN PAKET" data={dataPaket} />
          <Dropdown title="METODE PEMBAYARAN" data={dataPayment} />
          <Dropdown title="METODE PEMBYARAN" data={dataPayment} />
        </div>

        <div className="col-span-1">
          <h1 className="font-semibold text-[14px] leading-[18px] text-[#666666] mb-2">BUKTI TRANSFER</h1>
          <input type="file" />
          <div className="w-[380px] h-[340px] bg-white rounded-[10px] shadow-lg mt-5"></div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <Button title="KEMBALI" />
        <Button title="KIRIM" position="right" />
      </div>
    </div>
  );
};

Pesanan.props = {
  layout: BackgroundGreenlayouts,
};

export default Pesanan;
