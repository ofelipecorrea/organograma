import './Botao.css'

const Botao = (props) => {
    return (

        <button className='botao'>
            {props.children}
        </button>
        
    )

}


export default Botao


/* Caso eu for utilizar um icone, uma imagem ou algo que seja importado para dentro do botao para estiliza-lo. Deverei utilizar o props.children, afim de declara-lo dentro da TAG 
    EX : 
        <button className='botao'> Um botao
            {props.children} Que ira receber o seu valor atraves da sua familiaridade de tag 
        </button>
        
        <Botao>Crie o Card</Botao>
*/