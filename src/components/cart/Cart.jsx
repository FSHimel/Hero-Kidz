"use client";

import { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";

const ClientCart = ({ items }) => {
  const [cartItems, setCartItems] = useState(items);

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );
  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id != id));
  };

  const updateQuantity = (id, q) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id ? { ...item, quantity: q } : item,
      ),
    );
  };
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* LEFT - CART ITEMS */}
      <div className="lg:w-2/3 space-y-4">
        {cartItems.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      {/* RIGHT - ORDER SUMMARY */}
      <div className="lg:w-1/3">
        <div className="card bg-base-100 border border-base-300 shadow-sm sticky top-4">
          <div className="card-body">
            <h2 className="card-title text-xl border-b pb-3">Order Summary</h2>

            {/* Products */}
            <div className="space-y-4 mt-3">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between gap-3">
                  {/* Name + Quantity */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium line-clamp-1">{item.title}</p>

                    <p className="text-sm text-base-content/60">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-medium">৳{item.price}</p>

                    <p className="text-sm text-base-content/60">
                      Subtotal: ৳{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            {/* Total Items */}
            <div className="flex justify-between">
              <span>Total Items</span>
              <span className="font-semibold">{totalItems}</span>
            </div>

            {/* Total Price */}
            <div className="flex justify-between text-lg mt-2">
              <span className="font-semibold">Total Price</span>

              <span className="font-bold text-primary">৳{totalPrice}</span>
            </div>

            {/* Confirm Button */}
            <button
              disabled={cartItems.length === 0}
              className="btn btn-primary w-full mt-4"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCart;
