const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/pablo", (req, res) => {
  res.send("<h1>Hola pablo!</h1>");
});

app.get("/evelyn", (req, res) => {
  res.send({
    saludo: "Hola Evelyn :)",
  });
});

app.listen(PORT, () => {
  console.log("__dirname:", __dirname);
  console.log(`Server corriendo en puerto: ${PORT}`);
});
