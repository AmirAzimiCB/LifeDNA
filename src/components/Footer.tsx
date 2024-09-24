import Link from "next/link";
import {
  DnaIcon,
  ArrowLeftIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "./Icons";
import { Text } from "./atoms";

export default function Footer() {
  return (
    <footer className="bg-[#383B42] text-white p-6 lg:py-10 footer">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start w-full">
            <div className="flex items-center mb-4">
              <DnaIcon className="w-8 h-8" />
              <span className="text-2xl font-bold ml-2">LifeDNA</span>
            </div>
            <Text className="mb-4 text-center md:text-left text-white">
              Stay Up To Date On The Latest From LifeDNA
            </Text>
            <div className="flex items-center w-full sm:w-[350px] border-b border-white pb-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent w-full sm:w-[350px] border-none text-white placeholder-white focus:ring-0"
                style={{ backgroundColor: "transparent" }}
              />
              <button className="text-white">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden lg:flex space-x-4">
              <FacebookIcon className="w-6 h-6 text-white" />
              <TwitterIcon className="w-6 h-6 text-white" />
              <InstagramIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start gap-[42px] md:space-x-16">
            <div className="mt-8 md:mt-0 flex flex-col items-center justify-center gap-3">
              <h3 className="font-bold text-white">Menu</h3>
              <ul className="flex flex-col gap-3 items-center justify-center">
                <li>
                  <Link href="#" className="text-white max-lg:text-xs">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white max-lg:text-xs">
                    DNA Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white max-lg:text-xs">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white max-lg:text-xs">
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col items-center justify-center gap-3">
              <h3 className="mb-4 font-bold text-white">Support</h3>
              <ul className="flex flex-col gap-3 items-center justify-center">
                <li>
                  <Link href="#" className="text-white max-lg:text-xs">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white max-lg:text-xs">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white max-lg:text-xs">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white max-lg:text-xs">
                    Data Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white max-lg:text-xs">
                    Updates Page
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex lg:hidden gap-4">
              <FacebookIcon className="w-6 h-6 text-white" />
              <TwitterIcon className="w-6 h-6 text-white" />
              <InstagramIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 text-center">
          <p className="text-white text-[10px] lg:text-base leading-[150%]">
            2024 LifeDNA, Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
