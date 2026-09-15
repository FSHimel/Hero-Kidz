"use client";
import { handleAddToCart } from "@/actions/server/cart";
import { ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const router = useRouter();
  const path = usePathname();
  const handleCart = async () => {
    setIsLoading(true);
    if (session.status == "authenticated") {
      const result = await handleAddToCart({ product, inc: true });
      if (result.success) {
        Swal.fire("Success", `${product.title} added successfully`, "success");
      } else {
        Swal.fire("Oops", "Something wrong happended", "error");
      }
      setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setIsLoading(false);
    }
  };
  return (
    <button
      disabled={session.status == "loading" || isLoading}
      onClick={handleCart}
      className="btn btn-primary gap-2 w-full"
    >
      <ShoppingCart size={18} />
      Add to Cart
    </button>
  );
};

export default CartButton;
