import Link from "next/link";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Button = ({ title, position = "left", url = "/" }) => {
  const positionIcon =
    position == "right" ? (
      <i className="ml-[20px] w-[30px] h-[30px] bg-[#60acb1] flex items-center justify-center rounded-full">
        <AiOutlineRight />
      </i>
    ) : (
      <i className="mr-[20px] w-[30px] h-[30px] bg-[#60acb1] flex items-center justify-center rounded-full">
        <AiOutlineLeft />
      </i>
    );

  return (
    <button className="w-[266px] h-[60px] bg-[#0E8388] text-white flex items-center justify-center rounded-full ">
      {position == "left" && positionIcon}
      <Link href={url} className="font-medium text-[20px] leading-[30px]">
        {title}
      </Link>
      {position == "right" && positionIcon}
    </button>
  );
};

export default Button;
