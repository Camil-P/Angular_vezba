import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.scss']
})
export class KorisniciComponent implements OnInit{

  editUser : User;
  users : User[] = [];
  constructor(public userService: UserService, private dialog : MatDialog) { }

  edit(u : User){
    this.editUser = {...u};
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '300px',
      data: this.editUser
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.edit(result);
      this.fetch();
    });
  }
  delete(u : User){
    this.userService.remove(u);
    this.fetch();
  }
  ngOnInit(){
    this.fetch();
  }
  fetch(){
    this.users = this.userService.users;
  }
}
