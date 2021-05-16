const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/boilerplate",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,}
);

app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(
    `TOOT  TOOT ! all aboard the boilerplate coding train!!! chugging' along at port ${PORT} 🚂👨‍👨‍👨‍!!`
  );
});
