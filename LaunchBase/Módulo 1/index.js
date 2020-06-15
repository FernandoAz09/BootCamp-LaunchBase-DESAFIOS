// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do calculo da média

const alunosDaTurmaA = [ //ARRAY
    {
        nome:'Mayk',
        nota:1.8,
    },
    {
        nome:"Diego",
        nota:10,
    },
    {
        nome:'Fulano',
        nota:2,
    }, 
    {
        nome: 'Mais um aluno',
        nota: 10,
    }
]

const alunosDaTurmaB = [
    {
        nome:'Cleyton',
        nota:10,
    },
    {
        nome:"Robson",
        nota:10,
    },
    {
        nome:'Siclano',
        nota:0,
    },
    {
        nome: 'Novo Aluno',
        nota: 5
    }
]

function calculaMedia(alunos) { // Ao colocar em função, reutilizo o código
    let soma = 0
    for (let i = 0; i < alunos.length; i++) { //Estrutura de repetição
        soma = soma + alunos[i].nota
    } 
    const media = soma / alunos.length // Pegando a soma das notas e dividindo pelo numero de alunos
    return media
}



const media1 = calculaMedia(alunosDaTurmaA) // Reuso
const media2 = calculaMedia(alunosDaTurmaB) // Reuso

function enviaMensagem(media, turma) {  
    //Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A media da ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A media da ${turma} foi menor que 5 `)
    }
}

enviaMensagem(media1, "turmaA") //Reuso
enviaMensagem(media2, "turmaB") //Reuso

// Reaproveitamento de código através de funções, enviando variáveis para dentro do bloco de código
// em formato de parametros e utilizar quantas vezes for necessário, sem precisar reescrever
