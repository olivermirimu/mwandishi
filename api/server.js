const express = require("express");
const mongoose = require("mongoose");

// app declarations
const app = express();
const port = process.env.PORT || 3500;
const MONGODB_URI = "mongodb://localhost/mwandishi";
// production mongo
// const MONGODB_URI =

// eslint-disable-next-line no-unused-vars
const db = mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) =>
    err
      ? console.log(`Error occured ${err}`)
      : console.log("DB Successfully connected")
);
mongoose.connection;
// cors configuration
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "localhost:4200");
  res.header(
    `Access-Control-Allow-Headers`,
    `Origin, X-Requested-With, Content-Type, Accept, Authorization`
  );
  next();
});
// app configuration
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.listen(port, () => console.log(`App running on port: ${port}`));
