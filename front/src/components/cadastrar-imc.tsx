import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aluno } from "../models/aluno"
import { IMC } from "../models/IMC"

function CadastrarIMC() {
  const navigate = useNavigate();
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  
  function CadastrarIMC(e: any) {
    const imc: IMC = {
      peso: peso,
      altura: altura,
    };

    fetch("http://localhost:5093/provaJoao/imc/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imc),
    })
      .then((resposta) => resposta.json())
      .then((imc: IMC) => {
        navigate("/imc/listar");
      });
    e.preventDefault();
  }

  return (
    <div>
      <h1>Cadastrar IMC</h1>
      <form onSubmit={CadastrarIMC}>
        <label>Peso:</label>
        <input
          type="text"
          placeholder="Digite o peso"
          onChange={(e: any) => setPeso(e.target.value)}
          required
        />
        <br />
        <label>Altura:</label>
        <input
          type="text"
          placeholder="Digite a altura"
          onChange={(e: any) => setAltura(e.target.value)}
        /> 
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarIMC;