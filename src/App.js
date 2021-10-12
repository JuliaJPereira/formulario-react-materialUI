import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";
import ValidacoesCadastro from "./components/contexts/ValidacoesCadastro";

import {
  validarCPF,
  validarSenha,
} from "./components/FormularioCadastro/models/validacoes-cadastros";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginTop: "40px" }}
        >
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarFom} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarFom(dados) {
  console.log(dados);
}

export default App;
