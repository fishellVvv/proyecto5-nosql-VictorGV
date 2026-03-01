const mongoose = require("mongoose");

const DB_NAME = "proyecto-basico-express-movies";
const MONGO_URI = `mongodb://localhost:27017/${DB_NAME}`;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`✅ Conected with db successfully`);
  } catch (error) {
    console.log("❌ Error to connect with db");
  }
};

module.exports = connectDB;
