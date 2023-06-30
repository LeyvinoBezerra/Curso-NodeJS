const express = require("express"); // importando o express
const app = express(); // iniciado o express

app.get("/", function(req,res){
    res.send("Bem Vindo");


});

app.get("/blog", function(req,res){
    res.send("Bem Vindo ao meu Blog");


});
app.get("/canal/youtube", function(req,res){
    res.send("Bem Vindo ao meu canal");


});
app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro !");
    }else{
        console.log("Servidor iniciando com sucesso!");
    }
})