require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const MONGO_URL = process.env.MONGO_URL;
const sampleData = require("./sampledata");

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to db");
    await Listing.deleteMany();
    await Listing.insertMany(sampleData.data);
    console.log("successful");
  } catch (error) {
    console.log(error);
  }
}
main();
