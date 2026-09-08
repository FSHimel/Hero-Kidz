"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

const ProductActions = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

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
        <div className="join border border-base-300 rounded-lg w-fit">
          <button
            className="join-item btn btn-ghost btn-sm px-4"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="join-item btn btn-ghost btn-sm no-animation cursor-default font-semibold px-4">
            {quantity}
          </span>
          <button
            className="join-item btn btn-ghost btn-sm px-4"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <button className="btn btn-primary flex-1 gap-2">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        <button className="btn btn-outline btn-square">
          <Heart size={18} />
        </button>
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
