import { UserLogin } from './../model/userLogin.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSession } from '../model/userSession.model';
import { LoginService } from './login.service';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private userLoginModel: UserLogin;
  private userModel;
  private userLogin: Array<UserLogin> = null;
  private sesionDeUsuario: UserSession;

  constructor(private loginService: LoginService, private router: Router) {
    this.userLoginModel = new UserLogin;
  }

  ngOnInit() {
    if (new UserSession().validateUserSession())
      this.router.navigate(["/index"]);
  }

  login() {
    if (this.userLoginModel.usuario != null && this.userLoginModel.pass != null)
      this.loginService.login(this.userLoginModel).subscribe(res => {
        console.log(this.userLoginModel.usuario)
        console.log(this.userLoginModel.pass)
        this.userModel = res;
        console.log(this.userModel != null)
        if (this.userModel != null) {
          console.log("ha entrado")
          sessionStorage.setItem("userSession", this.userModel.usuario);
        }
        this.router.navigate(["/index"]);
      });

    else
      console.log("Falta rellenar usuario o password")

  }

  entra() {
     
    
  }
}
