import Link from "next/link";
import Logo from "../public/assets/image/logo.svg";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 90) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <div
      className={
        colorChange
          ? "fixed w-full pt-7 pb-[18px] z-[100] backdrop-blur-[20px] bg-gradient-to-r from-[#FAFCFF]/40 to-[#FAFCFF]/10"
          : "fixed bg-white w-full pt-7 pb-[18px] z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-[227px]">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>

        <div>
          <ul className="flex">
            <Link href="/">
              <li className="mr-5 text-sm">หน้าแรก</li>
            </Link>
            <Link href="">
              <li className="mr-5 text-sm text-[#969696]">เกี่ยวกับเรา</li>
            </Link>
            <Link href="">
              <li className="mr-5 text-sm text-[#969696]">ทีมของเรา</li>
            </Link>
            <Link href="/#service">
              <li className="mr-5 text-sm text-[#969696]">บริการของเรา</li>
            </Link>
            <Link href="/#contactLine">
              <li className="mr-5 text-sm text-[#969696]">ตรวจเช็คสุขภาพ</li>
            </Link>
            <Link href="/#blog">
              <li className="mr-5 text-sm text-[#969696]">บทความ</li>
            </Link>
            <Link href="/#contact">
              <li className="text-sm text-[#969696]">ติดต่อ</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
