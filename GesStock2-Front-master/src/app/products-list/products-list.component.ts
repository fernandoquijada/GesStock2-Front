import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { ProductsListService } from '../products-list/products-list.service';
import { Router } from '@angular/router';
import { UserSession } from '../model/userSession.model';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductsListService]
})
export class ProductsListComponent implements OnInit {
  private products: Array<ProductModel> = null;
  private productToDelete: ProductModel = new (ProductModel);  //si no se inicia da fallo al cargar el html de inicio

  /*Fernando: No sé lo que hace el router*/
  constructor(private ProductsListService: ProductsListService, private router: Router) { }

  ngOnInit() {
    if (new UserSession().validateUserSession())
      this.loadProducts();
    else
      this.router.navigate(["/login"]);
  }

  private loadProducts(): void {
    this.ProductsListService.getProducts().subscribe(res => {
      this.products = res;
      console.log(res);
    });
  }

  public edit(product: ProductModel): void {
    //agregamos el usuario a la sesion con la clave userEdit
    sessionStorage.setItem('productEdit', JSON.stringify(product));
    sessionStorage.setItem('createOrUpdateMessage', 'Edita el producto');
    this.router.navigate(['/edit-product']);
  }

  public delete(): void {
    this.ProductsListService.delete(this.productToDelete);
    location.reload();
  }

  public devuelveNombre(nombre: String): String {
    return nombre;
  }

  public setProductToDelete(product: ProductModel): void {
    this.productToDelete = product;
  }
}
