import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';


@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.scss']
})

export class PokemonList2Component {
  constructor(private pokemonService: PokemonService) { }

  pokemons = this.pokemonService.getAllPokemons();

  deletePokemon(id: number) {
    this.pokemonService.removePokemon(id);
    //  this.pokemons = this.pokemonService.getAllPokemons();
  }
}
