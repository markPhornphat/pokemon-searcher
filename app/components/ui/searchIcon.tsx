const SearchIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="11" r="20" />
      <line x1="16" y1="16" x2="21" y2="21" />
    </svg>
  );
};

export default SearchIcon;
