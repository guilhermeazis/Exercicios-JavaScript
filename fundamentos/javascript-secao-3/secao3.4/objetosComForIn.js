/* let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let position in car) {
    console.log(position, car[position]);
  }

  let food = ['hambúrguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hambúrguer, bife, acarajé; */

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (key in names){
    console.log('Olá, ' + names[key]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (key in car){
    console.log(key + ': ' + car[key]);
}