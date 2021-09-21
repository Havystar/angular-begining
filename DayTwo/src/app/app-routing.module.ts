import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './routing/error404/error404.component';
import { MainComponent } from './home/main/main.component';
import { PatroniteDashbordComponent } from './patronite/components/patronite-dashbord/patronite-dashbord.component';
import { PokemonDashbordComponent } from './pokemon/components/pokemon-dashbord/pokemon-dashbord.component';
import { PokemonListComponent } from './pokemon/components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'patronite', component: PatroniteDashbordComponent },
  { path: 'surprise', component: PokemonListComponent },
  // { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
