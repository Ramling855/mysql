const express = require("express");
const tata = require("./schema");
const app = express();
// const cors = require("cors");
// app.use(express.cors());
app.set("view engine", "hbs");
// app.set("views");
app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.json());
// app.use(bodyparser.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.get("/add", (req, res) => {
  res.render("add");
  // console.log(req.body);
  // const name = new tata({});
  // name.save((err, data) => {
  //   if (err) {
  //     console.log("err");
  //   } else {
  //     console.log("data inserted");
  //   }
});

app.post("/add", (req, res) => {
  console.log(req.body);
  const name = new tata(req.body);
  name.save((err, data) => {
    if (err) {
      console.log("err");
    } else {
      console.log("data inserted", data);
    }
  });

  // res.render("add");
});
app.get("/search", (req, res) => {
  tata.find((err, data) => {
    if (err) {
      console.log("error");
      return;
    } else {
      return res.send(data);
    }
  });

  // res.render("search");
});
app.get("/update", (req, res) => {
  res.render("update");
});
app.get("/delete", (req, res) => {
  res.render("delete");
});
app.get("/home", (req, res) => {
  res.render("home");
});

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://RRR:RRR@cluster0.rajfy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connectted mongodb"))
  .catch((rr) => console.log("error"));

app.listen(5030, () => {
  console.log("server connected");
});
