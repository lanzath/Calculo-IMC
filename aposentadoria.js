// Informações da pessoa
const name = 'Lanza';
const gender = 'F';
const age = 27;
const contribution = 2;

// Verificação de gender e tempo de contribuição ou regra 85-95
if (gender === 'M') {
    if (contribution >= 35 || (contribution + age) >= 95) {
        console.log(`${name}, você pode se aposentar!`)
    } else {
        console.log(`${name}, você ainda não pode se aposentar!`)
    }
} else if (gender === 'F') {
    if (contribution >= 30 || (contribution + age) >= 85) {
        console.log(`${name}, você pode se aposentar!`)
    } else {
        console.log(`${name}, você ainda não pode se aposentar!`)
    }
}
