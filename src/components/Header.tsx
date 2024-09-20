import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="px-[5%]" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">LifeDNA</span>
              <Image
                className="h-10 w-auto"
                src="/images/logo-dark.png"
                alt="LifeDNA"
                width={40}
                height={10}
              />
            </Link>
          </div>
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
              href="/account"
              className="inline-block bg-accent-color py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              My Account
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
