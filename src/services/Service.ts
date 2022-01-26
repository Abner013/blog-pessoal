import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {          
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {          // /usuario/logar
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const busca = async (url: any, setDado: any, header: any) => {         
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const buscaId = async (url: any, setDado: any, header: any) => {         
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const post = async (url: any, dados: any, setDado: any, header: any) => {         
    const resposta = await api.post(url,header)
    setDado(resposta.data)
}

export const put = async (url: any, setDado: any, header: any) => {         
    const resposta = await api.put(url,header)
    setDado(resposta.data)
}

export const deleteId = async (url: any, header: any) => {         
    await api.delete(url,header)
}

// o propósito das models e dos services é Configurar o que for de modelos(banco de dados) e requisições para à api

/* Typescript (Javascript) por si é síncrono, o que significa que todas às suas funções são lidas uma após à outra. 
Para quebrarmos esse paradigma usamos funções Async Await
*/
