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