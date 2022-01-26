import React from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import './Home.css'; //componete esta importando o css

function Home() {
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
                        </Box>
                        <Button variant="outlined" className="botao">Olhar Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_960_720.jpg" alt="center" width="700px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens">
                </Grid>
            </Grid>
        </>
    )
}

export default Home;

// para a fazer a estilização usamos no css ClassName, no css puro usamos css
// na propriedade grid para definir o tamanho da tela em extramento pequeno usa se a propriedade xs - xs = {12}