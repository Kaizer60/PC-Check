const express = require("express");
const cors = require("cors");
const Port = 3000;
const app = express();
const con = require("./DB");
const LoginRoutes = require("./Controller/LoginController");
const InfoRoutes = require("./Controller/Info.Controller");

app.use(cors());
app.use(express.json());

//log in line
app.use("/api/Login", LoginRoutes);

//Data line
app.use("/api/Info", InfoRoutes);

//Connection Check
con.connect(() => {
  try {
    app.listen(Port, () => {
      console.log(`DB connection successfully at port ${Port}`);
    });
  } catch (err) {
    console.log("Message error: ", err);
  }
});
