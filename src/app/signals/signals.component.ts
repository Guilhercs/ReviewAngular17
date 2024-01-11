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
}
