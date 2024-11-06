import Link from "next/link";
import {
  ArrowLeftIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "./Icons";
import { Text } from "./atoms";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#383B42] text-white p-6 lg:py-10 footer">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="flex items-center mb-4">
              <Image
                src={"/images/logo-light.png"}
                alt="footerlogo"
                width={2500}
                height={1500}
                className="w-[150px] h-auto"
              />
            </div>
            <Text className="mb-6 mt-8 text-center lg:text-left text-white">
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
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-[42px] lg:space-x-16">
            <div className="mt-8 md:mt-0 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-3">
              <h3 className="font-bold text-white">Menu</h3>
              <ul className="flex flex-col gap-3 items-center lg:items-start max-lg:justify-center">
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plans"
                    target="_self"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
                    DNA Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reports"
                    target="_self"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
                    Reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    target="_self"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://my.lifedna.com/"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col max-lg:items-center max-lg:justify-center gap-3">
              <h3 className="font-bold text-white">Support</h3>
              <ul className="flex flex-col gap-3 max-lg:items-center max-lg:justify-center">
                <li>
                  <Link
                    href="/contact"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/data-security"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
                    Data Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/updates"
                    className="text-white max-lg:text-xs whitespace-nowrap"
                  >
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
