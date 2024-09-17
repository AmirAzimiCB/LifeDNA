import Link from "next/link";

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
            <p className="mb-4 text-center md:text-left">
              Stay Up To Date On The Latest From LifeDNA
            </p>
            <div className="flex items-center border-b border-white pb-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-none text-white placeholder-white focus:ring-0"
              />
              <button className="text-white">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex space-x-4">
              <FacebookIcon className="w-6 h-6" />
              <TwitterIcon className="w-6 h-6" />
              <InstagramIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-16">
            <div className="mt-8 md:mt-0">
              <h3 className="mb-4 font-bold">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">How It Works</Link>
                </li>
                <li>
                  <Link href="#">DNA Plans</Link>
                </li>
                <li>
                  <Link href="#">Blogs</Link>
                </li>
                <li>
                  <Link href="#">Research</Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="mb-4 font-bold">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Data Security</Link>
                </li>
                <li>
                  <Link href="#">Updates Page</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 text-center">
          <p>2024 LifeDNA, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function DnaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="m17 6-2.5-2.5" />
      <path d="m14 8-1-1" />
      <path d="m7 18 2.5 2.5" />
      <path d="m3.5 14.5.5.5" />
      <path d="m20 9 .5.5" />
      <path d="m6.5 12.5 1 1" />
      <path d="m16.5 10.5 1 1" />
      <path d="m10 16 1.5 1.5" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
