const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return { fullName, email: `${email}@trybe.com` };
};

//console.log(newEmployees(employeeGenerator));

const check = (myNumber, number) => myNumber === number;

const prizeDraw = (myNumber, callback) => {
    let number = Math.floor((Math.random() * 5) + 1);
    return callback(myNumber, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

//console.log(prizeDraw(2, check));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5
};


const countPoints = (rightAnswer, studentAnswer, callback) => {
    let count = 0;
    for (let index = 0; index < rightAnswer.length; index += 1) {
        const returnCallback = callback(rightAnswer[index], studentAnswer[index]);
        console.log(returnCallback);
        count += returnCallback;
    }
    return `Resultado final: ${count} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));