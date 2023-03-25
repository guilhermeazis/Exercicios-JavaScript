let saldo = 250;

function adicionar(valor){
    return valor + saldo;
}

function subtrair(valor){
    return saldo - valor;
}

function multiplicar(valor){
    return valor * saldo;
}

function dividir(valor){
    return saldo / valor;
}

console.log(adicionar(400));
console.log(subtrair(300));
console.log(multiplicar(12.5));
console.log(dividir(1000));