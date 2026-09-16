import { getCartItems } from "@/actions/server/cart";
import CartItem from "@/components/cards/CartItem";
import ClientCart from "@/components/cart/Cart";
import React from "react";

const CartPage = async () => {
  const cartItems = await getCartItems();
  const plainCartItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  console.log(cartItems[0]);
  return (
    <div className="p-4">
      <div className="">
        <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">
          My Cart
        </h2>
      </div>
      <ClientCart items={plainCartItems}></ClientCart>
    </div>
  );
};

export default CartPage;
