import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Navbar } from "./_components/navbar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="h-full bg-black/[0.96] antialiased ">
      <Navbar />
      <BackgroundBeamsWithCollision>
        <main className="pt-40 z-10">{children} </main>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default LandingLayout;
