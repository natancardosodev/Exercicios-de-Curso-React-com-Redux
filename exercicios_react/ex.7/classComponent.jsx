import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render() {
        return (
            // ao menos esse método tem que ser implementado
            <h1>{this.props.value}</h1>
            // this.props recebendo por herança do Component
        )
    }
}


