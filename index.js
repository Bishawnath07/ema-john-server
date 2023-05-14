const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

app.get('/' , (req , res)=>{
    res.send('simple ema john is running')
})

app.listen(port , ()=>{
    console.log(`simple ema jhon is runnig on port${port}`)
})