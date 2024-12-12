"use client";

import Image from "next/image";
import Menu from "@/public/menu-burger.png";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="mx-auto px-4 lg:px-20 sm:px-8 border-b border-[#E7E5E4]">
        <div className="flex justify-between items-center py-4 gap-10 relative z-10 ">
          <div className="sm:hidden items-center ">
            <button onClick={toggleMenu}>
              <Image src={Menu} alt="menu-icon" height={35} width={35} className="rounded-sm pt-1.5" />
            </button>
          </div>
          <div className="hidden sm:inline">
            <ul className="flex gap-8 items-center text-sm text-[#44403C] font-normal">
              <li className="hover:text-[#BCD02A]">
                <Link href={"/apply"}>Loans</Link>
              </li>
              <li className="hover:text-[#BCD02A]">
                <Link href={"/signin"}>Resources</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <Image src="/vector.svg" alt="logo" width={230} height={32} />
          </div>

          <div className="flex gap-x-3 text-base">
            <button className="px-4 py-[10px] text-[#A9A29D] hidden sm:inline hover:text-black">Sign in</button>
            <button className="bg-yellow text-[#5E6815] px-[18px] py-[10px] border border-[#D2E92F] rounded-md hidden sm:inline hover:bg-[#BCD02A] hover:text-black">
              Apply Now
            </button>
            {/* <Button>Apply Now</Button> */}
            <div>
              <button className="bg-yellow text-[#5E6815] px-3.5 py-2.5 rounded-sm sm:hidden border border-[#D2E92F]">
                Apply
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="sm:hidden mt-4 bg-white p-6 rounded-lg shadow-lg font-medium absolute top-full left-0 w-full border z-20">
              <ul className="flex flex-col gap-3 text-base text-[#333333]">
                <li className="py-2">Loans</li>
                <li className="py-2">Resources</li>
                <li className="py-2">Sign in</li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
