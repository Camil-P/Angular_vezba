import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User, UserDTO, USERS, Role } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = USERS;
  loggedUser: User = null;

  constructor(private router: Router) { }

  login(loginData: UserDTO): Observable<User> {
    const user = this.users.find(u => u.username === loginData.username && u.password === loginData.password);
    if (user) {
      if (localStorage.getItem('user')) {
        localStorage.clear();
      }
      this.loggedUser = user;
      localStorage.setItem('user', JSON.stringify(user));
    }
    return of(user);
  }
  register(user: UserDTO): void {
    if (this.loggedUser !== null && this.loggedUser.role === Role.Admin) {
      this.users.push({
        ...user,
        id: this.users.length + 1,
        role: user.role
      });
    }
    else{
      this.users.push({
        ...user,
        id: this.users.length + 1,
        role: Role.User
      });
    }
  }
  edit(u : User){
    this.users.forEach(user => {
      if(user.id===u.id){
        user.ime = u.ime;
        user.prezime = u.prezime;
        user.username = u.username;
      }
    })
  }
  remove(user:User){
    this.users = this.users.filter(u => u.id !== user.id);
  }
  setLoggedUser(user: User): void {
    this.loggedUser = user;
  }
  logout(): void {
    this.loggedUser = null;
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
