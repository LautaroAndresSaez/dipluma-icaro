const express = require("express");
const path = require("path");
const VIEWS_PATH = path.join(__dirname, "views");
const PORT = 3000;
app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
  res.sendFile(path.join(VIEWS_PATH, "index.html"));
});
app.get("/products", (req, res) => {
  res.sendFile(path.join(VIEWS_PATH, "products.html"));
});
app.get("/products/1", (req, res) => {
  res.sendFile(path.join(VIEWS_PATH, "product.html"));
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
