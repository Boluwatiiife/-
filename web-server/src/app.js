import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(
    "<h1>backend development will make me well known and very wealthy! so help me God, Amenn!!!</h1>"
  );
});

app.get("/help", (req, res) => {
  res.send("Help page");
});

app.get("*", (req, res) => {
  res.send("wrong page route, please check and try again");
});

app.listen(3000, () => {
  console.log(`Server up and running...`);
});
