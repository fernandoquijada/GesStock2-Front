import { ProductModel } from './../model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductsListService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>("http://localhost:8081/getProducts");
  }

  public delete(product: ProductModel): void {
    this.http.post("http://localhost:8081/deleteProduct", JSON.stringify(product));
  }
}
