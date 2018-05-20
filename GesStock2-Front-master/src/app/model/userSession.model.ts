import { UserModel } from "./user.model";
import { Router } from "@angular/router";

export class UserSession extends UserModel{  
    userSession: string = null;
    router: Router;
    
    constructor(){
        super();
    }

    validateUserSession(): boolean {
        this.userSession = sessionStorage.getItem("userSession")
        console.log("El usuario al validar es: ",this.userSession)
        if (sessionStorage.getItem("userSession") == "null")
            return false;
        else
            console.log("El usuario al devolver true es: ",sessionStorage.getItem("userSession"))       
            return true;
      }

}