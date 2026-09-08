const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
      {/* Image skeleton */}
      <div className="aspect-square animate-pulse bg-base-300" />

      <div className="space-y-3 p-4">
        {/* Title */}
        <div className="h-5 w-4/5 animate-pulse rounded bg-base-300" />

        {/* Bangla title */}
        <div className="h-4 w-3/5 animate-pulse rounded bg-base-300" />

        {/* Rating + sold */}
        <div className="flex justify-between">
          <div className="h-4 w-16 animate-pulse rounded bg-base-300" />
          <div className="h-4 w-20 animate-pulse rounded bg-base-300" />
        </div>

        {/* Price */}
        <div className="h-6 w-24 animate-pulse rounded bg-base-300" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
