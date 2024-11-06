import Link from "next/link";
export function MobileNavBar({
  setOpen,
}: {
  setOpen: (value: boolean) => void;
}) {
  return (
    <section className="bg-white min-h-screen w-full p-8 border-b-[0.75px]border-[#CACACA]">
      <div className="flex flex-col justify-center items-center gap-8">
        <Link
          href="/how-it-works"
          onClick={() => setOpen(false)}
          className="text-sm font-medium hover:text-gray-900"
        >
          How It Works
        </Link>
        <Link
          href="/reports"
          onClick={() => setOpen(false)}
          className="text-sm font-medium hover:text-gray-900"
        >
          Reports
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="/plans"
          className="text-sm font-medium hover:text-gray-900"
        >
          Plans
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="/products"
          className="text-sm font-medium hover:text-gray-900"
        >
          Shop
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="https://my.lifedna.com/"
          className="inline-block w-full text-center bg-accent-color py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white hover:bg-opacity-75"
        >
          My Account
        </Link>
      </div>
    </section>
  );
}
