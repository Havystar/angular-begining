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
    this.setGreating();
    if (localStorage.getItem('name') !== "" && localStorage.getItem('name') !== undefined) {
      this.name = JSON.parse(localStorage.getItem('name') || '{}');
    }
  }

  setGreating() {
    const date = new Date();
    if (date.getHours() > 5 && date.getHours() < 19) {
      this.greating = "Dzień dobry";
    }
  }
  setName(event: Event) {
    if ((event.target as HTMLInputElement).value !== "") {
      this.name = (event.target as HTMLInputElement).value;
      localStorage.setItem('name', this.name);
    }
  }

}
