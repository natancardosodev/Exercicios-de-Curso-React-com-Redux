const produto = {
    nome: 'Caneta Bic Preta',
    preco: 19.90,
    desconto: 0.05
}

function clone(objeto) {
    return {...objeto }
    // Operador Spread '...' - espalhar, clonar objetos
    // Para isso deve ser adiciondo:
    // transform-object-rest-spread
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bica Azul'

console.log(produto, novoProduto)