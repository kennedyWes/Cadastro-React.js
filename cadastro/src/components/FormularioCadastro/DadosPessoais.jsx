import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../contexts/validacoesCadastros";
import useErros from "../../hooks/useErros";

function DadosPessoais({ whenSubmit }) {
   const [cpf, setCpf] = useState("");
   const [nome, setNome] = useState("");
   const [sobrenome, setSobrenome] = useState("");
   const [promocoes, setPromocoes] = useState(true);
   const [novidades, setNovidades] = useState(true);
   const validacoes = useContext(validacoesCadastro)
   const [erros, validarCampos, possoEnviar] = useErros(validacoes);

   
   return (
        <form
            onSubmit = {(event) => {
               event.preventDefault();
               if(possoEnviar()) {
                  whenSubmit({cpf, nome, sobrenome, promocoes, novidades});
               }
            }}
        >
           <TextField 
              value = {cpf}
              onChange = {(event) => {
                setCpf(event.target.value);
             }}
              
              onBlur = {validarCampos}
              error = {!erros.cpf.valido}
              helperText = {erros.cpf.texto}
              id = "CPF"
              name= "cpf" 
              label = "CPF" 
              variant = "outlined" 
              margin = "normal" 
              fullWidth
           />

           <TextField 
              value = {nome}
              onChange = {(event) => {
                setNome(event.target.value);
              }}
              onBlur={validarCampos}
              error={!erros.nome.valido}
              helperText={erros.nome.texto}
              id = "nome" 
              name = "nome"
              label = "Nome" 
              variant = "outlined" 
              margin = "normal" 
              fullWidth
           />

           <TextField 
              value = {sobrenome}
              onChange = {(event) => {
                 setSobrenome(event.target.value);
              }}

              id = "sobrenome" 
              name = "sobrenome"
              label = "Sobrenome" 
              variant = "outlined" 
              margin = "normal" 
              fullWidth
           />

           <FormControlLabel 
              label = "Promoções" 
              control = {
              <Switch 
                  checked = {promocoes}
                  onChange = {(event) => {
                     setPromocoes(event.target.checked);
                  }}

                   name = "promocoes" 
                   color = "primary"
                  />
               }
           />
           
           <FormControlLabel 
              label = "Novidades" 
              control = {
              <Switch 
                  checked = {novidades}
                  onChange = {(event) => {
                     setNovidades(event.target.checked);
                  }}    

                  name = "novidades" 
                  color = "primary"
                  />
               }
           />
           

           <Button 
              type = "submit" 
              variant = "contained" 
              color = "primary">Próximo
           </Button>
        </form>
    );
}

export default DadosPessoais;