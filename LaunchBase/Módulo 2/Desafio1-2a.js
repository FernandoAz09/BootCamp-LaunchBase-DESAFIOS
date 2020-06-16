// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

// Nome: Rocketseat

// Cor: Roxo

// Foco: Programação

// Endereço:

// Rua: Rua Guilherme Gembala
// Número: 260

const usuario = {
    nome: "Diego",
    cor: "roxo", 
    foco: "Programação",
    empresa: {
        nome: "Rocketseat",  
        endereco: "Rua Guilherme Gembala",
        numero: 260
    }
}

// Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
// Obs. Para imprimir em tela utilize o formato de template strings, por exemplo
// console.log(`O nome do usuário é ${usuario.nome}`);
console.log(`O nome do usuário é ${usuario.nome}`)

// Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
// A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco}, ${usuario.empresa.numero}.`)