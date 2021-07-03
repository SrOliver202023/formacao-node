CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(250),
  idade INT
);


INSERT INTO usuarios (nome,email,idade) VALUES("Emmerson Oliveira", "sroliver202023@gmail.com", 18);

SELECT * FROM usuarios;

DELETE FROM usuarios; //apaga toda tabela

DELETE FROM usuarios WHERE nome = "Victor";

UPDATE usuarios SET nome = "undefined" WHERE nome = "Carlos Gabriel";