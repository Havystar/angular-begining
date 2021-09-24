import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../../pokemon.service';
import { AppState, selectPokemons, selectPokemonsWhereIdIsOverFifty } from '../../+pokemon/pokemon.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removePokemon } from '../../+pokemon/pokemon.actions';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent {
  pokemons$: Observable<IPokemon[]>;
  selectedPokemons$: Observable<IPokemon[]>;
  constructor(private store: Store<AppState>) {
    this.pokemons$ = this.store.select(selectPokemons);
    this.selectedPokemons$ = this.store.select(selectPokemonsWhereIdIsOverFifty);
  }


  deletePokemon(pokemonId: number) {
    this.store.dispatch(removePokemon({ pokemonId }))
  }
}
