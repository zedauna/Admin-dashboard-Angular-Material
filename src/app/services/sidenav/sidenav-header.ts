import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class sidenavHeaderService {
  // observable chaud
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  public toggle() {
    return this.sideNavToggleSubject.next(null);
  }
}
