import React from 'react'

function childrenWithProps(children, props){
    return React.Children.map(props.children,
        child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }

// { React.cloneElement(props.children, {...props}) } --> para um unico elemento
// Use map() quando: é preciso traduzir/mapear todos os elementos 
// em um array para outro conjunto de valores.
// Exemplo: converter temperatura de Fahrenheit para Celsius.
// map: transforma um conjunto de filhos que não tem 
// as propriedades do pai para outro conjunto