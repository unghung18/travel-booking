const BgHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
};

export default BgHeader;
