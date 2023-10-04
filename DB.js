// const sql = require("mysql");

// const connectDB = sql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "testdb"
// })

// module.exports = connectDB

const sql = require("mssql/msnodesqlv8");

const config = {
  user: "sa",
  password: "Benz2541",
  server: "KAIZER60\\RUTCHANON",
  database: "GCAP",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

module.exports = () => {
  return sql.connect(config);
};
