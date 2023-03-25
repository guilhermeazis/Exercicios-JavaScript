let a = 12;
let b = 6;
let c = 8;
/* 1 */
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/* 2 */

if (a > b) {
    console.log(`A maior que B: ${a}`);
} else if (b > a) {
    console.log(`B maior que A: ${b}`);
}

/* 3 */

if (a > b && a > c) {
    console.log(`A maior que B e maior que C: ${a}`);
} else if (b > a && b > c) {
    console.log(`B maior que A e maior que C: ${b}`);
} else if (c > a && c > b) {
    console.log(`C maior que A e maior que B: ${c}`);
}

/* 4 */
let value = -8;

if (value > 0) {
    console.log('positive');
} else if (value < 0) {
    console.log('negative');
} else if (value === 0) {
    console.log('zero');
}

/* 5 */
let angle1 = 60;
let angle2 = 60;
let angle3 = 60;
let sum = angle1 + angle2 + angle3;

if (angle1 > 0 && angle2 > 0 && angle3 ) {
    if (sum === 180) {
        console.log('true');
    } else {
        console.log('false');
    }
} else {
    console.log('Ângulo inválido! Para ser aceito tem que ser um valor maior que 0')
}

/* 6 */
let part = 'cavalo';
let partLowerCase = part.toLowerCase();


switch(partLowerCase){
    case 'peão':
        console.log("No primeiro movimento do peão, ele pode andar tanto 1 como 2 casas para frente, dependendo da sua estratégia de abertura. Depois disso, entretanto, o peão só pode se mover 1 casa para frente a cada rodada e nunca pode se mover para trás. Para capturar outra peça, o peão só pode capturar aquelas que estiverem em qualquer uma das casas nas diagonais a frente da sua posição.");
        break;

    case 'cavalo':
        console.log("O cavalo também é único na forma de se mover. Enquanto outras peças se movem em linha reta ou na diagonal, ele se mexe em formato de L. Ele pode se mover tanto duas casas para frente e uma para a direita ou para a esquerda, quanto uma casa para a esquerda ou para a direita e duas para frente.");
        break;

    case 'bispo':
        console.log("Na questão do movimento, os bispos se movem apenas na diagonal, mas também podem ir de um canto a outro do tabuleiro, dentro da sua respectiva cor.");
        break;
    
    case 'torre':
        console.log("O movimento dessa peça é ao longo de linhas retas.");
        break;

    case 'rainha':
        console.log("Ela combina o poder da diagonal dos bispos e a linha reta da torre.");
        break;

    case 'rei':
        console.log("Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.");
        break;

    default:
        console.log("Peça não faz parte do jogo de xadrez");
}

/* 7 */
let grade = 76;
if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

/* 8 */
let number1 = 1;
let number2 = 3;
let number3 = 5;
let isEven = false;

if (number1 % 2 === 0 || number2 % 2 === 0 ||  number3 % 2 === 0){
    isEven = true;
} 
console.log(isEven);

/* 9 */
let isOdd = false;

if (number1 % 1 === 0 || number2 % 1 === 0 ||  number3 % 1 === 0){
    isOdd = true;
} 
console.log(isOdd);

/* 10 */
let costOfProduct = 7;
let saleValue = 10;
if (costOfProduct >= 0 && saleValue >= 0) {
    let totalCostOfProduct = costOfProduct * 1.2;
    let totalProfit = (saleValue - totalCostOfProduct) * 1000;
    console.log(totalProfit);
} else {
    console.log("Error, os valores não podem ser negativos!");
}

/* 11 */
let aliquotINSS;
let aliquotIR;
let grossSalary = 2000.00;
if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}
let baseSalary = grossSalary - aliquotINSS;
if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};
console.log("Salário: " + (baseSalary - aliquotIR));