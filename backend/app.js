const express=require('express')
const connectDB=require("./connection/connect")
const PORT=5000
const app=express()

//middlewares
app.use(express.json());
// app.use(morgan("tiny"));
app.use(require("cors")());


app.get('/',(req,res)=>{
   
    res.send("hello this is real estate app")
})

// server configurations.
app.listen(PORT,async()=>{
    await connectDB()
    console.log(`server started on http://localhost:${PORT}`)
})