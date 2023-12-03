const express = require("express");
require("dotenv").config();
const port = process.env.APP_PORT
const app = express();
app.use(express.json()); // DEMANDER EXPLICATION

const itemControllers = require("./controllers/itemControllers");

app.get("/products", itemControllers.getItems);
app.get("/products/:id", itemControllers.getItemById);
app.post("/products", itemControllers.postItems);
app.put("/products/:id", itemControllers.updateItems);
app.delete("/products/:id", itemControllers.deleteItems);

module.exports = app;

