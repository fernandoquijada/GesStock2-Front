import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private users: Array<UserModel>;
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>("http://localhost:8081/getUsers");
  }

  public delete(user: UserModel): void {
    this.http.post("http://localhost:8081/deleteUser", JSON.stringify(user)).subscribe();
  }
}
