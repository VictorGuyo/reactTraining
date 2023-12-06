const express = require("express");
require("dotenv").config();
const port = process.env.APP_PORT
const app = express();
app.use(express.json()); // DEMANDER EXPLICATION

const itemControllers = require("./controllers/itemControllers");

app.get("/items", itemControllers.getItems);
app.get("/items/:id", itemControllers.getItemById);
app.post("/items", itemControllers.postItems);
app.put("/items/:id", itemControllers.updateItems);
app.delete("/items/:id", itemControllers.deleteItems);

module.exports = app;

