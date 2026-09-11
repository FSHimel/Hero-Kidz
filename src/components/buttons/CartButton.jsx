"use client";
import { ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const CartButton = ({ product }) => {
  const session = useSession();
  const router = useRouter();
  const path = usePathname();
  const handleCart = () => {
    if (session.status == "authenticated") {
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
