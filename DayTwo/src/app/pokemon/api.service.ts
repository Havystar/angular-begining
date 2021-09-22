import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from './pokemon.service'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = 'http://pokeapi.co/api/v2/pokemon';

  fetchRandomPokemon(): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.url}/${this.getRadnomId()}`);
  }
  private getRadnomId() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
