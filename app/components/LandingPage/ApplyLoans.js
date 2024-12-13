import Image from "next/image";
import Star from "@/public/Star.svg";
import StarGroup from "@/public/Star-ratings.svg";
import Pic from "@/public/image-24.png";
import bg1 from "@/public/backdrop-2-1.png";
import bg2 from "@/public/backdrop-2-2.png";
// import bg3 from "@/public/backdrop-3.svg";
import Balck from "@/public/LMP-V1.png";
import left from "@/public/Left-a.png";
import right from "@/public/Right-a.png";
import { motion } from "framer-motion";

export default function ApplyLoans() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto sm:py-24 py-8 ">
        <div className="lg:px-28 px-6 flex flex-col items-center relative">
          <motion.div
            className="flex flex-col sm:flex-row gap-x-6 items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex gap-x-2">
              <Image src={Star} alt="logo" />
              <span>Trustpilot</span>
              <Image src={StarGroup} alt="logo" />
            </div>
            <p>Excellent 4.7 Stars • 451 reviews </p>
          </motion.div>
          <motion.h1
            className="max-w-[714px] text-center font-manrope text-[#44403C] sm:text-7xl text-5xl font-normal sm:pt-6 pt-2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            Fast Short Term Payday <span className="text-[#BCD02A] font-serif italic">Loans</span> Online
          </motion.h1>
          <motion.p
            className="max-w-[486px] text-center text-[#57534E] pt-6 text-xl font-normal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            Fast cash when you need it most. Apply online, get approved instantly.
          </motion.p>
          <div className="hidden lg:inline-block">
            <motion.img
              src={right.src}
              alt="logo"
              className="absolute top-[-22px] right-[326px] w-6 h-[35px]"
              initial={{ opacity: 1, scale: 4, x: -400, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src={left.src}
              alt="logo"
              className="absolute top-[122PX] left-[305PX] w-6 h-[35px]"
              initial={{ opacity: 1, scale: 4, x: 400, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        <motion.div
          className="flex flex-col items-center m-6 z-20"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="bg-[#E6FF33] rounded-md text-base px-[18px] py-2.5 text-[#5E6815] border border-[#D2E92F] w-full sm:w-auto hover:bg-[#bdd02a] hover:text-black">
            Apply Now
          </button>
        </motion.div>
        <motion.div
          className="flex flex-row gap-8 items-center justify-center overflow-hidden lg:mt-12 md:mx-6"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hidden relative md:inline-block">
            <Image src={Pic} alt="logo" className="rounded-lg" />
            <Image src={bg1} alt="logo" className="absolute top-[138px] left-0" />
            <Image src={bg2} alt="logo" className="absolute right-0 top-[283px]" />
            <Image src={bg1} alt="logo" className="absolute top-[-142px] right-0" />
            <div className="absolute bottom-0 left-8 bg-white p-4 rounded-t-2xl shadow-lg max-w-[378px] border border-b-0 border-[#D7D3D0]">
              <div className="flex mb-3 justify-between">
                <p className="text-[#79716B] font-normal text-sm">Loan details</p>
                <p className="text-[#067647] bg-[#ECFDF3] font-normal text-xs px-2 py-1">Application Approved</p>
              </div>
              <div className="flex flex-col gap-y-2 border border-[#E7E5E4] rounded-sm mb-3 p-2">
                <p className="text-[#57534E] text-sm">Loan Amount</p>
                <h3 className="text-[#44403C] text-2xl">$450.00 CAD</h3>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between mt-3 mx-2 text-[#44403C]">
                  <p className="">Loan Term</p>
                  <h1 className="">2 Payments</h1>
                </div>
                <div className="flex justify-between my-3 mx-2 text-[#44403C]">
                  <p className="">Loan End Date</p>
                  <p className="">December 24th, 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image src={Balck} alt="logo" className="rounded-lg" />
          </div>
        </motion.div>
      </div>
    </>
  );
}
