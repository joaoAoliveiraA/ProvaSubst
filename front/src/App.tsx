import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CadastrarAluno from "./components/cadastrar-aluno";
import ListaImc from "./components/listar-imc";
import CadastrarIMC from "./components/cadastrar-imc";
import ListarImcPorAluno from "./components/listar-imcPorAluno";



function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/provaJoao/aluno/cadastrar"}>
                  Listar Tarefas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/provaJoao/imc/cadastrar"}>
                  Listar Tarefas Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/provaJoao/imc/listar"}>
                  Listar Tarefas Não Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/provaJoao/imc/listarporaluno"}>
                  Cadastrar Tarefa{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ListaImc />} />
            <Route
              path="/provaJoao/aluno/cadastrar"
              element={<CadastrarAluno />}
            />
            <Route
              path="/provaJoao/imc/cadastrar"
              element={<CadastrarIMC />}
            />
            <Route
              path="/provaJoao/imc/listar"
              element={<ListaImc />}
            />
            <Route
              path="/provaJoao/imc/listarporaluno"
              element={<ListarImcPorAluno />}
            />
          </Routes>
          <footer>
            <p>Joao Armstrong</p>
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;