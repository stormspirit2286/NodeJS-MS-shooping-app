const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Db Shopping Connected");
  } catch (error) {
    console.log("ShoppingDB Error ============");
    console.log(error);
    process.exit(1);
  }
};
