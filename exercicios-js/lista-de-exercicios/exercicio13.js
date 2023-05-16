const filtrarNumeros = (array) => array.filter((a) => typeof a === "number");

console.log(filtrarNumeros(["Javascript", 1, "3", "web", 20]));
console.log(filtrarNumeros(["a", "c"]));
