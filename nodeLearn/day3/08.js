var express = require("express");
var app = express();

app.use(express.static("./public"));

app.get("/",function (req,res) {
    res.send("哈哈");
})

app.listen(3000);