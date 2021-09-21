import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})


export class NameComponent {
  imie = "";
  powitanie = "Dobry wieczór";
  constructor() {
    let date = new Date();
    if (date.getHours() > 5 && date.getHours() < 19) {
      this.powitanie = "Dzień dobry";
    }
    let fromLS = localStorage.getItem('name');
    if (fromLS != "" && fromLS != undefined) {
      this.imie = fromLS;
    }
  }

  setName(event: any): void {
    if (event.target.value != "") {
      this.imie = event.target.value;
      localStorage.setItem('name', this.imie);
    }
  }

}
