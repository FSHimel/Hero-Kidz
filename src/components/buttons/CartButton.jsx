"use client";
import { ShoppingCart } from "lucide-react";
import React from "react";

const CartButton = ({product}) => {
    const handleCart = ()=>{
        console.log(product)
    }
  return (
    <button onClick={handleCart} className="btn btn-primary gap-2 w-full">
      <ShoppingCart size={18} />
      Add to Cart
    </button>
  );
};

export default CartButton;
