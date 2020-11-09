import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { sha256 } from '../hash';
import { UserService } from '../services/user.service';
import { Role, UserDTO } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() regProvera : boolean = false;
  @Output() valueChanged = new  EventEmitter<boolean>();

  roleProvera : boolean = false;
  rolovi : Role[] = [Role.User, Role.Admin];
  korisnik = { username: "", password: "", ime: "", prezime: "", role : null } as UserDTO;

  constructor(private userService: UserService, private route : Router) { }

  ngOnInit(): void {
    if(this.userService.loggedUser && this.userService.loggedUser.role === Role.Admin){
      this.roleProvera = true;
    }
  }

  async login() : Promise<void>{
    this.userService.login(this.korisnik).subscribe(u => {
      if(u)
        this.route.navigate(['/home']);
      else
        window.alert("Greska");
    });
  }
   
  async register() : Promise<void>{
    if(this.regProvera){
      const sifra = await sha256(this.korisnik.password);
      this.userService.register(this.korisnik);
      this.regProvera = false;
      this.valueChanged.emit(false);
    }
    else{
      this.regProvera = true;
      if(this.userService.loggedUser.role === Role.Admin){
        this.roleProvera = true;
      }
    }
    this.anuliraj();
  }

  anuliraj(){
    this.korisnik = { username: "", password: "", ime: "", prezime: "" }
  }

  get getRegButTxt(){ 
    if(this.regProvera)
      return "CONFIRM"
    return "CREATE"
  }

  get getTitleTxt(){
    if(this.regProvera)
      return "REGISTRACIJA"
    return "LOGIN"
  }
}
