import Link from "next/link";
import {
  DnaIcon,
  ArrowLeftIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#383B42] text-white py-10 footer">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <DnaIcon className="w-8 h-8" />
              <span className="text-2xl font-bold ml-2">LifeDNA</span>
            </div>
            <p className="mb-4 text-center md:text-left text-white">
              Stay Up To Date On The Latest From LifeDNA
            </p>
            <div className="flex items-center w-[350px] border-b border-white pb-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent w-[350px] border-none text-white placeholder-white focus:ring-0"
                style={{ backgroundColor: "transparent" }}
              />
              <button className="text-white">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex space-x-4">
              <FacebookIcon className="w-6 h-6 text-white" />
              <TwitterIcon className="w-6 h-6 text-white" />
              <InstagramIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-16">
            <div className="mt-8 md:mt-0">
              <h3 className="mb-4 font-bold text-white">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    DNA Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="mb-4 font-bold text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Data Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Updates Page
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 text-center">
          <p className="text-white">2024 LifeDNA, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
