import Image from "next/image";
import cal from "@/public/Icon-c.svg";
import eye from "@/public/eye-off.svg";
import Product from "@/public/Product.png";
import Chart from "@/public/bar-line-chart.svg";
import Fast from "@/public/zap-fast.svg";

const Data = ({ icon, title, desc }) => {
  return (
    <div className="max-w-[305px] md:max-w-[344px] sm:max-w-full rounded-[8px] bg-white p-4 flex flex-col gap-16">
      <div className="flex p-3 max-w-12 bg-[#F7FFD2] items-center justify-center rounded-[6px] ">
        <Image src={icon} alt="logo" className="" />
      </div>
      <div className="">
        <p className="text-lg font-medium text-[#57534E]">{title}</p>
        <p className="text-[#79716B]">{desc}</p>
      </div>
    </div>
  );
};

export default function LoansPayroll() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto py-12 sm:py-24">
        <div className="pb-16">
          <h2 className="font-manrope text-center text-4xl sm:text-5xl text-[#44403C]">
            See why so many<span className="text-[#BCD02A] font-serif italic px-2">switched </span> to LoansMyPayroll
          </h2>
        </div>
        <div className="flex flex-col md:flex-row max-w-[1216px] items-center justify-center gap-6 mx-6 lg:mx-28 sm:mx-20">
          <div className="w-full  md:w-1/3 p-3 border border-[#E7E5E4] rounded-2xl">
            <div className="flex flex-col p-2 rounded-[10px] bg-[#FAFAF9] gap-3">
              <Data
                icon={cal}
                title="Monthly notifications"
                desc="Monthly payment email notifications reminding you of when to pay."
              />
              <Data
                icon={eye}
                title="Your data stays private"
                desc="Your personal information will never be accessible to us."
              />
            </div>
          </div>
          <div className="flex flex-col relative order-first md:order-none items-center justify-center h-[496px] mx-3 sm:mx-0 w-full md:w-1/3 sm:w-[400px]">
            <Image src={Product} alt="logo" className="rounded-2xl" fill />
            <button className="absolute bottom-8 bg-[#E6FF33] text-[#5E6815] border border-[#D2E92F] w-[281px] lg:w-[336px] md:w-[255px] py-3 rounded-sm hover:bg-[#bdd02a] hover:text-black">
              Apply for a loan today
            </button>
          </div>
          <div className="w-full md:w-1/3 p-3 border border-[#E7E5E4] rounded-2xl">
            <div className="flex flex-col p-2 rounded-[10px] bg-[#FAFAF9] gap-3">
              <Data
                icon={Chart}
                title="Status reports"
                desc="Stay on the right track with our monthly status reports of your loan health."
              />
              <Data
                icon={Fast}
                title="Quick customer support"
                desc="Enjoy the convenience of 24/7 live support ready to assist your needs."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
