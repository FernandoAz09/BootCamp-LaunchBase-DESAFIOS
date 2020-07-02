// Busca por tecnologia
// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

// Por exemplo:

// function checaSeUsuarioUsaCSS(usuario) {
//   // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
//   // SE encontrar, retorne true da função, caso contrário retorne false
// }
// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

// for (let i = 0; i < usuarios.length; i++) {
//   const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

//   if (usuarioTrabalhaComCSS) {
//     console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
//   }
// }

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') {
            return true
        }
    }

    return false
}

for (let usuario of usuarios) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuario.nome} trabalha com CSS`);
    }
}

// const jogadores= [
//     { nome: "Branks", jogo: ["APEX"] },
//     { nome: "BalthorHell", jogo: ["APEX", "PUBG lite"] },
//     { nome: "ASM-BUGS", jogo: ["APEX", "PUBG lite"] }
// ]

// function checaSeJogaJogo4players(jogador) {
//     for (let jogo of jogador.jogo) {
//         if (jogo == 'PUBG lite') {
//             return true
//         }
//     }

//     return false
// }

// for (let jogador of jogadores) {
//     const jogadorJogaJogo4players = checaSeJogaJogo4players(jogador)
  
//     if (jogadorJogaJogo4players) {
//       console.log(`O jogador ${jogador.nome} está jogando um jogo de 4 players`)
//     } else {
// 	console.log(`O jogador ${jogador.nome} está jogando um jogo de apenas pra 3 players :/ e não vai ter como te chamar pra jogar`)
// 	}
// }