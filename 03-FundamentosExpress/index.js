const express = require("express"); // Importing express
const app = express(); // stating the express

app.get("/", function(req, res){
  res.send('Welcome');

});
app.get("/blog/:artigo?", function(req, res){
  var artigo = req.params.artigo;

  if(artigo){
    res.send(`<h2>Artigo ${artigo} </h2>`);
  } else {
    res.send(`<h3>Bem Vindo ao meu blog!: www.guiadoprogramador.com</h3>`);
  }

});
app.get("/canal/youtube", function(req, res){
  var canal = req.query["canal"];
  res.send(`${canal}`);

});
app.get("/ola/:nome", function(req, res){
  // req = dados enviados pelo usuario
  // res => resposta que vai ser enviada para o usuario
  var nome = req.params.nome;

  res.send(req.params.nome);

});


app.listen(4000, function(erro) {
  if(erro){
    console.log('Ocorreu um erro!');
  } else{
    console.log('Servidor iniciado com sucesso!');
  }
});