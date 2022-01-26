import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import userLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../model/UserLogin';
import './Login.css'; 

function Login() {
    let history = useHistory();
    const [token, setToken] = userLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

        useEffect(()=>{
            if(token != ''){
                history.push('/home')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        try{
            await login('/usuarios/logar', userLogin, setToken)
            
            alert('Usuario logado com sucesso');
        }catch(error){
            alert('Dados do usuario não validos, tente novamente!');
        }   

    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1' >Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange = {(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange = {(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastra-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;


/*
comentario
// a camada que acontece as aterações de dados quando o usuario digita algo e a camada de Estado (State)
// a cama estado (state) e onde se acontece as alterações de dados quando em s o usuario digita no React.js
// o teken e gravado no localStorage
*/