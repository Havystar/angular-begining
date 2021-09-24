import { IPokemon } from '../pokemon.service';

export interface AppState {
    pokemons: IPokemon[];
}

export const selectPokemons = (state: AppState) => state.pokemons;

export const selectPokemonsWhereIdIsOverFifty = (state: AppState) => state.pokemons.filter(p => p.id > 50);