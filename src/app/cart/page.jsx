import { getCartItems } from "@/actions/server/cart";
import CartItem from "@/components/cards/CartItem";
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
        <p className="py-3 ">
          <span className="text-primary font-bold">{cartItems.length} </span>
          Items Found in the Cart
        </p>
      </div>
      <div className="flex">
        <div className="flex-3 space-y-4">
          {plainCartItems.map((item) => (
            <CartItem item={item} key={item._id.toString()}></CartItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
