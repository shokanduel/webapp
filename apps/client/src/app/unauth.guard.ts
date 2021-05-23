import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Inverse of the Auth Guard.  Only allows the user to access a route if they are not authenticated
 * NOT IMPLEMENTED: Need backend authentication to be completed first
 */
@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
