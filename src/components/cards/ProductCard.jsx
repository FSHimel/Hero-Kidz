// "use client";
import { Star, ShoppingCart, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { title, bangla, image, ratings, price, sold } = product;

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
      <div>
        {/* Image Container */}
        <div className="aspect-square relative overflow-hidden bg-base-200">
          <Image
            width={300}
            height={300}
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* English title */}
          <h2 className="line-clamp-1 text-lg font-bold text-base-content">
            {title}
          </h2>

          {/* Bangla title */}
          <p className="mt-1 line-clamp-1 text-sm text-base-content/60">
            {bangla}
          </p>

          {/* Rating & Sold */}
          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-warning text-warning" />
              <span className="font-medium text-base-content">{ratings}</span>
            </div>

            <span className="text-base-content/60">{sold} sold</span>
          </div>

          {/* Price */}
          <div className="mt-3">
            <span className="text-xl font-bold text-base-content">
              ৳{price?.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 pt-0 grid grid-cols-2 gap-2 mt-2">
        <Link
          href={`/products/${product._id}`}
          className="btn btn-outline btn-sm gap-1"
        >
          <Eye size={16} />
          Details
        </Link>

        <button className="btn btn-primary btn-sm gap-1">
          <ShoppingCart size={16} />
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
