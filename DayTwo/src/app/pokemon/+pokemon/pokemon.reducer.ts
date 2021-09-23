import { Action, createReducer, on } from '@ngrx/store';
import { ApiService } from '../api.service'
import { IPokemon } from '../pokemon.service'
import { addPokemon, removePokemon } from './pokemon.actions';


export const initialState: IPokemon[] = [{
    
          id: 1,
          height: 2,
          is_default: true,
          name: "res.name,",
          weight: 20
        
}];
// export interface IPokemon {
//     id: number,
//     height: number,
//     is_default: boolean,
//     name: string;
//     weight: number
// }

const pokemonReducer = createReducer(
    initialState,
    on(addPokemon, (state, { pokemon }) => {
        console.log(pokemon);
        console.log(state);

        return [...state, pokemon]
    }),
    on(removePokemon, (state, { pokemonId }) => {
        return state.filter(p => p.id !== pokemonId)
    })
);
export function reducer(state: IPokemon[] | undefined, action: Action) {
    return pokemonReducer(state, action);
}
    /*
    
    pokemons: IPokemon[] = [];
    
      constructor(private apiService: ApiService) { }
    
      getAllPokemons() {
        return this.pokemons;
      }
    
    
      removePokemon(id: number) {
        this.pokemons = this.pokemons.filter(p => p.id !== id)
      }
    
      addPokemon() {
        let pokemon: IPokemon;
        // pokemon = {
        //   id: 1,
        //   height: 2,
        //   is_default: true,
        //   name: "res.name,",
        //   weight: 20
        // }
    
        this.apiService.fetchRandomPokemon().subscribe(
          (res) => {
            pokemon = {
              id: res.id,
              height: res.height,
              is_default: res.is_default,
              name: res.name,
              weight: res.weight
            }
            this.pokemons.push(pokemon);
          });
      }
    
    */

