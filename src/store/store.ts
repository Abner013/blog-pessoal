import { createStore } from 'redux';
import { tokenReducer } from './tokens/tokensReducer';

const store = createStore(tokenReducer);

export default store;


// atributo acessa às informações do store é o history