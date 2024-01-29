import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ITask, ServiceService } from '../shared/services/service.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { concatMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent implements OnInit {
  #service = inject(ServiceService);

  public firstName = signal('Stephen');
  public lastName = signal('Hawkings');

  public fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`;
  });

  public array = signal([1]);

  // public getTask = signal<null | Array<{ id: string; title: string }>>(null);
  //public getTask$ = toSignal(this.#service.getListTask());

  public getListTask = this.#service.getList;
  public getTaskId = this.#service.getId;

  constructor() {}

  ngOnInit() {
    // this.getTasks();
    this.#service.getListTask().subscribe();
  }

  public createTask() {
    return this.#service
      .postTask$('maça')
      .pipe(switchMap(() => this.#service.getListTask()))
      .subscribe({
        next: (res) => console.log(res),
        error: (e) => console.log(e),
      });
  }

  public taskUpdate(id: string, title: string) {
    return this.#service
      .updateTask$(id, title)
      .pipe(concatMap(() => this.#service.getListTask()))
      .subscribe();
  }

  public taskDelete(id: string) {
    return this.#service
      .taskDelete$(id)
      .pipe(concatMap(() => this.#service.getListTask()))
      .subscribe();
  }

  // getTasks() {
  //   this.#service.getListTask().subscribe({
  //     next: (res) => {
  //       console.log('tasks', res);
  //       this.getTask.set(res);
  //     },
  //     error: () => {},
  //     complete: () => {},
  //   });
  // }

  updateArray() {
    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1];
    });
  }
}
