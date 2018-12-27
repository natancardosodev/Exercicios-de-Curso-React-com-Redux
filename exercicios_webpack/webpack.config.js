const webpack = require('webpack')
    // referencia para o webpack
const ExtractTextPlugin = require('extract-text-webpack-plugin')
    // leitura dos arquivos css

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
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        // sistema de modulos do ES2015 com Babel, aceitar os imports
        loaders: [{
            // carregador de arquivos
            test: /.js?$/,
            // arquivos terminados .js
            loader: 'babel-loader',
            // dependecia a ser usada
            exclude: /node_modules/,
            // não seja lida esse diretorio
            query: {
                presets: ['es2015', 'react'],
                // linguagens a serem transpiladas
                plugins: ['transform-object-rest-spread']
                    // fará cópias de objetos em rest, ex. 3
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}