const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
// const login = require("./Routes/login");
const allOrders = require("./Routes/allOrders");
const allProducts = require("./Routes/allProduct");
const updateProduct = require("./Routes/updateProduct");
const deleteProduct = require("./Routes/deleteProduct");
const createProduct = require("./Routes/createProduct");
const updateOrders = require("./Routes/updateOrders");
const createOrders = require("./Routes/createOrders");

const PORT = process.env.PORT || 5001;

const mongoUrl =
  "mongodb+srv://Zunim:Zunim@database.tlk1xg0.mongodb.net/?retryWrites=true&w=majority&appName=Database";

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });

//   app.use("/login", login);
app.use("/allOrders", allOrders);
app.use("/allProducts", allProducts);
app.use("/updateProduct", updateProduct);
app.use("/deleteProduct", deleteProduct);
app.use("/createProduct", createProduct);
app.use("/updateOrders", updateOrders);
app.use("/createOrders", createOrders);

app.listen(PORT, () => {
  console.log("Server Started");
});
