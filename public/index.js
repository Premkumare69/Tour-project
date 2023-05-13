const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname + "/static")))

const sql = mysql
    .createPool({
        host: "localhost",
        user: "root",
        password: "password",
        database: "contact",
    })
    .promise();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/Main.html")
})

app.get("/get-posts", async (req, res) => {
    const query = "select * from contact";
    const [output] = await sql.query(query);
    res.send(output);
});

app.post("/postdata", async (req, res) => {
    const Name = req.body.Name;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const Subject = req.body.Subject;
    const Message = req.body.Message;
    console.log(Name);
    const query = "insert into contact(Name,Email,PhoneNumber,subject,Message) values(?,?,?,?,?)";

    const output = await sql.query(query, [Name, Email, PhoneNumber, Subject, Message]);

    res.send("Posted successfully");
});

app.listen(3000, (e) => {
    console.log("LISTENING...");
});