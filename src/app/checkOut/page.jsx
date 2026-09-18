import { getCartItems } from "@/actions/server/cart";
import CheckOut from "@/components/cart/CheckOut";
import React from "react";

const CheckOutPage = async () => {
  const cartItems = await getCartItems();
  const plainCartItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return (
    <div>
      <div className="p-4">
        <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">
          Check Out Page
        </h2>
      </div>
      <CheckOut cartItems={plainCartItems}></CheckOut>
    </div>
  );
};

export default CheckOutPage;
