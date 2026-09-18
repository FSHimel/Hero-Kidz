"use server";

import { authOptions } from "@/lib/authOption";
import { collectionName, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { clearCart, getCartItems } from "./cart";
import { sendEmail } from "@/lib/sendEmail";
import { orderInvoiceTemplate } from "@/lib/invoiceTemplate";
import { ObjectId } from "mongodb";

const orderCollection = dbConnect(collectionName.ORDER);

export const createOrder = async (payload) => {
  const user = (await getServerSession(authOptions)) || {};

  if (!user) return { success: false };

  const cart = await getCartItems();

  if (cart.length == 0) {
    return { success: false };
  }

  const newOrder = {
    ...payload,
    items: cart,
    createdAt: new Date().toISOString(),
  };

  const result = await orderCollection.insertOne(newOrder);

  if (Boolean(result.insertedId)) {
    await clearCart();

    for (const item of newOrder.items) {
      await dbConnect(collectionName.PRODUCTS).updateOne(
        { _id: new ObjectId(item.productId) },
        {
          $inc: {
            sold: item.quantity,
          },
        },
      );
    }
    // 📧 Send Invoice Email
    await sendEmail({
      to: user.email,
      subject: "Your Order Invoice - Hero Kidzz",
      html: orderInvoiceTemplate({
        orderId: result.insertedId.toString(),
        items: cart,
        totalPrice: payload.totalPrice,
        shipping: payload.deliveryCharge,
      }),
    });
  }
  return {
    success: result.insertedId,
  };
};
