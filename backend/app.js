const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.get("/",(req,res)=>{
    res.json({name: "shamim rana"})
})

app.post("/", (req,res)=>{
    const {name} = req.body
    res.json({name})
        
})

app.use((req,res,next)=>{
    res.json({
        "message" : "failded",
        "status" : 404
    })
})

app.use((req,res,next)=>{
    throw {
        "message" : "failded",
        "status" : 404
    }
    next()
})

app.use((err,req,res,next) =>{
    res.json(err)
})

module.exports = app 