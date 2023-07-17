const express = require("express");
const app = express();
const path = require("path");
/* const dotenv = require("dotenv").config(); */

app.use(express.static(path.join(__dirname, "/public")));

app.listen(3030, () => {
  console.log("el servidor 3030 anda bien");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});
