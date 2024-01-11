import { Observable, delay, of } from 'rxjs';
import { DeferrablesViewComponent } from './deferrables-view/deferrables-view.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-deferrables',
  standalone: true,
  imports: [DeferrablesViewComponent],
  templateUrl: './deferrables.component.html',
  styleUrl: './deferrables.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeferrablesComponent {
  isTrue = false;
  constructor() {
    setTimeout(() => {
      this.isTrue = true;
    }, 5000);
  }
}
