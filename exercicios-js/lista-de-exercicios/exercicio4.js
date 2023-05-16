const nomeDoMes = (mes) => {
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro'
  ];
  const result = meses[mes-1];
  return result;
};

console.log(nomeDoMes(1));
console.log(nomeDoMes(4));