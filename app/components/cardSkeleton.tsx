const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-xs flex flex-col p-5 gap-4 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="h-6 w-24 bg-gray-200 rounded" />
        <div className="h-6 w-10 bg-gray-300 rounded-full" />
      </div>

      {/* Image */}
      <div className="w-44 h-44 bg-gray-200 rounded mx-auto" />

      {/* Types */}
      <div>
        <div className="h-5 w-20 bg-gray-200 rounded mb-2" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-200 rounded-2xl" />
          <div className="h-6 w-16 bg-gray-300 rounded-2xl" />
        </div>
      </div>

      {/* Evolutions */}
      <div>
        <div className="h-5 w-24 bg-gray-200 rounded mb-2" />
        <div className="space-y-2">
          <div className="h-6 w-28 bg-gray-300 rounded-full" />
          <div className="h-6 w-28 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Stats */}
      <div>
        <div className="h-5 w-20 bg-gray-200 rounded mb-2" />
        <div className="space-y-1">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-4 w-36 bg-gray-300 rounded" />
          <div className="h-4 w-40 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
