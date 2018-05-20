import { HttpClient } from '@angular/common/http';
import { RestResponse } from './../model/restResponse.model';
import { UserLogin } from './../model/userLogin.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';

@Injectable()
export class LoginService {

  private userModel :  Observable<UserModel>;
  constructor(private http: HttpClient) { }

  public login(user: UserLogin): Observable<UserModel> {
    console.log(user.usuario)
    console.log(user.pass)
    this.userModel =  this.http.post<UserModel>("http://localhost:8081/validateUserLogin", {
      "usuario": user.usuario, "pass": user.pass
    });
    console.log(JSON.stringify(this.userModel))
    return this.userModel;
  }
}
