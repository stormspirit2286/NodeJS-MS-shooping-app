const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.status(200).json({ message: "Customer say hello" });
});

app.listen(8001, () => {
  console.log("Customer is running on port: 8001");
});
