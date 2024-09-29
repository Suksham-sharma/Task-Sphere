import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { Syne } from "next/font/google";

const logoFont = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={"/logo.svg"} alt="Logo" width={30} height={30} />
        <div
          className={cn(
            "text-lg text-neutral-700 pb-1 mt-1 font-semibold",
            logoFont.className
          )}
        >
          TaskSphere
        </div>
      </div>
    </Link>
  );
};
