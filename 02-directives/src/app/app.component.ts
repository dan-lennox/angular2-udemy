import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _switch = true;

  private _items: Array<Number> = [1, 2, 3, 4, 5];

  private _value: Number = 100;

  onSwitch() {
    this._switch = !this._switch;
  }
}
