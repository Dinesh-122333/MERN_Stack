const express = require('express');
const app = express()

// routing
// app.get("./", (req, res, next))//("starting file(main index)", (request_function, response_function, next_function))
// in 99.9% for routing the next is not cared itself
app.set("view engine", "ejs")//it is where what engine we are going to use and type of it like ejs file

app.get("/", (req, res) => {
    console.log("hello")
    // res.send("hi")
    // res.sendStatus(500)//sending status manually to website
    // res.status(500).json({msg: "hi"});//sending status with json msg
    
    // res.json({name : "dinesh"}) // sending only the json in web
    
    res.download("index.html")// use to download the parameter file when launch the localhost itself
    
    res.render("index") // it render using the app.set() by use of ejs function present in it
    // in render there is a second parameter option
    res.render("index", (text = "world"))

})

app.listen(3000)// our web running on the port 3000