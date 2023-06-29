export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center bg-gray-900">{children}</div>;
}
