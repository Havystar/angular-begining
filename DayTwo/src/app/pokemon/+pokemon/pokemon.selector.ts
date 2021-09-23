import { IPokemon } from '../pokemon.service';

export interface AppState {
    pokemons: IPokemon[];
}

export const selectCars = (state: AppState) => state.pokemons;

export const selectAvailableCars = (state: AppState) => state.pokemons.filter(p => p.id > 50)