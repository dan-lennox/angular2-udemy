import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  constructor() { }

  public stringInterpolation: String = 'This is string interpolation';

  public numberInterpolation: Number = 2;

  public onTest(): boolean {
    return true;
  }

  public onClicked(value: string): void {
    alert(value + ' Called in parent');
  }
}
