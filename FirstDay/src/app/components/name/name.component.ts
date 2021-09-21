import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})


export class NameComponent {
  name = "";
  greating = "Dobry wieczór";
  constructor() {
    let date = new Date();
    if (date.getHours() > 5 && date.getHours() < 19) {
      this.greating = "Dzień dobry";
    }
    let fromLS = localStorage.getItem('name');
    if (fromLS != "" && fromLS != undefined) {
      this.name = fromLS;
    }
  }

  setName(event: any): void {
    if (event.target.value != "") {
      this.name = event.target.value;
      localStorage.setItem('name', this.name);
    }
  }

}
