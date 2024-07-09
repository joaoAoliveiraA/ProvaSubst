import { useEffect, useState } from "react";
import { IMC } from "../models/IMC"
import axios from "axios";

function ListaImc() {
  const [imc, setIMCs] = useState<IMC[]>([]);

  useEffect(() => {
    carregarIMCS();
  }, []);

  function carregarIMCS() {
    fetch("http://localhost:5093/provaJoao/imc/listar")
      .then((resposta) => resposta.json())
      .then((imc: IMC[]) => {
        console.table(IMCs);
        setIMCs(IMCs);
      });
  }

  function alterar(id: string) {
    console.log(`Id: ${id}`);
    axios
      .put(`http://localhost:5093/provaJoao/imc/alterar/${id}`)
      .then((resposta) => {
        setIMCs(resposta.data);
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
            <th>Data de nascimento</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>IMC</th>
            <th>Classificaçao</th>
            <th>Criado em</th>
            <th>Alterar Status</th>
          </tr>
        </thead>
        <tbody>
          {IMCs.map((imc) => (
            <tr key={imc.imcId}>
              <td>{imc.imcId}</td>
              <td>{imc.nome}</td>
              <td>{imc.dataNascimento}</td>
              <td>{imc.altura}</td>
              <td>{imc.peso}</td>
              <td>{imc.numeroIMC}</td>
              <td>{imc.estagioIMC}</td>
              <td>{imc.criadoEm}</td>
              <td>
                <button
                  onClick={() => {
                    alterar(imc.imcId!);
                  }}
                >
                  Alterar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaImc;