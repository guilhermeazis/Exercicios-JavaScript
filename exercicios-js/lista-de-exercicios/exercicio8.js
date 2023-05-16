const multiplicador = (num1, num2) => {
  let element = 0;
  for (let index = 0; index < num2; index++) {
    element += num1;
  }
  return element;
};

console.log(multiplicador(5, 5));
console.log(multiplicador(0, 7));
