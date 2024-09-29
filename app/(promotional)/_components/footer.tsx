import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 bg-slate-100 shadow-md z-50">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <div className="text-md font-semibold text-gray-700">{""}</div>

        <div className="flex space-x-6 items-center">
          <Button
            size={"sm"}
            variant={"ghost"}
            className="flex items-center space-x-2 hover:text-blue-500"
          >
            <span>Privacy Policy</span>
          </Button>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="flex items-center space-x-2 hover:text-blue-500"
          >
            <span>Terms of Service</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
