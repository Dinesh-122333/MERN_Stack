const { resolveInclude } = require("ejs")
const express = require("express")
const app = express()

app.set("view engine", "ejs")//it is where what engine we are going to use and type of it like ejs file

app.get("/",(req,res) => {
    console.log("hi")
    res.render("index")
})

app.listen(4000)