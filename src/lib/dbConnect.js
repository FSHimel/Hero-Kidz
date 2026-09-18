import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGODB_URI);
const dbName = process.env.DB_NAME;

export const collectionName = {
  PRODUCTS: "products",
  USERS: "users",
  CART: "cart",
  ORDER: "order",
};
export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

export const dbConnect = (cname) => {
  return client.db(dbName).collection(cname);
};
