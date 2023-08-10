const express = require("express");
const cors = require("cors");
const Port = 3000;
const app = express();

const con = require('./DB');

const HardwareRoutes = require('./Controller/Hardware.Controller')
const SoftwareRoutes = require('./Controller/Software.Controller')

app.use(cors())
app.use(express.json());
app.use('/api/Hardware',HardwareRoutes)
app.use('/api/Software',SoftwareRoutes)


con.connect(() => {
  try {
    app.listen(Port, () => {
      console.log(`DB connection successfully at port ${Port}`);
    })
  } catch (err) {
    console.log("Message error: ", err);
  }
});
