const webpack = require('webpack')
    // referencia para o webpack

module.exports = {
    // objeto que configura toda a aplicação
    // realização de transpiler
    // para o node.js colocando export ficará visivel fora desse arquivo
    entry: './ex/index.js',
    // ponto de entrada para que a aplicação seja carregada pelo webpack
    output: {
        // onde será disponibilizado o resultado
        path: __dirname + '/public',
        // dirname é um variavel de ambente do node.js
        // para aponta para o diretório atual
        filename: './bundle.js'
            // ./ diretório relativo
    },
    devServer: {
        // servidor focado para o desenvolvimento
        // recarrega o browser quando modificado
        // gera o bundle
        port: 8085,
        contentBase: './public'
            // pasta base onde terá todos os arquivos a serem carregados
            // dentro da pasta public haverá um index.html 
            // que fará referência para o bundle, para testes de console
    }
}