const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.status(200).json({ message: "Products say hello" });
});

app.listen(8002, () => {
  console.log("Customer is running on port: 8002");
});
