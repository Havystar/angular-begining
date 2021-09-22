import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-dashbord',
  templateUrl: './pokemon-dashbord.component.html',
  styleUrls: ['./pokemon-dashbord.component.scss']
})
export class PokemonDashbordComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
  addPokemon() {
    this.pokemonService.addPokemon();
  }
}
