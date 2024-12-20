"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { MobileNavBar } from "./organism/header";

export default function Header({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative">
      <header
        className={cn(
          "bg-white shadow-sm",
          open ? "" : "border-b-[0.75px] border-[#CACACA]"
        )}
      >
        <nav className="px-[5%]" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="sr-only">LifeDNA</span>
                <Image
                  className="w-[150px] h-auto"
                  src="/images/logo-dark.png"
                  alt="LifeDNA"
                  width={2500}
                  height={1500}
                />
              </Link>
            </div>
            <div className="flex items-center justify-center lg:gap-4 gap-3">
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/how-it-works"
                  className="text-base font-medium hover:text-gray-900"
                >
                  How It Works
                </Link>
                <Link
                  href="/reports"
                  className="text-base font-medium hover:text-gray-900"
                >
                  Reports
                </Link>
                <Link
                  href="/plans"
                  className="text-base font-medium hover:text-gray-900"
                >
                  Plans
                </Link>
                <Link
                  href="/products"
                  className="text-base font-medium hover:text-gray-900"
                >
                  Shop
                </Link>
                <Link
                  href="https://my.lifedna.com/"
                  className="inline-block bg-accent-color py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                >
                  My Account
                </Link>
              </div>
              {children}
              <div onClick={() => setOpen(!open)} className="lg:hidden">
                {open ? <X /> : <Menu />}
              </div>
            </div>
          </div>
        </nav>
      </header>
      {open ? <MobileNavBar setOpen={setOpen} /> : null}
    </section>
  );
}
