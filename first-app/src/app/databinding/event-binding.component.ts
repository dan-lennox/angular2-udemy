import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClick()">Click me!</button>
  `,
})
export class EventBindingComponent {

  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  public onClick(): void {
    this.clicked.emit('Event emitter works!')
  }
}
