import express from "express";
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res)=>{
    res.json("Hello vercel");
})

app.listen(PORT, ()=>{
    console.log("running")
})
