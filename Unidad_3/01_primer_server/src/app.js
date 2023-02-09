const express = require("express");
const path = require('path');
const PORT = 3000;
const VIEWS_PATH = path.join(__dirname, 'views')

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(VIEWS_PATH, 'index.html'));
});



app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto: ${PORT}`);
});
