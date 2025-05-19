export function Input({ className = "", ...props }) {
  return (
    <input
      data-testid="search-field"
      className={`rounded-3xl px-4 py-2 shadow-md hover:inset-shadow-xs hover:shadow-sm  bg-white ${className}`}
      {...props}
    />
  );
}
