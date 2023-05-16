/* com for in */
const inverter = (obj) => {
  const object = {}
  for (let key in obj) {
    object[obj [key]] = key
  }
  return object
};

/* Com map */
/* const inverter = (objeto) => Object.fromEntries(Object.entries(objeto).map( parChaveValor => parChaveValor.reverse() )) */

console.log(inverter({ a: 1, b: 2, c: 3 }));
