const express = require("express");
const app = express();

//Estou dizendo para o express usar o ejs como views engine
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produto = [
        {nome: "batata",preco: 6.50},
        {nome: "Garoupa",preco: 6.00},
        {nome: "Maionese",preco: 8.00},
        {nome: "Presunto",preco: 3.50},
    ]

     res.render("index",{
        nome:nome,
        lang:lang,
        Empresa: "Guia do Programador",
        inscritos: 8040,
        msg: exibirMsg,
        produto: produto
     });

});

app.listen(8080,()=>{console.log("App Rodando!");});