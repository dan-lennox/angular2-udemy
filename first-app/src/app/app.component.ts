import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Root Component';

  public delete: boolean = false;

  public test: string = 'Starting value';

  public boundValue: number = 1000;
}
