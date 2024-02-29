import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoDigitarSelect = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoDigitarSelect} required={props.required} value={props.value}>
                {props.itens.map (item => <option key={item}>{item} </option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa

/* 
{props.itens.map(item => <option key={item}>{item}</option>)}: Aqui, para cada item no array props.itens, uma opção (<option>) é criada dentro do <select>. O valor de cada item é exibido como o conteúdo da opção. A propriedade key é usada para ajudar o React a identificar de forma única cada elemento na lista e otimizar a renderização.
*/