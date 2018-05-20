import { HttpClient } from '@angular/common/http';
import { RestResponse } from './../model/restResponse.model';
import { UserModel } from './../model/user.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class CreateUserService {

  constructor(private http:HttpClient) {

   }

   public validate(user: UserModel) : boolean{
    let isValid = true;

    
    if(!user.nombre){
        isValid = false;
     }
     else if(!user.apellidos){
       isValid = false;
     }
     else if(!user.usuario){
      isValid = false;
    }
    else if(!user.pass){
      isValid = false;
    }
    else if(!user.email){
      isValid = false;
    }
     
     return isValid;
   }
    
  public saveOrUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8081/saveOrUpdate", JSON.stringify(user));
  }
}
