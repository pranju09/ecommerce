const express = require("express");

const app = express();
const PORT = 8000

app.use(express.json());

app.get("/", (req,res)=>{
 res.send('hello from express')
})

app.get("/user/:name", (req,res)=>{
    res.json({ message: `Hello ${req.params.name}` });
})

app.post("/user", (req , res)=>{
    res.json({ message: 'User added.', data :req.body });
})

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})