import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aluno } from "../models/aluno"




function CadastrarAluno() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");


  function CadastrarAluno(e: any) {
    const aluno: Aluno = {
      nome: nome,
      dataNascimento: dataNascimento,
    };

    fetch("http://localhost:5093/provaJoao/aluno/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aluno),
    })
      .then((resposta) => resposta.json())
      .then((aluno: Aluno) => {
        navigate("/pages/tarefa/listar");
      });
    e.preventDefault();
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={CadastrarAluno}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite o Nome"
          onChange={(e: any) => setNome(e.target.value)}
          required
        />
        <br />
        <label>Descricao:</label>
        <input
          type="text"
          placeholder="Digite a sua dataNascimento"
          onChange={(e: any) => setDataNascimento(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarAluno;