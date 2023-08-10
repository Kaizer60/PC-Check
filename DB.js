const sql = require("mysql");

const connectDB = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb"
})

module.exports = connectDB
