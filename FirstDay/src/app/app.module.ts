import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { NameComponent } from './components/name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ToDoComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
