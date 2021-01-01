// import { Injectable } from '@angular/core';

// export interface AppState {
//     mobileNavMenuIsOpen: boolean;
//   }

// @Injectable({
//   providedIn: 'root',
// })
// export class StateService {
//   private state: AppState = initialState;
//   private readonly stateSubject = new BehaviorSubject<AppState>(initialState);

//   setState<T extends keyof AppState>(key: T, value: AppState[T]): void {
//     this.state[key] = value;
//     this.stateSubject.next(this.state);
//   }

//   select<R>(selector: (state: AppState) => R): Observable<R> {
//     return this.stateSubject.pipe(map(selector), distinctUntilChanged());
//   }
// }
