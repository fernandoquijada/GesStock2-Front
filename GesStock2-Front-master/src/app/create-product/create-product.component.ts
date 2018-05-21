import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { Router } from '@angular/router';
import { CreateProductService } from './create-product.service';
import { OK } from '../model/httpstatus';
import { UserSession } from '../model/userSession.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [CreateProductService]
})
export class CreateProductComponent implements OnInit {

  private product: ProductModel;
  private isValid: boolean = true;
  private message: string = "¡Rellena los campos obligatorios!";
  private createOrUpdateMessage: string = '__ producto __';

  constructor(private CreateProductService: CreateProductService, private router: Router) {
    console.log(sessionStorage.getItem("productEdit"))
    if (sessionStorage.getItem("productEdit"))
      this.product = JSON.parse(sessionStorage.getItem("productEdit"));
    else
      this.product = new ProductModel;
  }

  ngOnInit() {
    if (new UserSession().validateUserSession()) {
      //set al campo productEdit una vez recogido en el constructor
      sessionStorage.setItem('productEdit', JSON.stringify(new (ProductModel)));

      //se coge el mensaje enviado por el navbar
      if (sessionStorage.getItem('createOrUpdateMessage')) {
        this.createOrUpdateMessage = sessionStorage.getItem('createOrUpdateMessage');

        if (sessionStorage.getItem('userRole') != "admin" && sessionStorage.getItem('userRole') != "almacen")
          this.router.navigate(["/index"]);

      }
      else
        this.router.navigate(["/login"]);
    }
  }

  public saveOrUpdateProduct(): void {
    console.log("Guardando...");
    this.isValid = this.CreateProductService.validate(this.product);
    console.log(this.product);
    if (this.isValid) {
      this.CreateProductService.saveOrUpdateProduct(this.product).subscribe(res => {
        if (res.responseCode == OK) {
          this.router.navigate(['/products-list']);
        }
        else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    }
  }
}
