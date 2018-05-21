import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private permisosAdmin: boolean = false;
  private permisosUsuario: boolean = false;
  private permisosAlmacen: boolean = false;
  private usuario: String;

  constructor(private router: Router) {
    this.usuario = sessionStorage.getItem("userSession");

    if (sessionStorage.getItem("userRole") == "admin") {
      this.permisosAdmin = true;
      this.permisosUsuario = true;
      this.permisosAlmacen = true;
    }
    else if (sessionStorage.getItem("userRole") == "usuario")
      this.permisosUsuario = true;
    else if (sessionStorage.getItem("userRole") == "almacen")
      this.permisosAlmacen = true;
  }

  ngOnInit() { }

  goToCreateUser() {
    sessionStorage.setItem('createOrUpdateMessage', 'Crea un nuevo usuario');
    this.router.navigate(['/create-user']);
  }

  goToUsersList() {
    this.router.navigate(['/users-list']);
  }

  goToCreateProduct() {
    sessionStorage.setItem('createOrUpdateMessage', 'Crea un nuevo Producto');
    this.router.navigate(['/create-product']);
  }

  goToProductsList() {
    this.router.navigate(['/products-list']);
  }

  logout() {
    sessionStorage.setItem("userSession", null);
    this.router.navigate(["/login"]);
  }

}
