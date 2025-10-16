const express = require('express');
const app = express();
const PORT = 8080;

app.get("/", (req, res)=>{
    res.send("Pierwsza strona");
})

app.listen(PORT, (err)=>{
    if(!err){
        console.log(`Działa na porcie ${PORT}`)
    }else{
        console.log(`Błąd ${err}`)
    }
})