import { createAction, props } from '@ngrx/store';
import { IPokemon } from '../pokemon.service';

export const addPokemon = createAction('[pokemon] Add pokemon', props<{ pokemon: IPokemon }>());
export const removePokemon = createAction('[pokemon] Remove pokemon', props<{ pokemonId: number }>());