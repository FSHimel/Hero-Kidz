"use server";

import { collectionName, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await dbConnect(collectionName.PRODUCTS).find().toArray();
  return products;
};

export const getSingleProduct = async (id) => {
  if (id.length != 24) return {};

  const query = { _id: new ObjectId(id) };
  const product = await dbConnect(collectionName.PRODUCTS).findOne(query);
  return product || [];
};
