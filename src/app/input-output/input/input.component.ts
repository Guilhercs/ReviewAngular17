import { Component, Input, signal } from '@angular/core';

function toUpperCase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  public name = signal('');
  @Input({ required: true, transform: toUpperCase })
  set InputName(value: string) {
    this.name.set(value);
  }
}
