import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserSession } from '../model/userSession.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { 
  
  }

  ngOnInit() {
    console.log(sessionStorage.getItem("userSession"))
    if (!new UserSession().validateUserSession())
      this.router.navigate(["/login"]);
  }

}
