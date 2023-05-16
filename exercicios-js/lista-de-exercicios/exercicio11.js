const receberPrimeiroEUltimoElemento = (array) => {
  const newArray = [];
  newArray.push(array[0], array[array.length - 1]);
  return newArray;
};

console.log(receberPrimeiroEUltimoElemento([7, 14, "Olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "Aplicativo", 16]));