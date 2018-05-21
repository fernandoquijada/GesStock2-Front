import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { CreateUserService } from './create-user.service';
import { OK } from '../model/httpstatus';
import { Router } from '@angular/router'
import { UserSession } from '../model/userSession.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private userEdit: UserModel;
  private isValid: boolean = true;
  private message: string = "¡Rellena los campos obligatorios marcados con * !";
  private createOrUpdateMessage: string = '__ usuario __';

  constructor(private CreateUserService: CreateUserService, private router: Router) {
    
    if (sessionStorage.getItem("userEdit")) {
      this.userEdit = JSON.parse(sessionStorage.getItem("userEdit"));
    }
    else
      this.userEdit = new UserModel;
  }

  ngOnInit() {
    if (new UserSession().validateUserSession()) {
      //set al campo userEdit una vez recogido en el constructor
      sessionStorage.setItem('userEdit', JSON.stringify(new (UserModel)));

      //se coge el mensaje enviado por el navbar
      if (sessionStorage.getItem('createOrUpdateMessage')) {
        this.createOrUpdateMessage = sessionStorage.getItem('createOrUpdateMessage');
        
        if (sessionStorage.getItem('userRole') != "admin")
        this.router.navigate(["/index"]);   
      }
    }
    else
      this.router.navigate(["/login"]);

  }

  public saveOrUpdate(): void {
    this.isValid = this.CreateUserService.validate(this.userEdit);

    if (this.isValid) {
      this.CreateUserService.saveOrUpdate(this.userEdit).subscribe(res => {
        if (res.responseCode == OK) {
          this.router.navigate(['/users-list']);
        }
        else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    }
  }
}
