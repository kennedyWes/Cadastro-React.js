import React, { useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import useErros from '../../hooks/useErros';
import ValidacoesCadastro from '../../contexts/validacoesCadastros';

function DadosUsuario({ whenSubmit }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    
    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()) {

            }
            whenSubmit({email, senha});
        }}>
            <TextField 
            value={email}
            onChange={(event) =>{ 
                setEmail(event.target.value)
            }}
                id="email" 
                name="email"
                label="Email" 
                type="email" 
                required
                variant="outlined" 
                margin="normal" 
            fullWidth/>

            <TextField 
            value={senha}
            onChange={(event) =>{ 
                setSenha(event.target.value)
            }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha" 
                name="senha"
                label="Senha" 
                type="password" 
                required
                variant="outlined" 
                margin="normal" 
            fullWidth/>
            
            <Button type="submit" variant="contained" color="primary">Próximo</Button>

        </form>
    );
}

export default DadosUsuario;