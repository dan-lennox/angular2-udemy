import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
    
    The persons name is {{ person.name }}
  `,
  styles: []
})
export class TwoWayBindingComponent {
  public person: Object = {
     name: 'Dan',
     age: 30
  };
}
