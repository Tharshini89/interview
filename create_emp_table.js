var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password :"",
    database :"signup"
});

con.connect(
    function(err){
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE user (username VARCHAR(20), email VARCHAR(25), password VARCHAR(6))";
        con.query(sql, function(err,result) {
            if (err) throw err;
            console.log("Table Created!");
        });
    }
);