import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Resolve,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { combineLatest, delay, Observable, of } from 'rxjs';
import { GuardStateManagerService } from "../services/guard-state-manager.service";

@Injectable({
  providedIn: 'root'
})
export class RouterManagerGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad, Resolve<any> {
  constructor(private guardStateManagerService: GuardStateManagerService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.guardStateManagerService.getActivate();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.guardStateManagerService.getActivateChild() && childRoute.routeConfig?.path === 'accept';
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.guardStateManagerService.getDeactivate();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.guardStateManagerService.getLoad();
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log('start');
    return of({name: 'hunter'}).pipe(delay(3000));
  }

  logger() {
    console.table(
      [
        this.guardStateManagerService.getActivate(),
        this.guardStateManagerService.getActivateChild(),
        this.guardStateManagerService.getDeactivate(),
        this.guardStateManagerService.getLoad(),
        this.guardStateManagerService.getResolve()
      ]
    )
  }
}
