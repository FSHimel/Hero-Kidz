"use client";

import { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";
import Link from "next/link";

const ClientCart = ({ items = [] }) => {
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
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const updateQuantity = (id, q) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: q } : item,
      ),
    );
  };

  return (
    <div className="w-full px-3 py-4 sm:px-5 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {/* ================= LEFT - CART ITEMS ================= */}
          <div className="w-full space-y-4 lg:col-span-2">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  removeItem={removeItem}
                  updateQuantity={updateQuantity}
                />
              ))
            ) : (
              <div className="flex min-h-60 items-center justify-center rounded-xl border border-base-300 bg-base-100 p-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold">Your cart is empty</h2>

                  <p className="mt-2 text-sm text-base-content/60">
                    Add some products to your cart first.
                  </p>

                  <Link href="/products" className="btn btn-primary mt-5">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* ================= RIGHT - ORDER SUMMARY ================= */}
          <div className="w-full lg:col-span-1">
            <div className="sticky top-4 w-full rounded-xl border border-base-300 bg-base-100 shadow-sm">
              <div className="p-4 sm:p-5 md:p-6">
                {/* Header */}
                <h2 className="border-b border-base-300 pb-3 text-lg font-bold sm:text-xl">
                  Order Summary
                </h2>

                {/* Products */}
                {cartItems.length > 0 && (
                  <div className="mt-4 max-h-72 space-y-4 overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-start justify-between gap-3"
                      >
                        {/* Name + Quantity */}
                        <div className="min-w-0 flex-1">
                          <p className="line-clamp-2 text-sm font-medium sm:text-base">
                            {item.title}
                          </p>

                          <p className="mt-1 text-xs text-base-content/60 sm:text-sm">
                            Quantity: {item.quantity}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="shrink-0 text-right">
                          <p className="text-sm font-medium sm:text-base">
                            ৳{item.price}
                          </p>

                          <p className="text-xs text-base-content/60 sm:text-sm">
                            ৳{item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="divider my-4"></div>

                {/* Total Items */}
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-base-content/70">Total Items</span>

                  <span className="font-semibold">{totalItems}</span>
                </div>

                {/* Total Price */}
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold sm:text-base">
                    Total Price
                  </span>

                  <span className="text-lg font-bold text-primary sm:text-xl">
                    ৳{totalPrice}
                  </span>
                </div>

                {/* Confirm Button */}
                {cartItems.length > 0 ? (
                  <Link
                    href="/checkOut"
                    className="btn btn-primary mt-5 w-full"
                  >
                    Confirm Order
                  </Link>
                ) : (
                  <button disabled className="btn btn-primary mt-5 w-full">
                    Confirm Order
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCart;
