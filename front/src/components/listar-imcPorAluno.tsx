import { useEffect, useState } from "react";
import { IMC } from "../models/IMC"
import axios from "axios";

function ListarImcPorAluno() {
  const [imc, setIMCs] = useState<IMC[]>([]);

  useEffect(() => {
    carregarIMCS();
  }, []);

  function carregarIMCS() {
    fetch("http://localhost:5093/provaJoao/imc/listarporaluno")
      .then((resposta) => resposta.json())
      .then((imc: IMC[]) => {
        console.table(IMCs);
        setIMCs(IMCs);
      });
  }

  return (
    <div>
      <h1>Listar IMC</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Id IMC</th>
            <th>Nome aluno</th>
            <th>Classificaçao</th>
          </tr>
        </thead>
        <tbody>
          {IMCs.map((imc) => (
            <tr key={imc.imcId}>
              <td>{imc.imcId}</td>
              <td>{imc.nome}</td>
              <td>{imc.estagioIMC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarImcPorAluno;