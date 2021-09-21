import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPokemon } from '../pokemon-list/pokemon-list.component'
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
}
