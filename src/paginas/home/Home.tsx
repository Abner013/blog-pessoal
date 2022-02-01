import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import TabPostagem from "../../components/postagens/tabpostagem/tabpostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/modalPostagem";
import './Home.css';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estár logado',{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/logar")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem vindo(a)!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Nos conte o que está pensado!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className="botao">Olhar Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_960_720.jpg" alt="center" width="700px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens">
                </Grid>
            </Grid>
        </>
    ); 
}

export default Home;

// import './Home.css'; -> componete esta importando o css
// para a fazer a estilização usamos no css ClassName, no css puro usamos css
// na propriedade grid para definir o tamanho da tela em extramento pequeno usa se a propriedade xs - xs = {12}