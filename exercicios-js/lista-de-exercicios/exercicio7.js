const estaEntre = (num, min, max, inclusivo = false) =>
  inclusivo ? num >= min && num <= max : num > min && num < max;

console.log(estaEntre(10, 50, 100));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 3, 150));
console.log(estaEntre(3, 3, 150, true));
