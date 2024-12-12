import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-black md:border-t border-[#44403C] ">
        <footer className="max-w-[1440px] mx-auto px-6  md:py-8 text-white flex flex-col md:flex-row justify-center md:justify-between">
          <div className="hidden md:inline">
            <p className="text-sm text-[#A9A29D]"> © 2024 LoansMyPayroll. All rights reserved.</p>
          </div>
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-3 text-sm">
              <li className="hover:text-[#BCD02A]">
                <Link href={"/apply"}>Apply</Link>
              </li>
              <li className="hover:text-[#BCD02A]">
                <Link href={"/signin"}>Sign in</Link>
              </li>
              <li className="hover:text-[#BCD02A]">
                <Link href={"/blog"}>Blog</Link>
              </li>
              <li className="hover:text-[#BCD02A]">
                <Link href={"/support"}>Support</Link>
              </li>
              <li className="hover:text-[#BCD02A]">
                <Link href={"/faq"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 border-t border-[#44403C] md:border-0">
            <ul className="flex flex-col md:flex-row gap-4 text-[#A9A29D] text-sm mt-4 md:mt-0">
              <li className="hover:text-[#BCD02A]">
                <Link href={"/terms"}> Terms & Conditions</Link>
              </li>
              <li className="hover:text-[#BCD02A]">
                <Link href={"/terms"}>Privacy Policy</Link>
              </li>
              <li className="hover:text-[#BCD02A]">
                <Link href={"/terms"}>Français</Link>
              </li>
            </ul>
          </div>
          <div className="inline md:hidden items-center mb-8">
            <p className="text-sm text-[#A9A29D] "> © 2024 LoansMyPayroll. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
