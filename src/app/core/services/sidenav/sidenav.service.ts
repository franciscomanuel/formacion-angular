import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private readonly isOpenedDefault = true;

  private readonly isOpenedSub = new BehaviorSubject<boolean>(
    this.isOpenedDefault
  );
  private readonly isOpened$ = this.isOpenedSub.asObservable();

  toogleState(): void {
    this.setState(!this.isOpenedSub.getValue());
  }

  setState(value: boolean): void {
    this.isOpenedSub.next(value);
  }

  getState(): Observable<boolean> {
    return this.isOpened$;
  }

  resetState(): void {
    this.isOpenedSub.next(this.isOpenedDefault);
  }
}
