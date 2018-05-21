import { Component, OnInit } from '@angular/core';
import { UserSession } from '../model/userSession.model';
import { Router } from '@angular/router';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private nombre: String;
  private apellido: String;
  private role: String;
  private email: String;
  private telefono: String;
  private userModel: UserModel;
  constructor(private router: Router) { 
    this.userModel = JSON.parse(sessionStorage.getItem ("userProfile"));

    this.role = this.userModel.role;
    this.nombre = this.userModel.nombre;
    this.apellido = this.userModel.apellidos;
    this.email = this.userModel.email;
    this.telefono = this.userModel.telefono;
  }

  ngOnInit() {
    if (!new UserSession().validateUserSession())
      this.router.navigate(["/login"]);
  }

}
