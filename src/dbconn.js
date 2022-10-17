const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

connection.connect((err) => {
    if (err) {
        console.log("Error occurred", err);
    } else {
        console.log("Connected to MySQL Server");
    }
});

module.exports.connection = connection;

array.forEach(element => {
    
});