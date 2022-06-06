import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuardStateManagerService {
  private canActivateState = new BehaviorSubject(false);
  private canActivateChildState = new BehaviorSubject(false);
  private canDeactivateState = new BehaviorSubject(false);
  private canLoadState = new BehaviorSubject(false);
  private resolve = new BehaviorSubject<any>(false);

  constructor() { }
  getActivate() {
    return this.canActivateState.getValue();
  }
  getActivateChild() {
    return this.canActivateChildState.getValue();
  }
  getDeactivate() {
    return this.canDeactivateState.getValue();
  }
  getLoad() {
    return this.canLoadState.getValue();
  }
  getResolve() {
    return this.resolve.getValue();
  }

  setActivate(v: boolean) {
    this.canActivateState.next(v);
  }
  setActivateChild(v: boolean) {
    this.canActivateChildState.next(v);
  }
  setDeactivate(v: boolean) {
    this.canDeactivateState.next(v);
  }
  setLoad(v: boolean) {
    this.canLoadState.next(v);
  }
  setResolve(v: any) {
    this.resolve.next(v);
  }
}
