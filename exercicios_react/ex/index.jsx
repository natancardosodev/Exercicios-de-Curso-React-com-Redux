import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'

ReactDOM.render(
    <Field initialValue='Teste'></Field>
, document.getElementById('app'))
// Tag html será renderizada em div com id app
// Para isso será feito um transpiler, chamando o javascript dinamicamente