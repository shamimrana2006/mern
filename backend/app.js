const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.get("/",(req,res)=>{
    res.json({name: "shamim rana"})
})

app.use((req,res,next)=>{
    res.json({
        "message" : "failded",
        "status" : 404
    })
})

module.exports = app 