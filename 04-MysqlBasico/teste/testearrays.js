const peoples = [
  { 
    nome: "Emerson Oliveira Assuncao",
    infor: {
      idade: 18,
      cidade: "Itabuna-Ba"
    }

  },
  { 
    nome: "Emerson Oliveira Assuncao",
    infor: {
      idade: 18,
      cidade: "Itabuna-Ba"
    }

  },
  { 
    nome: "Emerson Oliveira Assuncao",
    infor: {
      idade: 18,
      cidade: "Itabuna-Ba"
    }

  },

];

const showMy = [...peoples].map((obj, indice) => {
  const newPeoples = obj;
  console.log(newPeoples);
  const listPeople = {
      nome: newPeoples.nome,
      idade: newPeoples.infor.idade,
      cidade: newPeoples.infor.cidade
    };
    return listPeople;
})

console.log(showMy);


