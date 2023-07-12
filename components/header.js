import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export const Header = ({ isLogo = true }) => {
  const pathName = usePathname();

  const data = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Destinasi",
      url: "/destinasi",
    },
    {
      title: "Paket",
      url: "/paket",
    }
  ];

  return (
    <div className="container mx-auto h-[80px]">
      <div className="flex items-center h-full">
      <img src="/assets/logo.svg" width={200}  alt="Picture of the author"   />
        <ul className="flex gap-x-[40px] mx-auto">
          {data.map((val, i) => {
            return (
              <li className={`text-[20px] font-semibold leading-[30px] cursor-pointer ${pathName == val.url ? "text-[#1A093E]" : "text-[#787282]"}`} key={i}>
                <Link key={i} href={val.url}>
                  {val.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
