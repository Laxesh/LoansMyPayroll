import React from "react";
import Image from "next/image";
import Step1 from "@/public/LMP-Landing-P1.png";
import Step2 from "@/public/LMP-Landing-P2.png";
import Step3 from "@/public/LMP-Landing-P3.png";
import Right from "@/public/Right-2.png";
import Left from "@/public/Left-2.png";

export default function Step() {
  return (
    <>
      <div className="bg-black relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto py-12 md:mx-6 lg:mx-0 sm:py-24 flex md:flex-row flex-col justify-center z-10 items-center md:items-start">
          <div className="text-white w-[345px] md:w-[488px] z-10">
            <div className="flex flex-col">
              <p className="text-xs hidden md:block">How it works</p>
              <p className="text-xs block md:hidden">Our Product</p>
              <div className="max-w-[287px] mt-6">
                <h3 className="text-3xl md:text-5xl">Apply in just 3 easy steps.</h3>
              </div>
              <div className="mt-12 hidden md:block">
                <button className="bg-[#E6FF33] border border-[#D2E92F] text-[#5E6815] px-5 py-3 rounded-sm">
                  Apply for loan
                </button>
              </div>
            </div>
          </div>
          <div className="z-10 mt-12 sm:mx-6 md:mt-0">
            {/* Step-1 */}
            <div className="flex flex-col gap-6 z-10">
              <div className="bg-white max-w-[345px] sm:max-w-[696px] rounded-md">
                <div className="mx-10 my-10 flex flex-col gap-6">
                  <div className="flex justify-between">
                    <p className="bg-[#F5F5F4] inline-block px-2.5 py-0.5 text-[#44403C] rounded-sm">STEP 1</p>
                    <p className="text-[#57534E]">01 / 03</p>
                  </div>
                  <div className="bg-[#E7E5E4] rounded-md">
                    <Image src={Step1} alt="logo" className="rounded-md" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-2xl text-[#57534E] font-manrope">Apply on our site, select your loan</h5>
                    <p className="text-[#79716B]">
                      Fill out the application form, choose your loan amount and use the Instant Bank Verification (IBV)
                      for quick processing.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step-2 */}
              <div className="bg-white max-w-[345px] sm:max-w-[696px] rounded-md">
                <div className="mx-10 my-10 flex flex-col gap-6">
                  <div className="flex justify-between ">
                    <p className="bg-[#F5F5F4] inline-block px-2.5 py-0.5 text-[#44403C] rounded-sm">STEP 2</p>
                    <p className="text-[#57534E]">02 / 03</p>
                  </div>
                  <div className="bg-[#E7E5E4] rounded-md">
                    <Image src={Step2} alt="logo" className="rounded-md" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-2xl text-[#57534E] font-manrope">Instant approval</h5>
                    <p className="text-[#79716B]">
                      Our automated loan system will automatically approve your application and decide the amount you
                      have been approved for.
                    </p>
                    <p className="text-[#79716B]">(Average first-time customer is approved for 500$)</p>
                  </div>
                </div>
              </div>
              {/* Step-3 */}
              <div className="bg-white max-w-[345px] sm:max-w-[696px] rounded-md">
                <div className="mx-10 my-10 flex flex-col gap-6">
                  <div className="flex justify-between ">
                    <p className="bg-[#F5F5F4] inline-block px-2.5 py-0.5 text-[#44403C] rounded-sm">STEP 3</p>
                    <p className="text-[#57534E]">03 / 03</p>
                  </div>
                  <div className="bg-[#E7E5E4] rounded-md">
                    <Image src={Step3} alt="logo" className="rounded-md" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-2xl text-[#57534E] font-manrope">Funds delivered</h5>
                    <p className="text-[#79716B]">
                      When your loan is approved (normally 1 hour), the funds will be sent to you directly by INTERAC
                      e-Transfer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline absolute top-[227PX] right-[-230px] z-0">
            <Image src={Right} alt="logo" />
            <Image src={Left} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}
