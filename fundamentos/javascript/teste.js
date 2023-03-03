/* function indiceDoMaior(numbers) {
  let biggest = 0;
  let indiceMaior = -1; 
  for(let index = 0; index < numbers.lenght; index++){
    if(biggest < numbers[index]){
      indiceMaior = index;
    }
  }
  return indiceMaior;
} */

//console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));
//console.log(indiceDoMaior([9, 1, 3, 5, 7]));

/* numbers = [2, 3, 6, 7, 10, 1];

let biggest = 0;
let indiceMaior = 0; 
for(let index = 0; index < 6; index++){
  //console.log(numbers[index]);
  if(biggest < numbers[index]){
    biggest = numbers[index];
    indiceMaior = index;
    console.log(index);
    //console.log(biggest);
  } 
}
 */
//console.log(index);
//console.log(indiceMaior);
/* 
function maiorPalavra(array) {
  let size = 0;
  for (let index = 0; index < array.length; index++) {
    if(array.length > size) {
      size  = array[index];
    }
  }
  return size;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); */
//let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let array = [2, 3, 4, 5, 8, 2, 3, 4, 4];
let cont = 0;
  let maiorRepeticao = 0;
  let repeticao = 0;
  
  for (let index = 0; index < array.length; index++) {
    for (let secondIndex = 0; secondIndex < array.length; secondIndex++) {
      if (array[index] === array[secondIndex]){
        repeticao += 1;
      }
    }
    if (repeticao > maiorRepeticao) {
      maiorRepeticao = repeticao;
      cont = array[index];
    }
  }
  console.log(cont);



//console.log(typeof maior);
//console.log("Número que mais repete: " + maior);

/* let size = 0;
let nome;
  for (let index = 0; index < array.length; index++) {
    console.log(array[index].length);
    if(array[index].length > size) {
      size = array[index].length;
      nome = array[index];
    }
  }
  console.log(nome); */
/* let somatorio = 0;
let number = -1;
if(number >= 0){
for(let index = number; index > 0; index--){
  somatorio += index;
}
console.log(somatorio);
}else {
  console.log("ERRO");
} */
/* let palavra1 = 'joaofernando';
let palavra2 = 'fernan';

let result =  palavra1.endsWith(palavra2);
console.log(result); */
