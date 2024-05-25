import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;


/* routes */

// app.use('/api', router)

app.get('/', (req, res)=>{
    try{
        res.send("Hello vercel")
    }catch(e){
        res.json(e)
    }
});

try{
    app.listen(PORT, ()=>{
        console.log(`server is running in http://localhost:${PORT}`);
    })
}catch(e){
    console.log(e)
}