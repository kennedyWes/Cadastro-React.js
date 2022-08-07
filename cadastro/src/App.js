import React, { Component } from "react";
import './App.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import {Container, Typography } from "@material-ui/core"
import ValidacoesCadastro from "./contexts/validacoesCadastros";
import {validarCPF, validarSenha} from "./models/cadastro"

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
          <Typography variant="h5" component="h1" align="center">
            Preencha seu cadastro
          </Typography>
          <ValidacoesCadastro.Provider
               value= {{cpf:validarCPF, senha:validarSenha, nome:validarSenha}}
          >
          <FormularioCadastro whenSubmit = {whenSubmitForm} />
          </ValidacoesCadastro.Provider>
      </Container>      
    );
  }
}

  function whenSubmitForm(dados) {
    console.log(dados);
  }


export default App;
