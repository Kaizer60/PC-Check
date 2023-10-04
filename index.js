const express = require("express");
const cors = require("cors");
const Port = 3002;
const app = express();
const connectDB = require("./DB");
const LoginRoutes = require("./Controller/LoginController");
const InfoRoutes = require("./Controller/Info.Controller");

app.use(cors());
app.use(express.json());

//log in line
app.use("/api/Login", LoginRoutes);

//Data line
app.use("/api/Info", InfoRoutes);

//Connection Check
connectDB()
  .then(() => {
    app.listen(Port, () => {
      console.log("Db connection successfully!");
      console.log(`Server started at port ${Port}`);
    });
  })
  .catch((err) => {
    console.log("Connection fail!: " + err);
  });