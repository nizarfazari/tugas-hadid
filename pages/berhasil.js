import Image from "next/image";
import React from "react";
import Button from "~/components/button";
import { BackgroundGreenlayouts } from "~/layouts/BackgroundGreenlayouts";

const Berhasil = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <Image src="/assets/success.png" width={830} height={400} alt="succes" />
      <Button title="Kembali" url="/" />
    </div>
  );
};

Berhasil.props = {
  layout: BackgroundGreenlayouts,
};

export default Berhasil;
