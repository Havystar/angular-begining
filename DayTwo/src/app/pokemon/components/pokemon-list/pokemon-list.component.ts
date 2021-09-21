import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPokemon {
  id: number,
  height: number,
  is_default: boolean,
  name: string;
  weight: number
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent {

  constructor() { }

  pokemons: IPokemon[] = [];

  // url = 'https://pokeapi.co/api/v2/pokemon';
  // fetchRandomPokemon(id: number): Observable<IPokemon> {
  //   return this.http.get<IPokemon>(`${this.url}/${id}`);
  // }
  private getRadnomId() {
    const min = Math.ceil(1);
    const max = Math.floor(118);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  addPoke(event: any): void {
    let asd: IPokemon;
    // asd = this.fetchRandomPokemon(parseInt(event.target.value));
    // this.pokemons.push();
    //console.log(this.fetchRandomPokemon(1));
    asd = {
      id: 1,
      height: 1,
      is_default: true,
      name: "string",
      weight: 1
    }
    this.pokemons.push(asd);
  }
}
