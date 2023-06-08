export function MainCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:pl-72">
      <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
        {children}
      </div>
    </div>
  );
}
