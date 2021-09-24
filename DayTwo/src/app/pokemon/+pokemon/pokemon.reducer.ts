import { Action, createReducer, on } from '@ngrx/store';
import { IPokemon } from '../pokemon.service'
import { addPokemon, removePokemon } from './pokemon.actions';


export const initialState: IPokemon[] = [];

const pokemonReducer = createReducer(
    initialState,
    on(addPokemon, (state, { pokemon }) => {
        return [...state, pokemon]
    }),
    on(removePokemon, (state, { pokemonId }) => {
        return state.filter(p => p.id !== pokemonId)
    })
);
export function reducer(state: IPokemon[] | undefined, action: Action) {
    return pokemonReducer(state, action);
}
