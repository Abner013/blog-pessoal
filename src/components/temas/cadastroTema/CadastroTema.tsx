import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../model/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useHistory, useParams} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function CadastroTema() {
    
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const [token, setTolen] = useLocalStorage('token');
    const [tema, serTema] = useState<Tema>({
        id: 0;
        descricao: ''
    })

    useEffect(() =>{
        if(token ='')
    })

    return (
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;

