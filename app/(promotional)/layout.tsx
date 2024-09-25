interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="h-full bg-slate-100">
      {/* NavBar */}
      <main className="pt-40 pb-20 bg-slate-100">{children} </main>
      {/* Footer */}
    </div>
  );
};

export default LandingLayout;
