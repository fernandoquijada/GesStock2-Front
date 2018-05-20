import { Component, OnInit } from '@angular/core';
import { UserSession } from '../model/userSession.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit() {
    if(!new UserSession().validateUserSession())
      this.router.navigate(["/login"]);
  }

}
