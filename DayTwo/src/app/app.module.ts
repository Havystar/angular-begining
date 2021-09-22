import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './routing/nav/nav.component';
import { Error404Component } from './routing/error404/error404.component';
import { MainComponent } from './home/main/main.component';
import { PokemonItemComponent } from './pokemon/components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonDashbordComponent } from './pokemon/components/pokemon-dashbord/pokemon-dashbord.component';
import { PatroniteDashbordComponent } from './patronite/components/patronite-dashbord/patronite-dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Error404Component,
    MainComponent,
    PokemonItemComponent,
    PokemonListComponent,
    PokemonDashbordComponent,
    PatroniteDashbordComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
