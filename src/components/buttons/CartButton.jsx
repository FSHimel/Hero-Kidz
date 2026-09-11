"use client";
import { ShoppingCart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const CartButton = ({ product }) => {
  const isLogin = true;
  const router = useRouter();
  const path = usePathname();
  const handleCart = () => {
    if (isLogin) {
      alert(`${product._id}`);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };
  return (
    <button onClick={handleCart} className="btn btn-primary gap-2 w-full">
      <ShoppingCart size={18} />
      Add to Cart
    </button>
  );
};

export default CartButton;
