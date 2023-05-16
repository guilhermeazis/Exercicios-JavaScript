const despesasTotais = (array) =>
  array.map((a) => a.preco).reduce((acc, value) => acc + value);

console.log(
  despesasTotais([
    { nome: "Jornal online", cantegoria: "Informação", preco: 89.99 },
    { nome: "Cinema", cantegoria: "Entretenimento", preco: 150 },
  ])
);

console.log(
  despesasTotais([
    { nome: "Galaxy S20", cantegoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", cantegoria: "Eletrônicos", preco: 30999.9 },
  ])
);
