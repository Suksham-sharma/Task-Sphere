import { Button } from "@/components/ui/button";
import { TrophyIcon } from "lucide-react";
import Link from "next/link";
import { Poppins, Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

const headingFont = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const LandingPage = () => {
  return (
    <div>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="flex items-center justify-center flex-col">
        <div
          className={cn(
            "flex items-center justify-center flex-col font-semibold",
            headingFont.className
          )}
        >
          <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
            <TrophyIcon className="h-6 w-6 mr-2 " />
            No. 1 Task Management Software
          </div>
          <h1 className=" mt-2 text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            TaskSphere
          </h1>
          <h1 className=" mt-4 text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Productivity Meets Simplicity!
          </h1>
        </div>
        <div
          className={cn(
            "text-sm md:text-lg text-neutral-400 mt-[4rem] max-w-xs md:max-w-3xl text-center mx-auto",
            textFont.className
          )}
        >
          Jump into a completely new world of task management with TaskSphere.
          We enable you to manage your tasks in a more efficient and effective
          way. Our platform is designed to help you stay organized and focused
          on your tasks.
        </div>
        <Button
          className="inline-flex h-12 animate-shimmer items-center justify-center mt-8
        rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
         bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2
          focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-white ease-in-out"
        >
          <div className="flex items-center space-x-2">
            <Link href={"/signup"} className="flex items-center space-x-2">
              <span className="relative z-10 md:text-xl text-lg text-inherit">
                Get Started for free
              </span>
            </Link>
            <Image
              src="/star.svg"
              alt="star"
              width={20}
              height={20}
              className="animate-pulse"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
