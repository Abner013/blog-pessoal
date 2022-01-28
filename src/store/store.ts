import { createStore } from 'redux';
import { tokenRdedicer } from './tokens/tokensReducer';

const store = createStore(tokenRdedicer);

export default store;


// atributo acessa às informações do store é o history