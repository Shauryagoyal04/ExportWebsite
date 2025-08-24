export function Card({ className, children }) {
  return (
    <div className={`rounded-2xl border bg-white shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardContent({ children }) {
  return <div className="text-sm text-gray-600">{children}</div>;
}
