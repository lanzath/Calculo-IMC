// Informações da pessoa
const name = 'Lanza';
const weight = 95.5;
const height = 1.80;

// Cálculo do IMC
const imc = weight / (Math.pow(height, 2));

// Condição para saber se está ou não acima do peso
if (imc >= 30 ) {
    console.log(`${name}, você está gordo! :(`)
} else {
    console.log(`${name}, você não está gordo! :D`)
}
