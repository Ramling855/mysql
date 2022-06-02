const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://RRR:RRR@cluster0.rajfy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connectted mongodb"))
  .catch((rr) => console.log("error"));
