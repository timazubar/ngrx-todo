import { TodoLoadState } from './../store/todo/todo.actions';
import { Store, select } from '@ngrx/store';
import { Injectable, HostListener } from '@angular/core';
import { filter } from 'rxjs/operators';

import { todoFeatureSelector } from './../store/todo/todo.selectors';
import { TodoState } from './../store/todo/todo.reducer';

export const TODO_LOCALSTORAGE_KEY = 'todo';

@Injectable({
  providedIn: 'root',
})
export class StorageSyncService {
  private isInit = false;

  constructor(private store$: Store<TodoState>) {}

  init(): void {
    if (this.isInit) {
      return;
    }
    this.isInit = true;
    this.loadFromStorage();

    this.store$
      .pipe(
        select(todoFeatureSelector),
        filter((state) => !!state)
      )
      .subscribe((state) => {
        localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state));
      });

    window.addEventListener('storage', () => this.loadFromStorage());
  }

  private loadFromStorage(): void {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(
        new TodoLoadState({
          state: JSON.parse(storageState),
        })
      );
    }
  }
}
