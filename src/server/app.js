const express = require("express");

const app = express();


app.get('/',function(req,res){
    res.send('oi')
})

app.listen(5000,function(){
    console.log('listening on 5000')
});