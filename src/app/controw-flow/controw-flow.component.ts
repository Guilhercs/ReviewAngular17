import { Component } from '@angular/core';

@Component({
  selector: 'app-controw-flow',
  standalone: true,
  imports: [],
  templateUrl: './controw-flow.component.html',
  styleUrl: './controw-flow.component.scss'
})
export class ControwFlowComponent {
isTrue = false;

ngOnInit() {
  setTimeout(() => {
    this.isTrue = true;
  }, 3000);
}
}
