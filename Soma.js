const readline = require('readline');

// Cria uma interface para ler e escrever no console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para ler um número do usuário
function lerNumero(pergunta, callback) {
  rl.question(pergunta, (entrada) => {
    // Converte a entrada para número e chama o callback
    callback(parseFloat(entrada));
  });
}

// Lê o primeiro número
lerNumero('Digite o primeiro número: ', (numero1) => {
  // Lê o segundo número
  lerNumero('Digite o segundo número: ', (numero2) => {
    // Calcula a soma dos dois números
    const soma = numero1 + numero2;

    // Exibe o resultado da soma
    console.log(`A soma de ${numero1} e ${numero2} é ${soma}`);

    // Fecha a interface após a operação
    rl.close();
  });
});
