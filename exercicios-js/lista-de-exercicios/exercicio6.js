const inverso = (valor) => {
  if (typeof valor === "boolean") {
    if (valor === true) {
      return false;
    } else {
      return true;
    }
  }
  if (typeof valor === "number") {
    if (valor > 0) {
      return -valor;
    }
    if (valor < 0) {
      return -valor;
    }
  }
  if (typeof valor === "string") {
    return "booleano ou número esperados, mas o parâmetro é do tipo string";
  }
};

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação"));