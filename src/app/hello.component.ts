import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello my name is {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
