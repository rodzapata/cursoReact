import { Fragment } from "react"

const wordSerntence='frase de prueba'
const numero=145678
const tecnologias=['React','Spring boot','node']
const verdadero=true
const funcionFlecha=()=>1+1
const objeto={nombre:'Curso de javascrip',duracion:4}
const fecha=new Date();

export const Fragmento=()=>{
    return (
        <Fragment>
            <h1>Las variables de JSX son:</h1>
            <h4>Variables tipo String</h4><p>{wordSerntence}</p>
            <h4>Variables tipo numerico</h4><p>{numero}</p>
            <h4>Variables tipo Array</h4><p>{tecnologias}</p>
            <h4>Variables tipo boleano</h4><p>{verdadero}</p>
            <h4>Variables tipo funcion</h4><p>{JSON.stringify(funcionFlecha())}</p>
            <h4>Variables tipo objeto</h4><p>{JSON.stringify(objeto)}</p>
        </Fragment>
    )
}
