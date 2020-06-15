// DESAFIO 1
const idade = 17
// verificar se a pessoa é maior ou tem 18 anos
// se sim, deixa entrar, se não, bloquear a entrada


if (!(idade >= 18) || idade === 17) { // Sendo NÃO idade maior ou igual a 18 ou identico a 17
    console.log(`Bloquear a entrada.`) // FALSE || FALSE = FALSE
} else { 
    console.log(`Deixar entrar.`) // TRUE || FALSE = TRUE
}
// se a pessoa tiver 17 anos    
// avisar para voltar quando fizer 18 anos
if (idade === 17) { // SÓ COLOQUEI PRA VALER A REGRA PEDIDA
    console.log('Volte quando fizer 18 anos')
}