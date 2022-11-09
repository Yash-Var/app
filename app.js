require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app =express()
const connectDB=require('./db/connect')
app.get("/",(req,res)=>{
    console.log("yash varshney");
})
const router=require('./routes/api')
const port=8080 || process.env.PORT;
app.use('/api/',router)

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, () => {
        console.log(`server is listenning on ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  start()