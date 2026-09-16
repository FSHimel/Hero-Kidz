"use client";

import {
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import CartButton from "@/components/buttons/CartButton";

const ProductActions = ({ product }) => {

  

  const discountedPrice = Math.round(
    product.price - (product.price * (product.discount || 0)) / 100,
  );

  return (
    <div className="space-y-6">
      {/* Price Section */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-extrabold text-primary">
          ৳{discountedPrice.toLocaleString()}
        </span>
        {product.discount > 0 && (
          <>
            <span className="text-lg text-base-content/50 line-through">
              ৳{product.price.toLocaleString()}
            </span>
            <span className="badge badge-secondary badge-outline font-semibold">
              {product.discount}% OFF
            </span>
          </>
        )}
      </div>

      {/* Quantity Selector & Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch">
          

        <div className="flex-1">
          <CartButton product={product}></CartButton>
        </div>
      </div>

      {/* Value Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-base-200">
        <div className="flex items-center gap-2 text-xs text-base-content/70">
          <Truck size={18} className="text-primary shrink-0" />
          <span>Fast Delivery Nationwide</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-base-content/70">
          <ShieldCheck size={18} className="text-primary shrink-0" />
          <span>100% Non-toxic & Safe</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-base-content/70">
          <RotateCcw size={18} className="text-primary shrink-0" />
          <span>7 Days Easy Return</span>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
