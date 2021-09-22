import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPokemon } from '../../pokemon.service'
@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() pokemonItem!: IPokemon;
  @Output() removePokemon = new EventEmitter<number>();

  removeItem(pokemon: IPokemon) {
    this.removePokemon.emit(pokemon.id);
  }
}
