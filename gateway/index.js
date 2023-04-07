const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const logger = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/customer", proxy("http://localhost:8001"));
app.use("/shopping", proxy("http://localhost:8003"));
app.use("/", proxy("http://localhost:8002")); // redirect to product

app.listen(8000, () => {
  console.log("API Gateway is running on port: 8000");
});
