import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
    {{ result }}
  `,
  styles: []
})
export class PropertyBindingComponent {

  @Input() public result: number = 0;

}
