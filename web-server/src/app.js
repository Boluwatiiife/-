const express = require("express");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("*", (req, res) => {
  res.send("wrong page route, please check and try again");
});

app.listen(3000, () => {
  console.log(`Server up and running...`);
});
