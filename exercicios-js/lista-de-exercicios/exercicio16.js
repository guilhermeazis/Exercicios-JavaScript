const checarAnoBissexto = (ano) => {
  const dividePorQuatro = ano % 4 == 0;
  const dividePorCem = ano % 100 == 0;
  const dividePorQuatrocentos = ano % 400 == 0;

  return (dividePorQuatro && !dividePorCem) || dividePorQuatrocentos;
};

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));
