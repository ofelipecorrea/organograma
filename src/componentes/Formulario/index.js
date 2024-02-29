import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import Botao from "./../Botao/index";
import { useState } from "react";
import Botaocancelar from './../BotaoCancel/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const Formulario = () => {
 

  const times = [
    "Escolha o seu time",
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX E Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [Name, setNome] = useState("");
  const [Cargo, setCargo] = useState("");
  const [Imagem, setImagem] = useState("");
  const [tempProg, settempProg] = useState("");
  const [stCargo, setForm] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log(
      "Form foi Submetido =>",
      Name,
      Cargo,
      tempProg,
      Imagem,
      stCargo
    );
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu Nome"
          valor={Name}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
          valor={Cargo}
          minvalor={2}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da Imagem"
          valor={Imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Tempo de Programação"
          placeholder="Informe o tempo de programação"
          valor={tempProg}
          aoAlterado={(valor) => settempProg(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={times}
          valor={stCargo}
          aoAlterado={(valor) => setForm(valor)}
        />
        <Botao>
        <FontAwesomeIcon className="Checado" icon={faCheck} />
          Criar
        </Botao>
        <FontAwesomeIcon className="Lixeira" icon={faTrash}/>
        <Botaocancelar>
          Apagar 
        </Botaocancelar>
      </form>
    </section>
  );
};

export default Formulario;
