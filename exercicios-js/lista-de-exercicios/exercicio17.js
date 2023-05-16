const somarNumeros = (array) => {
  let element = 0;
  for (let i = 0; i < array.length; i++) {
    element += array[i];
  }
  return element;
};
console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
