const ProductDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-base-100 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Grid: Gallery & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Skeleton */}
        <div className="aspect-square w-full rounded-2xl skeleton"></div>

        {/* Info & Buying Actions Skeleton */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* English Title */}
            <div className="h-8 w-3/4 skeleton rounded-md"></div>
            {/* Bangla Title */}
            <div className="h-5 w-1/2 skeleton rounded-md"></div>

            {/* Ratings & Sold Stats */}
            <div className="flex items-center gap-4 pt-2">
              <div className="h-6 w-28 skeleton rounded-full"></div>
              <div className="h-6 w-24 skeleton rounded-md"></div>
            </div>
          </div>

          {/* Key Highlights Box */}
          <div className="bg-base-200/50 rounded-xl p-4 space-y-3">
            <div className="h-3 w-24 skeleton rounded"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="h-4 w-full skeleton rounded"></div>
              <div className="h-4 w-full skeleton rounded"></div>
              <div className="h-4 w-full skeleton rounded"></div>
              <div className="h-4 w-full skeleton rounded"></div>
            </div>
          </div>

          {/* Price & Actions Section */}
          <div className="space-y-6">
            {/* Price */}
            <div className="flex items-center gap-3">
              <div className="h-9 w-32 skeleton rounded-md"></div>
              <div className="h-6 w-20 skeleton rounded-md"></div>
            </div>

            {/* Quantity & Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <div className="h-10 w-28 skeleton rounded-lg"></div>
              <div className="h-10 flex-1 skeleton rounded-lg"></div>
              <div className="h-10 w-10 skeleton rounded-lg"></div>
            </div>

            {/* Service Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-base-200">
              <div className="h-4 w-full skeleton rounded"></div>
              <div className="h-4 w-full skeleton rounded"></div>
              <div className="h-4 w-full skeleton rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Description & Q&A */}
      <div className="mt-12 pt-8 border-t border-base-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description Skeleton */}
          <div className="lg:col-span-2 space-y-4">
            <div className="h-7 w-48 skeleton rounded-md"></div>
            <div className="space-y-2 pt-2">
              <div className="h-4 w-full skeleton rounded"></div>
              <div className="h-4 w-full skeleton rounded"></div>
              <div className="h-4 w-4/5 skeleton rounded"></div>
              <div className="h-4 w-5/6 skeleton rounded"></div>
              <div className="h-4 w-2/3 skeleton rounded"></div>
            </div>
          </div>

          {/* Q&A Accordion Skeleton */}
          <div className="space-y-4">
            <div className="h-7 w-40 skeleton rounded-md"></div>
            <div className="space-y-3">
              <div className="h-14 w-full skeleton rounded-xl"></div>
              <div className="h-14 w-full skeleton rounded-xl"></div>
              <div className="h-14 w-full skeleton rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;