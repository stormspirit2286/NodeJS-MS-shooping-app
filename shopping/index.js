const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.status(200).json({ message: "Shopping say hello" });
});

app.listen(8003, () => {
  console.log("Shopping is running on port: 8003");
});
