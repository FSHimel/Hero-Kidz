"use client";

import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";

const CheckOut = ({ cartItems = [] }) => {
  const session = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    area: "",
    address: "",
    note: "",
    paymentMethod: "cash_on_delivery",
  });

  const subtotal = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  );

  const shipping = subtotal > 0 ? 60 : 0;
  const total = subtotal + shipping;

  // ================= HANDLE INPUT CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE FORM SUBMIT =================
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      city: form.city.value,
      area: form.area.value,
      fullAddress: form.address.value,
      specialNote: form.note.value,
      paymentMethod: form.paymentMethod.value,
      productPrice: subtotal,
      deliveryCharge: shipping,
      totalPrice: total,
    };

    const result = await createOrder(payload);
    if (result.success) {
      router.push("/");
      Swal.fire("Success", "Order added", "success");
    } else {
      router.push("/cart");
      Swal.fire("error", "Something went wrong", "error");
    }
    setLoading(false);

    // Later you can send orderData to your server action/API
    // await createOrder(orderData);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* ================= LEFT: CHECKOUT FORM ================= */}
        <div className="rounded-xl border border-primary lg:col-span-2">
          <div className="rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm sm:p-6">
            <h1 className="mb-6 text-2xl font-bold">Delivery Information</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ================= CUSTOMER INFORMATION ================= */}
              <div>
                <h2 className="mb-4 text-lg font-semibold">
                  Customer Information
                </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Full Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={session?.data?.user?.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="input w-full rounded-xl border border-primary outline-0"
                      required
                      readOnly
                    />
                  </div>
                  {/* Email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email Address</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={session?.data?.user?.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="input w-full rounded-xl border border-primary outline-0"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              {/* ================= SHIPPING ADDRESS ================= */}
              <div>
                <h2 className="mb-4 text-lg font-semibold">Shipping Address</h2>

                <div className="space-y-4">
                  {/* City + Area */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* City */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">City</span>
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        className="input w-full rounded-xl border border-primary outline-0"
                        required
                      />
                    </div>

                    {/* Area */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Area</span>
                      </label>

                      <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="Your area"
                        className="input w-full rounded-xl border border-primary outline-0"
                        required
                      />
                    </div>
                  </div>

                  {/* Full Address */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Address</span>
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House no, road, area..."
                      className="textarea min-h-28 w-full rounded-xl border border-primary outline-0"
                      required
                    ></textarea>
                  </div>

                  {/* Order Note */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Order Note{" "}
                        <span className="text-base-content/50">(Optional)</span>
                      </span>
                    </label>

                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      placeholder="Any special instructions?"
                      className="textarea w-full rounded-xl border border-primary outline-0"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              {/* ================= PAYMENT ================= */}
              <div>
                <h2 className="mb-4 text-lg font-semibold">Payment Method</h2>

                <div className="rounded-xl border border-primary p-4">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash_on_delivery"
                      onChange={handleChange}
                      checked={formData.paymentMethod === "cash_on_delivery"}
                      className="radio"
                    />

                    <div>
                      <p className="font-medium">Cash on Delivery</p>

                      <p className="text-sm text-base-content/60">
                        Pay when your order arrives.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* ================= SUBMIT ================= */}
              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl"
                disabled={cartItems.length === 0 || loading}
                
              >
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* ================= RIGHT: ORDER SUMMARY ================= */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 rounded-xl border border-primary bg-base-100 p-4 shadow-sm sm:p-6">
            <h2 className="mb-6 text-xl font-bold">Order Summary</h2>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-base-200">
                    <img
                      src={item.image}
                      alt={item.title || "Product"}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{item.title}</p>

                    <p className="text-sm text-base-content/60">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="shrink-0 font-medium">
                    ৳{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            {/* Price Breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-base-content/70">Subtotal</span>

                <span>৳{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-base-content/70">Shipping</span>

                <span>৳{shipping}</span>
              </div>

              <div className="divider my-2"></div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>

                <span className="text-primary">৳{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
