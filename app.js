const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const cors = require('cors')
const ServiceRoute = require("./routes/serviceRoute");

app.use(cors({origin:"http://localhost:3000"}))

mongoose
  .connect("mongodb://0.0.0.0:27017/internTest")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database Error :- ", error);
  });
app.use(express.json())
app.use("/service", ServiceRoute);
app.get("/", (req, res) => {
  res.status(200).json({ Message: "Base URL" });
});

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
