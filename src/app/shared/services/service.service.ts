import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, shareReplay, take, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  constructor() {}

  #setListTask = signal<ITask[] | null>(null);
  get getList() {
    return this.#setListTask.asReadonly();
  }
  getListTask(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTask.set(res))
    );
  }

  #getTaskId = signal<ITask | null>(null);
  get getId() {
    return this.#getTaskId.asReadonly();
  }

  getTaskId(id: string): Observable<ITask> {
    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#getTaskId.set(res))
    );
  }

  #postTaskId = signal<ITask | null>(null);
  get postTask() {
    return this.#postTaskId.asReadonly();
  }

  postTask$(title: string): Observable<ITask> {
    return this.#http.post<ITask>(this.#url(), { title }).pipe(
      shareReplay(),
      tap((res) => this.#postTaskId.set(res))
    );
  }
  #updateTask$ = signal<ITask | null>(null);
  get updateTask() {
    return this.#updateTask$.asReadonly();
  }

  updateTask$(id: string, title: string): Observable<ITask> {
    return this.#http.patch<ITask>(`${this.#url()}/${id}`, { id, title }).pipe(
      shareReplay(),
      tap((res) => this.#updateTask$.set(res))
    );
  }
}
