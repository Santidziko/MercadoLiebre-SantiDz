const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config();
const mainRouter = require("./routes/mainRouter");

/* app.use(express.static(path.join(__dirname, "/public"))); */

app.listen(process.env.PORT, () => {
  console.log("el servidor anda bien");
});
/* 
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});
 */
