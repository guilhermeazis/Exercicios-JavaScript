const calcularSalario = (horas, ganhoHora) => {
  const result = horas * ganhoHora;
  return `Salário igual a R$ ${result}`;
};

console.log(calcularSalario(150, 40.5));
