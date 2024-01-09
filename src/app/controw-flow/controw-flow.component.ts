import { AsyncPipe, CommonModule,  } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-controw-flow',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './controw-flow.component.html',
  styleUrl: './controw-flow.component.scss',
})
export class ControwFlowComponent {
  public isTrue = false;
  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(4000));
  public emptyArray$ = new BehaviorSubject<string[]>([])

  ngOnInit() {
    setTimeout(() => {
      this.isTrue = true;
    }, 3000);
  }
}
