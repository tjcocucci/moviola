export function MainCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:pl-72">
      <div className=" space-y-8  pt-20 lg:py-8 lg:px-8">{children}</div>
    </div>
  );
}
