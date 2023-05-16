const repetir = (repetir, qtdRepetir) => {
  const array = [];
  for (let i = 0; i < qtdRepetir; i++) {
    array.push(repetir);
  }
  return array;
};

console.log(repetir("código", 2));
console.log(repetir(7, 3));
