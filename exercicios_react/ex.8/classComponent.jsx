import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
    }

    sum(delta){
        this.setState({ value: this.state.value + delta })
        // evoluir o valor do estado, não atribuindo/alterar valor
        // principio da programação funcional
    }
    
    render() {
        // ao menos esse método tem que ser implementado
        return ( 
            //o pq do uso da div: As expressões JSX devem ter um elemento pai.
            // this.props recebendo por herança do Component
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Menos</button>
                <button onClick={() => this.sum(1)}>Mais</button>
            </div>
        )
    }
}


