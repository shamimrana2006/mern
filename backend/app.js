const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Shamim done")
})

app.use((req,res,next)=>{
    res.json({
        "message" : "failded",
        "status" : 404
    })
})

module.exports = app