import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


export interface IPokemon {
  id: number,
  height: number,
  is_default: boolean,
  name: string;
  weight: number
}

// @Injectable({
//   providedIn: 'root'
// })

// export class PokemonService {
//   pokemons: IPokemon[] = [];

//   constructor(private apiService: ApiService) { }

//   getAllPokemons() {
//     return this.pokemons;
//   }


//   removePokemon(id: number) {
//     this.pokemons = this.pokemons.filter(p => p.id !== id)
//   }

//   addPokemon() {
//     let pokemon: IPokemon;

//     this.apiService.fetchRandomPokemon().subscribe(
//       (res) => {
//         pokemon = {
//           id: res.id,
//           height: res.height,
//           is_default: res.is_default,
//           name: res.name,
//           weight: res.weight
//         }
//         this.pokemons.push(pokemon);
//       });
//   }

// }
