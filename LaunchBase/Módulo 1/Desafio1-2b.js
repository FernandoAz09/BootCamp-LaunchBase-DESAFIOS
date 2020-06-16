// Vetores e objetos
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }
// Por exemplo:

// const objeto = {
//   propriedade: [
//     { nome: "C++", especialidade: "Desktop" },
//     { nome: "JavaScript", especialidade: "Web/Mobile" }
//   ]
// };
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop.

const usuario = 
    [
        { nome: "Fernando", idade: 28 },
        { nome: "Mayk", idade: 33 },
        { nome: "Diego", idade: 32 },
        { nome: "Cleiton", idade: 36 },
    ]

const tecnologias = 
    [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]

console.log(`O usuário ${usuario[0].nome} tem ${usuario[0].idade} anos e usa a tecnologia ${tecnologias[2].nome} com especialidade em ${tecnologias[2].especialidade}.`)
//Para imprimir outros usuarios, idades, tecnologias e especialidades, apenas mudar o Índice[].