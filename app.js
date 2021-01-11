const express = require('express')

const app = express();

app.get('/allumLed',(req,res,next)=>{
    console.log('temperature')
    res.send({
        Temp : 12
    })
})


app.listen(5000, ()=>{
    console.log("server i running ...")
})
