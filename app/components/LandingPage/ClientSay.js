import Backgirl from "@/public/image-22.png";
import Image from "next/image";

export default function ClientSay() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto py-24 flex flex-col">
        <div className="flex flex-col justify-center mx-6 lg:mx-20">
          <div className="flex justify-between mx-0 md:mx-8">
            <h2 className="text-4xl font-manrope md:text-5xl text-[#44403C] w-auto md:max-w-[772px]">
              Don’t just take our <span className="text-[#BCD02A] font-serif italic">word</span> for it, see what our
              clients have to say.
            </h2>
            <div className="w-1/2 relative hidden md:inline">
              <button className="absolute bottom-0 right-0 bg-[#E6FF33] px-4 py-[10px] rounded-md text-[#5E6815]">
                View all reviews
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 mx-6 flex flex-col gap-8 items-center lg:mx-28">
          <div className="lg:max-w-[1216px] flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-auto md:w-2/3 md:max-w-[743px] p-10 border border-[#E7E5E4] rounded-[10px]">
              <p className="text-lg text-[#44403C]">
                “Great, quick, efficient, professional, very friendly service. I had my loan from application to the
                funds in my bank account within less then 24 hours, and that was with me applying after 6PM on September
                1st, 2024 and getting the funds before noon the next day, which by the way was Labour Day. Great
                service. I highly recommend giving them a try.”
              </p>
              <div className="mt-12 text-base">
                <p className="text-[#57534E] font-semibold">Lisa Renstrom</p>
                <p className="text-[#79716B]">Review from Trustpilot</p>
              </div>
            </div>
            <Image src={Backgirl} alt="logo" className="rounded-[10px] md:max-w-[441px]  lg:max-w-[441px]" />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-auto md:max-w-[743px] p-10 border border-[#E7E5E4] rounded-md">
              <p className="text-pretty text-lg text-[#44403C]">
                “Was a fast approval and after getting approved it only took 30 min to get the money I’m very happy”
              </p>
              <div className="mt-12 text-base">
                <p className="text-[#57534E] font-semibold">Robert Andrews</p>
                <p className="text-[#79716B]">Review from Trustpilot</p>
              </div>
            </div>

            <div className="w-full md:max-w-[441px] border border-[#E7E5E4] rounded-md p-10 ">
              <p className="text-pretty text-lg text-[#44403C]">
                “Loan was less than requested but the service was fast and seemless.”
              </p>
              <div className="mt-12 text-base">
                <p className="text-[#57534E] font-semibold">Peter Giambatt</p>
                <p className="text-[#79716B]">Review from Trustpilot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
