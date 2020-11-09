import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private route: Router, private userService: UserService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.userService.loggedUser) {
      return true;
    }
    const user = JSON.parse(localStorage.getItem('user')) as User;
    if(user){
      this.userService.setLoggedUser(user);
      return true;
    }
    
    this.route.navigate(['/login']);
    return false;
  }

}
