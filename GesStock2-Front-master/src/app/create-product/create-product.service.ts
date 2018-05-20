import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../model/product.model';
import { Observable } from 'rxjs/Observable';
import { RestResponse } from './../model/restResponse.model';

@Injectable()
export class CreateProductService {

  constructor(private http: HttpClient) {

  }

  public validate(product: ProductModel): boolean {
    let isValid = true;

    /*
   //TODO falta validar bien los campos
    if(!product.refProducto){
        isValid = false;
     }
     else if(!product.nombreProducto){
       isValid = false;
     }*/

    return isValid;
  }

  public saveOrUpdateProduct(user: ProductModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8081/saveOrUpdateProduct", JSON.stringify(user));
  }
}