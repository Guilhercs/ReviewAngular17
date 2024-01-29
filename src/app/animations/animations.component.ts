import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  animations: [
    trigger('move-circle', [
      state(
        'move-left',
        style({
          transform: 'scale(1) translateX(0) rotate(0deg)',
        })
      ),
      state(
        'move-right',
        style({
          transform: 'scale(0.7) translateX(300px) rotate(360deg)',
        })
      ),
      transition('move-left <=> move-right', animate('1s')),
      transition(':enter', [animate('1s', keyframes([
        style({}),
        style({})
      ]))]),
      transition(':leave', animate('2s')),
    ]),
  ],
})
export class AnimationsComponent {
  public moveIn = signal('move-left');
}
