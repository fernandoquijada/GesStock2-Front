import { UserSession } from './../model/userSession.model';
import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  private users: Array<UserModel>
  private userToDelete: UserModel = new (UserModel)
  private permisosAdmin: boolean = false;

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit() {
    console.log(new UserSession().validateUserSession())
    if (new UserSession().validateUserSession()) {
      if (sessionStorage.getItem("userRole") == "admin") {
        this.permisosAdmin = true;
        this.loadUsers();
      }
      else if (sessionStorage.getItem("userRole") == "usuario")
        this.loadUsers();

      else
        this.router.navigate(["/index"]);
    }
    else
      this.router.navigate(["/login"]);

  }

  private loadUsers(): void {
    this.UserService.getUsers().subscribe(res => {
      this.users = res;
      console.log(res);
    });
  }

  public edit(user: UserModel): void {
    //agregamos el usuario a la sesion con la clave userEdit
    sessionStorage.setItem('userEdit', JSON.stringify(user));
    sessionStorage.setItem('createOrUpdateMessage', 'Edita el usuario');
    this.router.navigate(['/edit-user']);
  }

  public delete(): void {
    this.UserService.delete(this.userToDelete);
    location.reload();
  }

  public setUserToDelete(user: UserModel): void {
    this.userToDelete = user;

  }
}
