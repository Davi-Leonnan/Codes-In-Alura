alert('Bem vindo(a) ao sistema de calendário Call a Day');

// 01

diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// 02

Numero = prompt('Digite o número desejado: ')
if (Numero <0) {
    alert('Seu número é negativo.');
} else if (Numero >0) {
    alert('Seu número é positivo');
} else {
    alert('Nenhum número foi informado.');
}

// 03

pontuacao = prompt('Digite sua pontuação marcada: ')
if (_pontuacao => 100) {
    console.logt('Parabéns! Você venceu!');
} else {
    console.log('Tente novamente pára ganhar.')
}

// 04

let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

// 05

let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);

