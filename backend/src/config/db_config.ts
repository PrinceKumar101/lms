import mongoose from "mongoose";
import mongodb from "mongodb"

const url = process.env.MongoDb_url;

export const db = async () => {
  try {
    if (!url) throw "Connection url Missing.";

    await mongoose.connect(url).then(() => {
      console.log("Connection successfully established.");
    });
  } catch (err) {
    console.log(err);
  }
};
