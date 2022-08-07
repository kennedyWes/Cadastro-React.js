import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "../DadosEntrega";
import { useEffect } from "react";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";


function FormularioCadastro({ whenSubmit }) {
   const [etapaAtual, setEtapaAtual] = useState(0);
   const [dadosColetados, setDados] = useState ({});
   useEffect(() =>{
      if(etapaAtual === formularios.length -1) {  
         whenSubmit(dadosColetados);
      }
   })

   const formularios = [
      <DadosUsuario whenSubmit={coletarDados} />,
      <DadosPessoais whenSubmit={coletarDados} />,
      <DadosEntrega whenSubmit={coletarDados} />,
      <Typography variant ="h5">Obrigado pelo Cadastro !</Typography>
   ];

   function coletarDados(dados){
      setDados({...dadosColetados, ...dados})
      next();
   }

   function next() {
      setEtapaAtual(etapaAtual +1);   
   }

    return <>
    <Stepper activeStep = {etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formularios[etapaAtual]}
    </>;      
}

export default FormularioCadastro;