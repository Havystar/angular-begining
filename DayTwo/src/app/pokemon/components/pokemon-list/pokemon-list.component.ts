import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent {
  constructor(private pokemonService: PokemonService) { }

  pokemons = this.pokemonService.getAllPokemons();

  deletePokemon(id: number) {
    this.pokemonService.removePokemon(id);
    this.pokemons = this.pokemonService.getAllPokemons();
  }
}
