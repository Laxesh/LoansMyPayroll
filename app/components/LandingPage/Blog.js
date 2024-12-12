import Image from "next/image";
import BlogImage from "@/public/Blog-image.png";

export default function Blog() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto py-10 px-6 lg:px-28">
        <div className="flex justify-between">
          <h4 className="text-3xl sm:text-5xl text-[#44403C] inline-block">Read our other blogs</h4>
          <button className="bg-[#E6FF33] font-manrope text-[#5E6815] border border-[#D2E92F] px-4 py-[10px] rounded-md hidden md:inline hover:bg-[#bdd02a] hover:text-black">
            View all blog posts
          </button>
        </div>

        <div className="flex md:justify-center gap-2 md:gap-8 mt-12 overflow-x-auto">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex flex-col items-center min-w-[323px]">
              <div className="p-2">
                <Image src={BlogImage} alt="logo" />
              </div>
              <div className="p-6 gap-8">
                <div className="bg-[#F5F5F4] inline-block rounded-sm">
                  <p className="px-2 py-0.5 text-[#44403C] text-xs">Budgeting Tips</p>
                </div>
                <div className="flex flex-col gap-2 mt-8">
                  <div>
                    <h6 className="text-2xl text-[#44403C] font-manrope">
                      5 Simple Budgeting Hacks to Stretch Your Payday Loan
                    </h6>
                  </div>
                  <div>
                    <p className="text-[#44403C] text-sm">
                      7 min read <span className="text-[#79716B] text-sm">· Sept 24th, 2024 </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="inline-block md:hidden mt-12 px-6">
          <button className="bg-[#E6FF33] text-[#5E6815] border border-[#D2E92F] px-4 py-[10px] rounded-md inline md:hidden">
            View all blog posts
          </button>
        </div>
      </div>
    </>
  );
}
