import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdetails"
})

con.connect(function(err) {
    if (err) {
        console.log("Error connecting to MySQL server.");
    } else {
        console.log("Connected!");
    }
})