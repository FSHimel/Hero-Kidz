"use server";

import { collectionName, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { name, email, password } = payload;
  //check payload
  if (!email || !password) return null;
  //check User
  const isExist = await dbConnect(collectionName.USERS).findOne({ email });
  if (isExist) return null;
  //ccreate user
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 10),
    role: "user",
  };

  //insert user
  const result = await dbConnect(collectionName.USERS).insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  //check payload
  if (!email || !password) return null;
  //check User
  const user = await dbConnect(collectionName.USERS).findOne({ email });
  if (!user) return null;
  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) {
    return user;
  } else {
    return null;
  }
};
