let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* let numbers = [70, 8, 100, 2]; */
/* 1, 2 e 3 */
let sum = 0;
let qtd = numbers.length;

for (let index = 0; index < qtd; index += 1) {
    sum += numbers[index];
}
//console.log(sum);

let average = sum / qtd;
console.log(average);

if (average > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a que 20');
}

/* 4 */
let bigger = 0;
for (let secondIndex = 0; secondIndex < qtd; secondIndex += 1) {
    if(bigger < numbers[secondIndex]) {
        bigger = numbers[secondIndex];
    }
}
console.log(bigger);

/* 5 */
let odd = 0;

for (let index = 0; index < qtd; index += 1) {
    if (numbers[index] % 2 === 1){
        odd += 1;
    }
}
if (odd === 0) {
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log(odd);
}

/* 6 */
let smaller = numbers[0];
for (let secondIndex = 0; secondIndex < qtd; secondIndex += 1) {
    if(smaller > numbers[secondIndex]) {
        smaller = numbers[secondIndex];
    }
}
console.log(smaller);

/* 7 */
let array = [];
for (let index = 0; index <= 25; index += 1) {
    array.push(index);
}
console.log(array);

/* 8 */
for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
};