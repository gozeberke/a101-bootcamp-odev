const express=require('express')
const app=express()
const endPoint=require("./router/api")
app.use(express.json())


app.use('/',endPoint)


app.listen(3000,()=>{
    console.log("Server başlatıldı")
})