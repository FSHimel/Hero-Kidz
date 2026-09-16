"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import {
  decreaseItemDb,
  deleteItemFromCart,
  increaseItemDb,
} from "@/actions/server/cart";
import { useState } from "react";

const CartItem = ({ item, removeItem, updateQuantity }) => {
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemFromCart(item._id);
        if (result.success) {
          removeItem(item._id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong.",
            icon: "error",
          });
        }
      }
    });
  };

  const [loading, setLoading] = useState(false);

  const onIncrease = async () => {
    setLoading(true)
    const result = await increaseItemDb(item._id, item.quantity);
    if (result.success) {
      //   Swal.fire("success", "q increase", "success");
      updateQuantity(item._id, item.quantity + 1);
    }
    setLoading(false)
  };

  const onDecrease = async () => {
    setLoading(true)
    const result = await decreaseItemDb(item._id, item.quantity);
    if (result.success) {
      //   Swal.fire("success", "q decrease", "success");
      updateQuantity(item._id, item.quantity - 1);
    }
    setLoading(false)
  };

  return (
    <div className="card card-side bg-base-100 border border-base-300 shadow-sm p-4">
      {/* Image */}
      <figure className="w-24 h-24 shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          width={96}
          height={96}
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-0 pl-4 flex-row items-center justify-between gap-4">
        {/* Title & Price */}
        <div className="flex-1">
          <h2 className="font-semibold text-base md:text-lg line-clamp-2">
            {item.title}
          </h2>

          <p className="text-neutral-400 font-bold mt-1">
            ৳{item.price} x {item.quantity} =
            <span className="text-primary text-[18px]">
              {" "}
              {item.price * item.quantity}
            </span>
          </p>
        </div>

        {/* Quantity */}
        <div className="join">
          <button
            onClick={onDecrease}
            disabled={item.quantity === 1 || loading}
            className="btn btn-sm join-item"
          >
            <Minus size={16} />
          </button>

          <span className="btn btn-sm join-item no-animation cursor-default">
            {item.quantity}
          </span>

          <button
            onClick={onIncrease}
            disabled={item.quantity === 10 || loading}
            className="btn btn-sm join-item"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Remove */}
        <button
          onClick={handleDelete}
          className="btn btn-sm btn-ghost text-error"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
