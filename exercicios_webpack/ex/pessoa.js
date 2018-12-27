export default class Pessoa {
    // export: sistema de modulos do ES2015
    constructor(nome) {
        this.nome = nome
            // passa a ser um atributo que pertence a classe
    }

    toString() {
        return `Pessoa: ${this.nome}`
    }
}