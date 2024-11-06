"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const Error = ({ error, reset }) => {
  return (
    <div className="flex-1 gap-8 flex p-8 mx-4 items-center rounded-2xl flex-col justify-center border-2 border-dashed border-red m-4 leading-normal">
      <h2 className="text-header text-center">{error.message}</h2>
      <div className="gap-6 grid md:grid-cols-2 grid-cols-1">
        <Button onClick={() => reset()}>Try again</Button>
        <Button>
          <Link href="/" className="px-3">
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Error;
