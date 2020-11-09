import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie, Role } from '../user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobileQuery: MediaQueryList;

  regProv : boolean = false;
  role : Role = Role.Admin;
  movies : Movie[];
  search : string = "";

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
     media: MediaMatcher,
      private movieService : MovieService, 
      public userService : UserService,
      private router : Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  promeniRegProv(){
    this.regProv = !this.regProv;
  }

  Logout(){
    this.userService.logout();
  }

  setRegProv(p : boolean){
    this.regProv = p;
  }
  
  ngOnInit(){}
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
