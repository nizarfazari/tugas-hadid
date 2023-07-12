import { LoginLayouts } from "~/layouts/LoginLayouts";
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from "next/image";
import Button from "~/components/button";
import { useState } from "react";

const Admin = () => {
  const [active ,setActive] = useState(false)
  return (
    <div className="grid grid-cols-12 min-h-screen">
    <div className={` bg-white  pt-[50px] transition-all delay-150 col-span-2 ${active ? 'translate-x-[-400px]' : 'translate-x-0' }`}>
      <Image src="/assets/Man.png" width={194} height={194} className="mx-auto" />
      <h1 className="text-center mt-5 font-medium text-[16px]">ADMIN</h1>
      <h1 className="text-center mt-4 p-[18px] bg-[#0E8388] text-white">Kelola Pesanan baru</h1>
      <div className="h-[300px] items-end flex">
        <Button title='LOGOUT' position="left" url="/" />
      {/* <p className="text-[20px] font-bold text-black text-center  mt-auto">Logout</p> */}
      </div>
    </div>
    <div className={`col-span-10 text-[#8F97A3] px-[50px] rounded-[10px] transition-all delay-150  ${active ? 'translate-x-[-100px]' : 'translate-x-0' }`}>
     <div className="flex items-center justify-between mb-7 mt-4"> 
    <div className="flex items-center ">
    <RxHamburgerMenu className="text-white text-[25px] mt-[20px] mb-[20px] cursor-pointer mr-4" onClick={() => setActive(!active)} />
     <h1 className="text-[30px] text-white font-bold">KELOLA PESANAN BARU</h1>
    </div>
    <input type='text' className=" rounded-[8px] border-[1px] border-[#CCCCCC] shadow-lg w-[238px] h-[40px] px-[20px] outline-none" placeholder='Search...' />
     </div>
      <div className="bg-white p-[16px] rounded-[10px]">
      <div className="flex flex-col gap-y-5">
      <div className="grid grid-cols-6 text-[16px] leading-[20px] border-b-[1px] border-[#E3E5E8] pb-[10px]">
        <p className="col-span-1">Nama</p>
        <p className="col-span-1">Alamat</p>
        <p className="col-span-1">Email</p>
        <p className="col-span-1">Nomor HP</p>
        <p className="col-span-1">Paket</p>
        <p className="col-span-1">Status Pengajuan</p>
      </div>
      <div className="grid grid-cols-6">
        <p className="col-span-1">Hadid</p>
        <p className="col-span-1">Bumirejo</p>
        <p className="col-span-1">hadid@gmail.com</p>
        <p className="col-span-1">0812312312</p>
        <p className="col-span-1">Paket short</p>
        <p className="col-span-1">Sudah Diproses</p>
      </div>
      <div className="grid grid-cols-6">
        <p className="col-span-1">Hadid</p>
        <p className="col-span-1">Bumirejo</p>
        <p className="col-span-1">hadid@gmail.com</p>
        <p className="col-span-1">0812312312</p>
        <p className="col-span-1">Paket short</p>
        <p className="col-span-1">Sudah Diproses</p>
      </div>
      <div className="grid grid-cols-6">
        <p className="col-span-1">Hadid</p>
        <p className="col-span-1">Bumirejo</p>
        <p className="col-span-1">hadid@gmail.com</p>
        <p className="col-span-1">0812312312</p>
        <p className="col-span-1">Paket short</p>
        <p className="col-span-1">Sudah Diproses</p>
      </div>
      <div className="grid grid-cols-6">
        <p className="col-span-1">Hadid</p>
        <p className="col-span-1">Bumirejo</p>
        <p className="col-span-1">hadid@gmail.com</p>
        <p className="col-span-1">0812312312</p>
        <p className="col-span-1">Paket short</p>
        <p className="col-span-1">Sudah Diproses</p>
      </div>
      <div className="grid grid-cols-6">
        <p className="col-span-1">Hadid</p>
        <p className="col-span-1">Bumirejo</p>
        <p className="col-span-1">hadid@gmail.com</p>
        <p className="col-span-1">0812312312</p>
        <p className="col-span-1">Paket short</p>
        <p className="col-span-1">Sudah Diproses</p>
      </div>
      <div className="grid grid-cols-6">
        <p className="col-span-1">Hadid</p>
        <p className="col-span-1">Bumirejo</p>
        <p className="col-span-1">hadid@gmail.com</p>
        <p className="col-span-1">0812312312</p>
        <p className="col-span-1">Paket short</p>
        <p className="col-span-1">Sudah Diproses</p>
      </div>
      <div className="grid grid-cols-6">
        <p className="col-span-1">Hadid</p>
        <p className="col-span-1">Bumirejo</p>
        <p className="col-span-1">hadid@gmail.com</p>
        <p className="col-span-1">0812312312</p>
        <p className="col-span-1">Paket short</p>
        <p className="col-span-1">Sudah Diproses</p>
      </div>
      </div>

      </div>
    </div>
  </div>
  )
}

Admin.props = {
  layout: LoginLayouts,
};
export default Admin