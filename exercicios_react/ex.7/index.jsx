import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
    <ClassComponent value='Componente Classe' />
, document.getElementById('app'))
// Tag html será renderizada em div com id app
// Para isso será feito um transpiler, chamando o javascript dinamicamente