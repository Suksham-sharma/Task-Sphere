import { Button } from "@/components/ui/button";
import { TrophyIcon } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <TrophyIcon className="h-6 w-6 mr-2 " />
          No. 1 Task Management Software
        </div>
        <h1 className="text-3xl md:6xl text-center text-neutral-800 mb-6">
          TaskSphere: Where Productivity Meets Simplicity!
        </h1>
        <div className="text-2xl md:5xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4  rounded-md w-fit items-center">
          Say Goodbye to Ancient Tools
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-6 max-w-xs md:max-w-3xl text-center mx-auto">
        Jump into a completely new world of task management with TaskSphere. We
        enable you to manage your tasks in a more efficient and effective way.
        Our platform is designed to help you stay organized and focused on your
        tasks.
      </div>
      <Button className="mt-6 size-lg " asChild>
        <Link href={"/signup"}>Get Started for free</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
