const CardSkeleton = () => {
  return (
    <div
      className="block xs:my-3 md:flex p-5 gap-10 w-full
                 bg-white rounded-xl shadow-md animate-pulse"
    >
      {/* LEFT BOX */}
      <div className="flex-1 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-300 rounded w-1/3" />
          <div className="h-6 bg-gray-300 rounded w-12" />
        </div>

        {/* Image */}
        <div className="relative w-44 h-44 mx-auto bg-gray-300 rounded" />

        {/* Types */}
        <div>
          <div className="h-5 bg-gray-300 rounded w-24 mb-2" />
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded-full bg-gray-300" />
            <div className="h-6 w-16 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Evolutions */}
        <div>
          <div className="h-5 bg-gray-300 rounded w-24 mb-2" />
          <div className="flex flex-col gap-2">
            <div className="h-8 bg-gray-300 rounded-full w-40" />
            <div className="h-8 bg-gray-300 rounded-full w-32" />
          </div>
        </div>
      </div>

      {/* RIGHT BOX */}
      <div className="flex-1 space-y-4">
        {/* Attacks */}
        <div>
          <div className="h-5 bg-gray-300 rounded w-24 mb-2" />
          <div className="ml-3 space-y-2">
            {/* Fast */}
            <div className="h-5 bg-gray-300 rounded w-16" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-20 bg-gray-300 rounded" />
              <div className="h-20 bg-gray-300 rounded" />
            </div>

            {/* Special */}
            <div className="h-5 bg-gray-300 rounded w-20 mt-4" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-20 bg-gray-300 rounded" />
              <div className="h-20 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
