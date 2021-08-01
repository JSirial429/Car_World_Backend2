const express = require('express')
const app = express()


app.post('/cars', (req,res)=>{
    console.log("Post route called!");
})

app.get('/get', (req,res)=>{
    console.log("get route called")
})

app.listen(5000, ()=>{

    console.log('running on port 5000!');

});