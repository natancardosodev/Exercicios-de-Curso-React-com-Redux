import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastname='Silva'>
        <Member name='Guilherme' />
        <Member name='João' />
        <Member name='Fernanda' />
    </Family>
, document.getElementById('app'))
// Tag html será renderizada em div com id app
// Para isso será feito um transpiler, chamando o javascript dinamicamente