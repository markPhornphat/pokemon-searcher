export function Button({ className = "", ...props }) {
  return (
    <button
      className={`w-10 h-10 rounded-full relative overflow-hidden border-[3px] border-black shadow-lg ${className}`}
      {...props}
      data-testid="search-button"
      aria-label="Search"
      title="Search Pokémon"
    >
      {/* Top red half */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600"></div>

      {/* Bottom white half */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

      {/* Middle line */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 bg-black border-[2px]" />

      {/* Middle white ring */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white border-[3px] border-black rounded-full -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"></div>

      {/* 45 degree line from center of circle */}
      <div className="absolute top-2/3 left-1/2 w-3 h-0.5  border-[2px] border-black rotate-45"></div>
    </button>
  );
}
