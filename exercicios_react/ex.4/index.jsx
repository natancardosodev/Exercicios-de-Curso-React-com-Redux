import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, {Segundo} from './component'
// Traz Segundo de dentro do Component

ReactDOM.render(<div>
    <Primeiro/>
    <Segundo/>
</div>, document.getElementById('app'))
// Tag html será renderizada em div com id app
// Para isso será feito um transpiler, chamando o javascript dinamicamente