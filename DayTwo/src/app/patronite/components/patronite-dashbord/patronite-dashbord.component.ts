import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-patronite-dashbord',
  templateUrl: './patronite-dashbord.component.html',
  styleUrls: ['./patronite-dashbord.component.scss']
})

export class PatroniteDashbordComponent {

  constructor() { }
  methodList: SelectOption[] = [
    { value: '1', label: 'tpay' },
    { value: '2', label: 'payu' },
    { value: '3', label: 'przelew' },
  ];

  selected = "";
  value = 0;
  patroniteForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    messege: new FormControl('', Validators.required),
    method: new FormControl(undefined, Validators.required),
  });

  onSubmit() {
    console.log(this.patroniteForm.value);
  }

  onSelect(event: Event) {
    this.selected = (event.target as HTMLInputElement).value;
    this.value = this.methodList.findIndex(m => m.label === this.selected);
  }

}
