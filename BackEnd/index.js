import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import getBook from './controller/book.controller.js'
import cors from "cors"
import UserRouter from "./route/user.route.js"

let app=express()
dotenv.config()
app.use(cors())
app.use(express.json());
let PORT= process.env.PORT || 3000
let  url=process.env.MongoDBURI



let database=async()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log('connected to mgdb')
    })
    .catch((err)=>{
        console.log('failed to connet ',err)
    })
}
database()




app.use('/book',getBook)
app.use('/user',UserRouter);

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(PORT,()=>{
    console.log('port is running on ',PORT)
})