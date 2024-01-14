import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { OutputComponent } from '../output/output.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [OutputComponent, InputComponent],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ParentsComponent {
  public outputName = signal(0);

  public output(event: number) {
    this.outputName.set(event);
    console.log(event);
  }
}
