import './BotaoCancel.css'

const Botaocancelar = (props) => {
    const Cancelar = () => {
      window.location.reload(false);
    };
  
    return (
     
      <button className='Botaocancelar' onClick={Cancelar}>
        {props.children}
      </button>
    );
  };

  export default Botaocancelar