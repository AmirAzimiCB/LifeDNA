import Link from "next/link";
export function MobileNavBar() {
  return (
    <section className=" bg-white min-h-[332px] w-full p-8">
      <div className="flex flex-col justify-center items-center gap-8">
        <Link
          href="/how-it-works"
          className="text-sm font-medium hover:text-gray-900"
        >
          How It Works
        </Link>
        <Link
          href="/reports"
          className="text-sm font-medium hover:text-gray-900"
        >
          Reports
        </Link>
        <Link href="/plans" className="text-sm font-medium hover:text-gray-900">
          Plans
        </Link>
        <Link
          href="/account"
          className="inline-block w-full text-center bg-accent-color py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white hover:bg-opacity-75"
        >
          My Account
        </Link>
      </div>
    </section>
  );
}
