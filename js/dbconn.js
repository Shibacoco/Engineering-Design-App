var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: ""
});

conn.connect(function(err){
    if (err) throw err;
    console.log("kijk nu ben je verbonden met de database");
});