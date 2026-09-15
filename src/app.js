const express = require("express");
const { port } = require("./config/env");
const routes = require("./routes"); // Apunta a src/routes/index.js
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /
app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

// /api
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});