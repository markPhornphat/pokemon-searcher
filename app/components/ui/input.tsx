export function Input({ className = "", ...props }) {
  return (
    <input
      className={`rounded-3xl px-4 py-2 shadow-sm bg-white ${className}`}
      {...props}
    />
  );
}
