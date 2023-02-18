const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const bee = require("bcrypt");
const env = require("dotenv")

env.config({
    path: "./config.env"
})
app.use(cors());
app.use(bodyparser.json({
    limit : "100mb"
}));

//Rules of engagement
app.all("*", (req, res, next)=>{
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.header("Acess-Control-Allow-Origin", "Content-Type");
    next();
});

const students = [
    {
        "name": "Jonatan",
        "lastname": "Rico",
        "studentid": 6519150034,
        "major": "Software development"
    },
    {
        "name": "Caleb",
        "lastname": "Granados",
        "studentid": 6519150035,
        "major": "Business development"
    }
];

app.get('/allusers', (req, res) => {
    res.send(students)
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App is running in port ${port}`)
})