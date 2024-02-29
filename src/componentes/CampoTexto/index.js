import './CampoTexto.css'

const CampoTexto = (props) => {


    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} minLength={props.minvalor} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto


/* Props é uma propriedade, que pode ser usada com qualquer inicial, não necessáriamente props. Usada para aproveitar o codigo em varias outras partes do código */ 

/* Para fazer a interpolação de uma string e uma variável, utilizamos o método JS Vanilla EX :

    const placeholderModificado = `O valor do meu placeholder e${props.placeholder}`

Assim, podemos utilizar String e Variável no mesmo ambiente
*/