import Image from "next/image";
import Button from "~/components/button";
import InputLogin from "~/components/input/input-login";
import { LoginLayouts } from "~/layouts/LoginLayouts";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <div className="p-14 bg-white">
      <div className="flex justify-center flex-col gap-5 items-center">
        <div className="mb-[15px]">
          <img src="/assets/logo.svg" width={250}  alt="Picture of the author" className="text-white mx-auto mb-2"  />
          <h1 className="text-[12px] text-[#6b6b6b]">Silahkan Login dengan Email dan Password anda</h1>
        </div>
        <InputLogin placeholder="USERNAME" />
        <InputLogin placeholder="PASSWORD" type="password" />
        <Button title="MASUK" position="right" url="/admin" />
      </div>
    </div>
    </div>
  );
};

Login.props = {
  layout: LoginLayouts,
};

export default Login;
