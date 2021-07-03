const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta"); //MODEL

connection
  .authenticate()
  .then(() =>{
    console.log("Conexao, OK!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });



app.set('view engine', 'ejs');
app.set('partials', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get("/", (req, res) => {
  // SELECT * ALL FROM perguntas
  Pergunta.findAll( {raw: true} ).then(perguntas => {
    res.render("index", {
      perguntas: perguntas
    });
  }); 
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;


  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/");
  });

});




app.listen(8080, () => console.log("App rodando!"));