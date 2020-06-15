// DESAFIO 1
const idade = 17
// verificar se a pessoa é maior ou tem 18 anos
// se sim, deixa entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos 

if (!(idade >= 18) || idade === 17) {
    console.log(`Bloquear a entrada.`)
} else { 
    console.log(`Deixar entrar.`)
}   
// avisar para voltar quando fizer 18 anos
if (idade === 17) {
    console.log('Volte quando fizer 18 anos')
}