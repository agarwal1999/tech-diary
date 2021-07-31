require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute);


app.listen("5000", ()=>{
  console.log("Backend is running")
})