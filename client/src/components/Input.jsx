export function Input({ className, ...props }) {
  return (
    <input
      className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none ${className}`}
      {...props}
    />
  );
}
