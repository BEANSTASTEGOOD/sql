import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "sql200.infinityfree.com",
    user: "if0_39584228",
    password: "VvTh3IBbNY7ENI",
    database: "if0_39584228_test"
});

db.connect(err => {
    if (err) {
        console.error("DB connection failed:", err);
    } else {
        console.log("Connected to MySQL!");
    }
});

app.post("/", (req, res) => {
    const { sql } = req.body;
    db.query(sql, (err, results) => {
        if (err) {
            res.json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

app.listen(3000, () => console.log("MySQL bridge running on port 3000"));
