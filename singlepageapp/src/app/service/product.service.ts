
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { product } from '../model/product';
//service calss will have @injectable annotation
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getproductById(productId: number) {
    throw new Error('Method not implemented.');
  }
  getproduct() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }


getProducts(){
  return this.http.get<product[]>("http://localhost:8080/product/api.2.0/retrieve/all")
}

saveProduct(product:product):
Observable<Object>{
return this.http.post("http://localhost:8080/product/api.2.0/create",
product);
}
getProductById(id: number): Observable<product> {
  return this.http.get<product>(`http://localhost:8080/product/api.2.0/retrieve/${id}`);
}

updateProduct(product: product): Observable<Object> {
  return this.http.put(`http://localhost:8080/product/api.2.0/update/${product.productId}`, product);
}

deleteProductById(id: number): Observable<Object> {
  return this.http.delete<product>(`http://localhost:8080/product/api.2.0/delete/${id}`);
}



}
