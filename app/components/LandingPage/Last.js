import React from "react";
import Image from "next/image";
import Left from "@/public/left-y-2.png";
import Right from "@/public/right-y-2.png";

export default function Last() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-[1440px] py-12 px-6  md:px-28 md:py-24">
        <div className="bg-[#EAFF72] flex md:flex-row flex-col items-start md:items-end justify-between p-8 h-[335px] rounded-md relative overflow-hidden">
          <div className="z-10">
            <h1 className="text-3xl md:text-4xl text-[#44403C] font-manrope">
              Get the Funds You Need Today, hassle free.
            </h1>
            <p className="text-lg text-[#57534E] md:mt-4">Work with a loan company that cares.</p>
          </div>
          <button className="bg-white text-[#44403C] px-4 py-[10px] rounded-sm z-10 border border-[#E7E5E4] mt-[84px] hover:bg-black hover:text-white">
            Apply for loan
          </button>
          <div className="absolute inset-0 z-0">
            <div className="flex absolute sm:top-0 sm:left-0">
              <Image src={Right} alt="logo" />
            </div>
            <div className="flex absolute sm:bottom-[-81px] sm:right-0 -z-10">
              <Image src={Left} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
