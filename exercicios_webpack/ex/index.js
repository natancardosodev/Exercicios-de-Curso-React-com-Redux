import Pessoa from './pessoa'
// Mas o browser não reconhece o import
// com isso tem q ser usado um transpiler, o babel

const pessoa = new Pessoa('Natan Cardoso')
console.log(pessoa.toString())