import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPokemon } from '../../pokemon.service';
import { addPokemon } from '../../+pokemon/pokemon.actions'
import { Observable } from 'rxjs';
import { removePokemon } from '../../+pokemon/pokemon.actions';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-pokemon-dashbord',
  templateUrl: './pokemon-dashbord.component.html',
  styleUrls: ['./pokemon-dashbord.component.scss']
})


export class PokemonDashbordComponent {

  constructor(private apiService: ApiService, private store: Store) {

  }
  addPokemonToStore() {
    let pokemon: IPokemon;
    this.apiService.fetchRandomPokemon().subscribe(
      (res) => {
        pokemon = {
          id: res.id,
          height: res.height,
          is_default: res.is_default,
          name: res.name,
          weight: res.weight
        }
        this.store.dispatch(addPokemon({ pokemon }))
      });
  }

  addPokemon() {
    this.addPokemonToStore();
  }
}
