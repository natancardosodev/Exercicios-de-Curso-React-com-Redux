const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8085,
        contentBase: './public'
    },
    resolve: {
        // necessário para usar dentro de arquivos jsx
        // importando arquivos de outros formatos
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            // jsx - código react em javascript
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}