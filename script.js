function jogoParOuImpar() {
    // Solicita ao usuário para escolher par ou ímpar
    let escolhaUsuario = prompt("Escolha par (digite 'par') ou ímpar (digite 'impar'):").toLowerCase();

    // Valida a escolha do usuário
    while (escolhaUsuario !== 'par' && escolhaUsuario !== 'impar') {
        escolhaUsuario = prompt("Escolha inválida. Escolha par (digite 'par') ou ímpar (digite 'impar'):").toLowerCase();
    }

    // Gera um número aleatório para o robô (entre 0 e 5)
    let numeroRobo = Math.floor(Math.random() * 6);

    // Solicita ao usuário para escolher um número entre 0 e 5
    let numeroUsuario = parseInt(prompt("Escolha um número entre 0 e 5:"));

    // Valida a escolha do usuário
    while (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 5) {
        numeroUsuario = parseInt(prompt("Escolha inválida. Escolha um número entre 0 e 5:"));
    }

    // Mostra a escolha do robô
    console.log(`O robô escolheu o número: ${numeroRobo}`);

    // Calcula a soma dos números escolhidos
    let soma = numeroUsuario + numeroRobo;

    // Determina se a soma é par ou ímpar
    let resultado = soma % 2 === 0 ? 'par' : 'impar';

    // Mostra o resultado
    console.log(`A soma dos números é: ${soma}`);
    console.log(`Resultado: ${resultado}`);

    // Verifica quem ganhou
    if ((resultado === 'par' && escolhaUsuario === 'par') || (resultado === 'impar' && escolhaUsuario === 'impar')) {
        alert("Você ganhou! " + ", o resultado foi: " + soma);
      
    } else {
        alert("O robô ganhou!"  + ", o resultado foi: " + soma);
       
    }
}