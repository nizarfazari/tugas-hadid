import Image from "next/image";
import Button from "~/components/button";
import InputLogin from "~/components/input/input-login";
import { LoginLayouts } from "~/layouts/LoginLayouts";

const Login = () => {
  return (
    <div className="pt-40">
      <div className="flex justify-center flex-col gap-5 items-center">
        <h1 className="text-[128px] leading-[128px] font-bold text-white text-center mb-10">LOGIN</h1>
        <Image src="/assets/Man.png" width={194} height={194} alt="login" />
        <InputLogin placeholder="USERNAME" />
        <InputLogin placeholder="PASSWORD" type="password" />
        <Button title="MASUK" position="right" />
      </div>
    </div>
  );
};

Login.props = {
  layout: LoginLayouts,
};

export default Login;
