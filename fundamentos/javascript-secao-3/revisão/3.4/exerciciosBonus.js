/* 1 */
let numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  function romanoParaDecimal(numero) {
    numero = numero.toLowerCase();
    let len = numero.length;
    let soma = numerosRomanos[numero[len - 1]];
    let atual = numerosRomanos[numero[len - 1]];
  
    for (let i = 2; i <= len; i += 1) {
      let prox = numerosRomanos[numero[len - i]];
  
      if (atual <= prox) {
        soma += prox;
      } else {
        soma -= prox;
      }
  
      atual = prox;
    }
  
    return soma;
  }
  
  console.log(romanoParaDecimal('MMXVIII')); // 2018
  console.log(romanoParaDecimal('VI')); // 6
  console.log(romanoParaDecimal('IV')); // 4

/* 2 */
let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  let result = [];

  for (let index = 0; index < vector.length; index += 1) {
    let numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      let current = numbers[indexSub];

      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }

  return result;
}

console.log(arrayOfNumbers(vector));
console.log(arrayOfNumbers(vector)); // [2, 4, 6, 8, 10]

/* 3 */
let basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
  
  let result = {};
  
  for (let index = 0; index < basket.length; index += 1) {
    let fruit = basket[index];
    if (!result[fruit]) result[fruit] = 0;
    result[fruit] += 1;
  }
  
  let summaries = [];
  
  for (fruit in result) {
    let message = `${result[fruit]} ${fruit}`;
    if (result[fruit] > 1) message += 's';
    summaries.push(message);
  }
  
  console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

/* 4 */
let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

// Dois modos de acessar as propriedades do objeto "ultimoMoradorBlocoDois"
console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

// Ou

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois['nome'] + ' ' + ultimoMoradorBlocoDois['sobrenome'] + ' mora no ' + ultimoMoradorBlocoDois['andar'] + '° andar, apartamento ' + ultimoMoradorBlocoDois['apartamento']);

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
    console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
  }
  
  for (let index = 0; index < moradores.blocoDois.length; index++) {
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
  }

/* 5 */
function getNumberOfStudentsMath(obj) {
    let total = 0;
    let keys = Object.keys(obj);
    for (index in keys) {
      if(obj[keys[index]].materia === 'Matemática'){
        total += obj[keys[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudentsMath(allLessons));

  function getInfo(obj, name) {
    let allLessons = [];
    let numberStudents = 0;
    let values = Object.values(obj);
    for (index in values) {
      if (values[index].professor === name) {
        allLessons.push(values[index].materia)
        numberStudents += values[index].numeroEstudantes;
      }
    }
    return { aulas: allLessons, estudantes: numberStudents };
  }
  
  function createReport(allLessons, name) {
    let report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));