import Rightb from "@/public/Right-b.png";

import Right from "@/public/Right-02.png";
import Left from "@/public/Left-02.png";
import Image from "next/image";
import Phone from "@/public/Step-2-1.png";

export default function LoanManagement() {
  return (
    <>
      <div className="bg-[#F5F5F4] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex justify-center py-12 md:py-40 px-6 md:px-36">
          <div className="z-10">
            <h3 className="text-4xl md:text-5xl font-manrope z-10 flex flex-wrap justify-center max-w-[345px] md:max-w-[598px] text-center">
              Get the loan that’s <span className="text-[#BCD02A] font-serif italic px-2">worth</span> making the
              switch.
            </h3>
          </div>
          <div className="absolute flex top-[33px] left-[-81px] md:top-[61px] lg:left-[236px] sm:left-[150px] md:bottom-[-205px] z-0 ">
            <Image src={Right} alt="logo" className="" />
            <Image src={Left} alt="logo" className="hidden sm:inline" />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto py-6 sm:py-24 sm:mx-16 flex flex-col sm:items-center">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="mx-6 sm:mx-0">
            <Image src={Phone} alt="logo" className="rounded-[10px]" />
          </div>
          <div className="bg-black text-white relative z-10 flex flex-col gap-6 items-center rounded-[10px] justify-center overflow-hidden mx-6 sm:mx-0">
            <div className="flex flex-col gap-3 z-10 sm:mx-16 sm:max-w-[468px] my-8 mx-6">
              <div className="text-xs">
                <p className="text-xs">Our Features</p>
              </div>
              <div className="">
                <h3 className="text-3xl sm:text-5xl font-manrope">Effortless Loan Management</h3>
              </div>
              <div className="mt-6">
                <p className="text-base">
                  Enjoy the confidence of automated payments—eliminating late fees and simplifying your financial
                  routine.
                </p>
              </div>
              <div className="mt-12">
                <button className="bg-white text-[#44403C] px-[18px] sm:px-5 py-3 text-base rounded-sm">
                  Apply for loan
                </button>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 z-0 ">
              <Image src={Rightb} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
