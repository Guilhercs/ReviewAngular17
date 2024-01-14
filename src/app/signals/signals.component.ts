import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  public firstName = signal('Stephen');
  public lastName = signal('Hawkings');
  public fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`;
  });
  public array = signal([1]);

  constructor() {}

  updateArray() {
    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1];
    });
  }
}
