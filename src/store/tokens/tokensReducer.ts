import { Action } from './actions';

export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ""
}

export const tokenRdedicer = (state: TokenState = inicialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokens: action.payload }
        }
        default:
            return state
    }
}